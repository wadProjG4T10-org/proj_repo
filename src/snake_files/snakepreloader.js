import Phaser from "phaser";

// Assets Import

var food = require('../assets/cake-thirtytwo.png')
var head = require('../assets/snakehead-thirtytwo.png')
var body = require('../assets/body-sixteen.png')



export default class snakePreloader extends Phaser.Scene {
    constructor() {
        super('snakePreloader')
    }
    preload() {
        this.load.image('food', food);
        this.load.image('head', head);
        this.load.image('body', body);
    }

    create() {
        this.scene.start('snakeGame');
    }

}