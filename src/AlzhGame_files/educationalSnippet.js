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

        var warningSigns = [
            "Women are twice more likely to develop Alzhiemer's Disease than men.",
            "Did you know that heart disease can raise your risk of getting Alzheimer's?",
            "According to NIA, the more education you have, the lower your risk of getting AD.",
            "In the US, Alzheimer's is the only top 10 causes of death without any methods of curing, or slowing it down :(",
            "Alzheimer's Disease was first discovered in 1906.",
            "Changes in behaviour and/or personality is one of the important symptoms of Alzheimer's"
        ]

        var warningSignsDisclaimer = "Hope you learnt something new! Wanna learn something else? Play this game again!";

        const { width, height } = this.scale;
        const randomInfo = this.add.text(width * 0.5, height * 0.2, `Random informative bits on Alzheimer's Disease:`, {
            fontSize: 50,
            wordWrap: {
                width: width*0.9,
                useAdvancedWrap: true
            },
            align: 'center'
        })
        .setOrigin(0.5)

        randomInfo.setStroke('#FFFF00');
        const gradient = randomInfo.context.createLinearGradient(0, 0, 0, randomInfo.height);
        // gradient.addColorStop(0, '#FFA500');
        // gradient.addColorStop(.5, '#FF007F');
        gradient.addColorStop(.5, '#FF69B4');
        gradient.addColorStop(1, '#77C3EC');

        randomInfo.setFill(gradient);
    
        this.add.text(width * 0.5, height * 0.5, `${warningSigns[index]}`, {
            fontSize: 30,
            wordWrap: {
                width: width*0.8,
                useAdvancedWrap: true
            },
            color: "#FF69B4",
            stroke: "#77C3EC",
            strokeThickness: .5,
            align: 'center'
        }).setOrigin(0.5)

        this.add.text(width * 0.5, height * 0.80, `*${warningSignsDisclaimer}`, {
            fontSize: 25,
            wordWrap: {
                width: width*0.7,
                useAdvancedWrap: true
            },
            align: 'center',
            fontStyle: 'italic',
            color: "#7AD7F0",
            stroke: "#FF69B4",
            strokeThickness: .5,
        }).setOrigin(0.5)

        this.add.text(width * 0.5, height * 0.95, `<Click here to play the game again!>`, {
            fontSize: 30,
        }).setOrigin(0.5)



        this.input.on('pointerdown', () => this.scene.start('alzheimerspreloader'));
    }
    
}