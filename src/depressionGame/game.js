import Phaser from "phaser";
import bgImg from  '../assets/images/background.png';
import mapJSON from "../assets/tilemaps/map.json";
import tileset from  '../assets/tilesets/tilesheet.png';
import spikeImg from '../assets/images/spike.png';
import playerImg from '../assets/images/player_sheet.png';
import playerJSON from '../assets/images/player.json';
import coinImg from '../assets/images/coin.png';
import exitSign from '../assets/images/exitSign.png';
import eventsCenter from "./EventsCenter";
import { doc, updateDoc, getFirestore, increment } from "firebase/firestore";


// var coinImg = require('../assets/images/coin.png');

export default class depressionGame extends Phaser.Scene {
    
     /** @type { Phaser.Types.Input.Keyboard.CursorKeys } */
     cursors;

    constructor() {
        
        super('depressionGame');

        this.hearts = 3;
        this.coins = 0;

        eventsCenter.emit('score', this.coins);

    }

    init() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    preload() {

        this.load.image('background', bgImg);
        this.load.image('tiles', tileset);
        this.load.image('spike', spikeImg);
        this.load.tilemapTiledJSON('map', mapJSON);
        this.load.atlas('player', playerImg, playerJSON);
        this.load.image('coin', coinImg);
        this.load.image('exit', exitSign);
    }

    create() {

        var map = this.make.tilemap({ key: 'map' });
        var tileset = map.addTilesetImage('tiles', 'tiles');
        var backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
        backgroundImage.setScale(8, 0.8);
        var platforms = map.createLayer('World', tileset, 0, 100);
        platforms.setCollisionByExclusion(-1, true);
        
        this.alive = true;
        this.hearts = 3;
        this.coins = 0;
        eventsCenter.emit('score', this.coins);

        // Add the player to the game world
        this.player = this.physics.add.sprite(50, 300, 'player');
        this.player.setBounce(0.1); 
        this.physics.world.setBounds( 0, 0, map.widthInPixels, 640);
        this.player.setCollideWorldBounds(true); 
        this.physics.add.collider(this.player, platforms);

        // Create the walking animation using the last 2 frames of
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('player', {
            prefix: 'robo_player_',
            start: 2,
            end: 3,
            }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'idle',
            frames: [{ key: 'player', frame: 'robo_player_0' }],
            frameRate: 10,
        });

        this.anims.create({
            key: 'jump',
            frames: [{ key: 'player', frame: 'robo_player_1' }],
            frameRate: 10,
        });

        this.spikes = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        // add coins
        var coinTiles = map.addTilesetImage('coin', 'coin');
        var coinLayer = map.createLayer('Coins', coinTiles, 0, 100);
        coinLayer.setTileIndexCallback(99, collectCoin, this);
        this.physics.add.overlap(this.player, coinLayer);
        
        // add exit as game won 
        var exitSign = map.addTilesetImage('exit', 'exit');
        var exitLayer = map.createLayer('exit', exitSign, 0, 100);
        exitLayer.setTileIndexCallback(100, gameWon, this);
        this.physics.add.overlap(this.player, exitLayer);


        map.getObjectLayer('spikes').objects.forEach((spike) => {
        const spikeSprite = this.spikes.create(spike.x, spike.y + 100 - spike.height, 'spike').setOrigin(0);
            spikeSprite.body.setSize(spike.width, spike.height - 20).setOffset(0, 20);
        });

        this.physics.add.collider(this.player, this.spikes, playerHit, null, this);

        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBackgroundColor('#82deff');
        var heart_text = this.add.text(20, 520, ('❤️'.repeat(this.hearts)), {
            fontSize: '20px',
            fill: '#ffffff'
        });

        var coin_text = this.add.text(20, 550, 'coins x 0', {
            fontSize: '20px',
            fill: '#ffffff'
        });

        // fix the text to the camera
        heart_text.setScrollFactor(0);
        coin_text.setScrollFactor(0);

        function playerHit() {
          this.player.setVelocity(0, 0);
          this.player.setX(50);
          this.player.setY(300);
          this.player.play('idle', true);
          this.player.setAlpha(0);
        
          this.hearts--;
          heart_text.setText('❤️'.repeat(this.hearts));
        
          if (this.hearts == 0) {
              this.alive = false;
          }
        
          this.tweens.add({
              targets: this.player,
              alpha: 1,
              duration: 100,
              ease: 'Linear',
              repeat: 5,
          });
      }
 
      function collectCoin(sprite, tile) {
        
        // console.log(sprite)
          coinLayer.removeTileAt(tile.x, tile.y);
          this.coins++;
          var userInformation = JSON.parse(window.localStorage['userInformation'])
          // console.log(userInformation);
          const db = getFirestore();
          var usersRef = doc(db, "users", userInformation.uid);
          updateDoc(usersRef, {score: increment(1)});
  
          
          userInformation['score'] += 1;
          userInformation = JSON.stringify(userInformation)
          window.localStorage.setItem('userInformation', userInformation);
          eventsCenter.emit('score', this.coins);
          coin_text.setText('coins x '+ this.coins);

      }
      
      // not working and idk why
      function gameWon() {
        this.alive = false;
        // console.log(this.alive)
        return;
        }
    }

    update() {

        if (!this.alive) {
          this.scoreText = this.add.text(
              570 * 0.5, 
              500 * 0.5, 
              `Coins Earned: ${this.coins}`, 
              {
                  color: "#000000",
                  fontSize: 30,
              }).setOrigin(0.5)
          
          this.message = this.add.text(570 * 0.5, 500 * 0.75, `<Click to continue>`, {
            color: "#000000",  
            fontSize: 25,
          })
          .setOrigin(0.5)

          this.input.on(`pointerdown`, () => this.scene.start('depressionOver'));
          return;
        }

        if (this.cursors.left.isDown) {
          this.player.setVelocityX(-200);
          if (this.player.body.onFloor()) {
            this.player.play('walk', true);
          }
        } else if (this.cursors.right.isDown) {
          this.player.setVelocityX(200);
          if (this.player.body.onFloor()) {
            this.player.play('walk', true);
          }
        } else {
          this.player.setVelocityX(0);
          if (this.player.body.onFloor()) {
            this.player.play('idle', true);
          }
        }
      
        if ((this.cursors.space.isDown || this.cursors.up.isDown) && this.player.body.onFloor()) {
          this.player.setVelocityY(-450);
          this.player.play('jump', true);
        }
      
        if (this.player.body.velocity.x > 0) {
          this.player.setFlipX(false);
        } else if (this.player.body.velocity.x < 0) {
          this.player.setFlipX(true);
        }

    }
}