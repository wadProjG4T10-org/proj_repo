import Phaser from "phaser";

export default class gameOver extends Phaser.Scene {
    constructor() {
        super('gameOver')
    }
    preload() {
        this.load.image('gameover', './assets/gameover.png');
    }

    create() {
        this.add.button(0,0,'gameover',this.scene,this);

        this.add.text(300,250,"LAST SCORE",{font:"bolder 24px san-serif", fill: "#ffb00", align:"center"});
        this.add.text(300,250, score.toString(),{font:"bolder 26px san-serif", fill: "#fff", align:"center"});

        // GAME OVER (CAN'T FIX): still cannot have the overlay)
        // this.gameOverText = this.add.text(275, 250, `Game Over`, { fontSize: '32px', fill: '#000' }).setOrigin(0.5);
        // this.gameOverText.visible = false;

    }

    startGame() {
        this.scene.start('snakeGame')
    }

}
