import Phaser from "phaser";

export default class depressionPreloader extends Phaser.Scene {
    constructor() {
        super('depressionPreloader')
        
    }

    create() {
        
        this.scene.start('depressionGame')
    }
} 