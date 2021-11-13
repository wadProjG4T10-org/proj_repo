// import { random } from "core-js/core/number";
import Phaser from "phaser";
import eventsCenter from "./EventsCenter";
import { doc, updateDoc, getFirestore, increment } from "firebase/firestore";



var items = [
    [1, 0, 3, 2],
    [3, 4, 6, 7],
    [5, 2, 1, 5],
    [4, 0, 7, 6]
]

export default class AlzheimersGame extends Phaser.Scene {

    /** @type { Phaser.Physics.Arcade.Sprite } */
    character;

    /** @type { Phaser.Types.Input.Keyboard.CursorKeys } */
    cursors;

    /** @type { Phaser.Physics.Arcade.StaticGroup } */
    crateGroup;

    /** @type {Phaser.Physics.Arcade.Sprite} */
    selectedCrate;

    /** @type { Phaser.GameObjects.Group } */
    itemsGroup;

    /** @type { { box: Phaser.Physics.Arcade.Sprite, item: Phaser.GameObjects.Sprite } } */
    openedCrates = [];

    countMatches = 0;
    
    constructor() {
        super('alzheimersgame');
        this.alzhgame_score = 0;
        eventsCenter.emit('score', this.alzhgame_score);
    }

    

    init() {
        this.cursors = this.input.keyboard.createCursorKeys();

    }

    preload() {
        this.randomiseCases(true);

        // const { width, height } = this.scale;

        // this.instructionsOne = this.add.text(width * 0.5, height * 0.05, `Match the animals to win!`, {
        //     fontSize: 20,
        // })
        // .setOrigin(0.5)

        // this.instructionsTwo = this.add.text(width * 0.5, height * 0.08, `Use arrow keys to move character and click <spacebar> to peek into the crates`, {
        //     fontSize: 20,
        // })
        // .setOrigin(0.5)

    }

    create() {
        const { width, height } = this.scale;
        this.character = this.physics.add.sprite(width * 0.5, height * 0.5, 'character')
            .setSize(40, 16)
            .setOffset(12, 48)
            .play('down-still');

            this.character.setCollideWorldBounds(true);

            this.crateGroup = this.physics.add.staticGroup();
            this.createCrates();

            this.itemsGroup = this.add.group();

            this.physics.add.collider(this.character, this.crateGroup, this.characterCrateCollide, undefined, this);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    randomiseCases(debugMode = false) {
        if (debugMode){
            outerArray = [
                [0, 0, 1, 1],
                [2, 2, 3, 3],
                [4, 4, 5, 5],
                [6, 6, 7, 7]
            ]
        } else {
            const animalDicionary = {};
            for (var i = 0; i < 8; i++) {
                animalDicionary[i] = 0;
            }

            var outerArray = [];
            for (var j = 0; j <= 3; j ++) {
                const innerArray = [];
                for (var k = 0; k <= 3; k ++) {
                    var randomNumber1 = this.getRandomInt(8);
                    while (animalDicionary[randomNumber1] >= 2) {
                        randomNumber1 = this.getRandomInt(8);
                    }
                    innerArray.push(randomNumber1);
                    // console.log('if')
                    // console.log(outerArray);
                    animalDicionary[randomNumber1] += 1; 
                }
                // this.getRandomInt()
                outerArray.push(innerArray);
            }
        }
        
        items = outerArray;
    }

    createCrates() {
        const { width, height } = this.scale;
        
        let x = width * 0.20;
        let y = height * 0.20;

        for (let row = 0; row < items.length; row++) {
            for (let col = 0; col < items[row].length; col ++){
                /** @type { Phaser.Physics.Arcade.Sprite} */
                const crate = this.crateGroup.get(x, y, 'character', 7);
                crate.setSize(64, 32)
                    .setOffset(0, 32)
                    .setData('itemType', items[row][col])

                x += width * 0.20;
            }
            x = width * 0.20;
            y += height* 0.20;
        }
    }

    
    /** 
     *  @param { Phaser.Physics.Arcade.Sprite } character
     *  @param { Phaser.Physics.Arcade.Sprite } crate
     */
    characterCrateCollide(character, crate) {
        const opened = crate.getData('opened');
        // console.log(opened);
        if (opened) {
            return
        }

        if (this.selectedCrate) {
            return
        }

        this.selectedCrate = crate;

        this.selectedCrate.setFrame(9);
    }

    /** @param { Phaser.Physics.Arcade.Sprite } crate */
    revealCrate(crate) {
        if(!crate) {
            return
        }

        const itemType = crate.getData('itemType');

        /** @type { Phaser.GameObjects.Sprite }*/
        let item;
        switch (itemType) {
            case 0:
                item = this.itemsGroup.get(crate.x, crate.y);
                item.setTexture('bear');
                break

            case 1:
                item = this.itemsGroup.get(crate.x, crate.y);
                item.setTexture('buffalo');
                break

            case 2:
                item = this.itemsGroup.get(crate.x, crate.y);
                item.setTexture('chick');
                break

            case 3:
                item = this.itemsGroup.get(crate.x, crate.y);
                item.setTexture('chicken');
                break

            case 4:
                item = this.itemsGroup.get(crate.x, crate.y);
                item.setTexture('cow');
                break

            case 5:
                item = this.itemsGroup.get(crate.x, crate.y);
                item.setTexture('crocodile');
                break

            case 6:
                item = this.itemsGroup.get(crate.x, crate.y);
                item.setTexture('dog');
                break

            case 7:
                item = this.itemsGroup.get(crate.x, crate.y);
                item.setTexture('duck');
                break
        }

        if (!item) {
            return
        }

        crate.setData('opened', true);

        item.setData('sorted', true);
        item.setDepth(2000)

        item.scale = 0;
        item.alpha = 0;

        this.openedCrates.push({ crate, item });

        this.tweens.add({
            targets: item,
            y: '-=50',
            alpha: 1,
            scale: 0.4,
            duration: 500,
            onComplete: () => {
                if (this.openedCrates.length < 2) {
                    return
                }

                this.isMatch();
            }
        })

        this.selectedCrate.setFrame(7);
        this.selectedCrate = undefined;

    }

    isMatch() {
        const second_crate = this.openedCrates.pop();
        const first_crate = this.openedCrates.pop();

        if (first_crate.item.texture !== second_crate.item.texture) {

            this.tweens.add({
                targets: [first_crate.item, second_crate.item],
                y: '+50',
                alpha: 0,
                scale: 0,
                duration: 500,
                delay: 500,
                onComplete: () => {
                    first_crate.crate.setData('opened', false);
                    second_crate.crate.setData('opened', false);
                }
            })
            return
        }

        first_crate.crate.setFrame(8);
        second_crate.crate.setFrame(8);
        this.countMatches++;

        if (this.countMatches >= 8) {

            this.character.active = false;
            this.character.setVelocity(0, 0);

            // this.instructionsOne.destroy();
            // this.instructionsTwo.destroy();


            const { width, height } = this.scale;
            this.add.text(width * 0.5, height * 0.45, 'YOU WIN!', {
                fontSize: 48,
                color: "#86DC3D",
            })
            .setOrigin(0.5);

            this.alzhgame_score += 100;

            var userInformation = JSON.parse(window.localStorage['userInformation'])
            // console.log(userInformation);
            const db = getFirestore();
            var usersRef = doc(db, "users", userInformation.uid);
            updateDoc(usersRef, {score: increment(100)});
    
            
            userInformation['score'] += 100;
            userInformation = JSON.stringify(userInformation)
            window.localStorage.setItem('userInformation', userInformation);

            eventsCenter.emit('score', this.alzhgame_score);
            this.scoreText = this.add.text(width * 0.5, height * 0.9, `Points Earned: ${this.alzhgame_score}`, {
                color: "#86DC3D",
                fontSize: 30,
            })
            .setOrigin(0.5)

            this.message = this.add.text(width * 0.5, height * 0.95, `<Click anywhere on the screen to proceed>`, {
                fontSize: 25,
            })
            .setOrigin(0.5)
            this.countMatches = 0;
            this.alzhgame_score = 0;

            this.input.on('pointerdown', () => this.scene.start('alzheimerseducation'));
            // eventsCenter.emit('score', this.alzhgame_score);

        }
    }

    updateCharacter() {
        const movement = 180;

        if (this.cursors.left.isDown) {
            this.character.setVelocity(-movement, 0);
            this.character.play('left-walk', true);
        }

        else if (this.cursors.right.isDown) {
            this.character.setVelocity(movement, 0);
            this.character.play('right-walk', true);
        }

        else if (this.cursors.up.isDown) {
            this.character.setVelocity(0, -movement);
            this.character.play('up-walk', true);
        }

        else if (this.cursors.down.isDown) {
            this.character.setVelocity(0, movement);
            this.character.play('down-walk', true);
        }

        else {
            this.character.setVelocity(0, 0)
            const way = this.character.anims.currentAnim.key;
            const direction = way.split('-')[0];
            this.character.play(`${direction}-idle`)
        }

        const spacePressed = Phaser.Input.Keyboard.JustUp(this.cursors.space);
        
        if (spacePressed && this.selectedCrate) {
            this.revealCrate(this.selectedCrate)
        }
    }

    updateSelectedCrate() {
        if (!this.selectedCrate) {
            return
        }

        const distance = Phaser.Math.Distance.Between(
            this.character.x, this.character.y, 
            this.selectedCrate.x, this.selectedCrate.y
        );

        if (distance < 64) {
            return
        }

        this.selectedCrate.setFrame(7);
        this.selectedCrate = undefined;
    }

    update() {
        this.updateCharacter();

        this.updateSelectedCrate();

        this.children.each(game_object => {
            /** @type { Phaser.Physics.Arcade.Sprite } */
            // @ts-ignore
            const child = game_object;

            if (child.getData('sorted')) {
                return
            }


            child.setDepth(child.y);
        })


    }

}