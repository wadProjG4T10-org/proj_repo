import Phaser from "phaser";

export default class snakeStart extends Phaser.Scene {

    preload() {

    }

    create() {
        const title = this.add.text(250,250, 'Snake Game', {
            fontSize: 50,
            fontFamily: "../fonts/PressStart2P-Regular.ttf"
        })
        title.setOrigin(0.0,0.0)

        this.add.text(235, 300, 'Press Space to Start', {
            fontFamily: "../fonts/PressStart2P-Regular.ttf"  
        })
        .setOrigin(0.0,0.0)

        this.input.keyboard.once(`keydown-SPACE`, () => {
            this.scene.start('snakePreloader')
        })
    }

}