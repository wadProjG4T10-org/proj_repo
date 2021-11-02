import Phaser from "phaser";

// var kriticalcare = require("../assets/kriticalcare.png");

export default class AlzheimersStart extends Phaser.Scene {
    constructor() {
        super('alzheimersstart')
    }

    preload() {

        // this.load.image('background', kriticalcare);
        const { width, height } = this.scale;
        // this.add.text(width * 0.5, height * 0.05, `Welcome to`, {
        //     fontSize: 70,
        //     fontStyle: "",
        //     align: "center",
        //     wordWrap: {
        //         width: width*0.8,
        //         useAdvancedWrap: true
        //     },
        // })
        // .setOrigin(0.5)

        const welcomeMessage = this.add.text(width * 0.5, height * 0.15, `[Animatch]`, {
            fontSize: 70,
            fontStyle: "",
            align: "center",
            wordWrap: {
                width: width*0.8,
                useAdvancedWrap: true
            },

        })
        .setOrigin(0.5)

        welcomeMessage.setStroke('#FFFF00');
        const gradient = welcomeMessage.context.createLinearGradient(0, 0, 0, welcomeMessage.height);
        // gradient.addColorStop(0, '#FFA500');
        // gradient.addColorStop(.5, '#FF007F');
        gradient.addColorStop(.5, '#FF69B4');
        gradient.addColorStop(1, '#77C3EC');
    
        welcomeMessage.setFill(gradient);

    
        this.add.text(width * 0.5, height * 0.75, `Alzheimer's Disease is the most common type of dementia. This disease involves parts of the brain that controls thought and memory.`, {
            fontSize: 25,
            wordWrap: {
                width: width*0.8,
                useAdvancedWrap: true
            },
            color: "#FF69B4",
            stroke: "#77C3EC",
            strokeThickness: .5,
            align: "center",
        }).setOrigin(0.5)

        this.add.text(width * 0.5, height * 0.9, `This game was created to tease your memory and to teach you more about this disease. Happy Learning! :)`, {
            fontSize: 25,
            wordWrap: {
                width: width*0.8,
                useAdvancedWrap: true
            },
            align: "center",
            fontStyle: "italic",
            color: "#7AD7F0",
            stroke: "#FF69B4",
            strokeThickness: .5,
        }).setOrigin(0.5)

        this.add.text(width * 0.5, height * 0.5, `<Click anywhere to play>`, {
            fontSize: 25,
            wordWrap: {
                width: width*0.8,
                useAdvancedWrap: true
            },
        }).setOrigin(0.5)


    }

    create() {
        // let bg = this.add.image(0,0, "background");

        // bg.displayHeight = this.game.config.height;
        // bg.scaleX = bg.scaleY;

        // bg.y = this.game.config.height/2;
        // bg.x = this.game.config.width/2;

        // bg.x = bg.displayWidth*.5;

        this.input.on('pointerdown', () => this.scene.start('alzheimerspreloader'));
    }
    
}