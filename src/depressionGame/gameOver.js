import Phaser from "phaser";

export default class depressionOver extends Phaser.Scene {
    constructor() {
        super('depressionOver')
    }


    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    preload() {
    }

    create() {
        var index = this.getRandomInt(9);

        var symptoms = [
            "Feelings of helplessness and hopelessness.",
            "Loss of interest in daily activities.",
            "Significant weight loss or weight gain (a change of more than 5% of body weight in a month).",
            "Either not being able to sleep (especially waking in the early hours of the morning) or oversleeping.",
            "Low tolerance level, short tempered, and everything and everyone gets on your nerves.",
            "Strong feelings of worthlessness or guilt.",
            "Your whole body may feel heavy, and even small tasks are exhausting or take longer to complete.",
            "Trouble focusing, making decisions, or remembering things.",
            "An increase in physical complaints such as headaches, back pain, aching muscles, and stomach pain."
        ]

        var disclaimer = "Even if you or someone you know has this symptom, it doesn’t mean you have depression. Please see a doctor for official diagnosis";

        const { width, height } = this.scale;
        this.add.text(width * 0.5, height * 0.2, `Symptoms of Depression include:`, {
            fontSize: 40,
            wordWrap: {
                width: width*0.8,
                useAdvancedWrap: true
            },
            align: 'center'
        })
        .setOrigin(0.5)
    
        this.add.text(width * 0.5, height * 0.4, `${symptoms[index]}`, {
            fontSize: 25,
            wordWrap: {
                width: width*0.8,
                useAdvancedWrap: true
            },
            align: 'center'
        }).setOrigin(0.5)

        this.add.text(width * 0.5, height * 0.80, `*${disclaimer}`, {
            fontSize: 15,
            wordWrap: {
                width: width*0.9,
                useAdvancedWrap: true
            },
            align: 'center',
            fontStyle: 'italic'
        }).setOrigin(0.5)

        this.add.text(width * 0.5, height * 0.95, `<Click anywhere to play the game again!>`, {
            fontSize: 25,
        }).setOrigin(0.5)


        this.input.on('pointerdown', () => this.scene.start('depressionPreloader'));
    }
    
}