import Phaser from "phaser";

export default class AlzheimersEducation extends Phaser.Scene {
    constructor() {
        super('alzheimerseducation')
    }


    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    preload() {
    }

    create() {
        var index = this.getRandomInt(6);
        console.log("test");

        var warningSigns = [
            "Memory loss that disrupts daily life, such as getting lost in a familiar place or repeating questions.",
            "Trouble handling money and paying bills.",
            "Difficulty completing familiar tasks at home, at work or at leisure.",
            "Decreased or poor judgment.",
            "Misplacing things and being unable to retrace steps to find them.",
            "Changes in mood, personality, or behavior."
        ]

        var warningSignsDisclaimer = "Even if you or someone you know has this symptom, it doesn’t mean it’s Alzheimer’s disease.";

        const { width, height } = this.scale;
        this.add.text(width * 0.5, height * 0.2, `What is one warning sign of Alzheimer's disease?`, {
            fontSize: 40,
            wordWrap: {
                width: width*0.8,
                useAdvancedWrap: true
            },
            align: 'center'
        })
        .setOrigin(0.5)
    
        this.add.text(width * 0.5, height * 0.6, `${warningSigns[index]}`, {
            fontSize: 30,
            wordWrap: {
                width: width*0.8,
                useAdvancedWrap: true
            },
            align: 'center'
        }).setOrigin(0.5)

        this.add.text(width * 0.5, height * 0.80, `*${warningSignsDisclaimer}`, {
            fontSize: 20,
            wordWrap: {
                width: width*0.9,
                useAdvancedWrap: true
            },
            align: 'center',
            fontStyle: 'italic'
        }).setOrigin(0.5)

        this.add.text(width * 0.5, height * 0.95, `Click anywhere to play the game again!`, {
            fontSize: 25,
        }).setOrigin(0.5)



        this.input.on('pointerdown', () => this.scene.start('alzheimerspreloader'));
    }
    
}