import Phaser from 'phaser';

// Assets Import
var character_path = require('../assets/sokoban_tilesheet.png');
var bear = require('../assets/bear.png');
var buffalo = require('../assets/buffalo.png');
var chick = require('../assets/chick.png');
var chicken = require('../assets/chicken.png');
var cow = require('../assets/cow.png');
var crocodile = require('../assets/crocodile.png');
var dog = require('../assets/dog.png');
var duck = require('../assets/duck.png');

export default class AlzheimersPreloader extends Phaser.Scene {
    constructor() {
        super('alzheimerspreloader')
    }

    preload() {
        this.load.spritesheet('character', character_path, {
            frameWidth: 64
        });

        this.load.image('bear', bear);
        this.load.image('buffalo', buffalo);
        this.load.image('chick', chick);
        this.load.image('chicken', chicken);
        this.load.image('cow', cow);
        this.load.image('crocodile', crocodile);
        this.load.image('dog', dog);
        this.load.image('duck', duck);
    }

    create() {
        this.anims.create({
            key: 'down-still',
            frames: [{ key:'character', frame: 52 }]
        })

        this.anims.create({
            key: 'up-still',
            frames: [{ key:'character', frame: 55 }]
        })

        this.anims.create({
            key: 'left-still',
            frames: [{ key:'character', frame: 81}]
        })

        this.anims.create({
            key: 'right-still',
            frames: [{ key:'character', frame: 78 }]
        })

        this.anims.create({
            key: 'down-walk',
            frames: this.anims.generateFrameNumbers('character', { start: 52, end: 54 }),
            frameRate: 8,
            repeat: -1,
        })

        this.anims.create({
            key: 'up-walk',
            frames: this.anims.generateFrameNumbers('character', { start: 55, end: 57 }),
            frameRate: 8,
            repeat: -1,
        })

        this.anims.create({
            key: 'left-walk',
            frames: this.anims.generateFrameNumbers('character', { start: 81, end: 83 }),
            frameRate: 8,
            repeat: -1,
        })

        this.anims.create({
            key: 'right-walk',
            frames: this.anims.generateFrameNumbers('character', { start: 78, end: 80 }),
            frameRate: 8,
            repeat: -1,
        })
        
        this.scene.start('alzheimersgame');
    }
    
}