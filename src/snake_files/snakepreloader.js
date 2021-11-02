import Phaser from "phaser";

export default class snakePreloader extends Phaser.Scene {
    constructor() {
        super('snakePreloader')
    }
    create() {
        this.scene.start('snakeGame')
    }
}