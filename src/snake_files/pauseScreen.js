// Refered to: https://phaser.io/examples/v3/view/scenes/pause-and-resume
import Phaser from "phaser";

export default class pauseScreen extends Phaser.Scene {

    constructor() {
        super('pauseScreen')
    }

    preload() {

    }

    create() {

        const { width, height } = this.scale;

        this.pauseText = this.add.text(width * 0.5, height * 0.5, `< Paused >`, {
            fontSize: 50,
            fontFamily: 'Arial',
            wordWrap: {
                width: width*0.8,
                useAdvancedWrap: true
            },
            color: "#ffffff",
            stroke: "#52658F",
            strokeThickness: .5,
            align: "center",
            backgroundColor: '#7ec4cf'
        }).setOrigin(0.5);

        this.pauseText.visible = true;
      
        // Click to start the scene, will head to snakePreloader and not snakeGame
        // as we would need to load the images 1st before running the codes in snakeGame.js
        this.input.keyboard.on(`keydown-R`, () => {
            this.pauseText.visible = false;
            this.scene.resume('snakeGame');
        });

    }

}
