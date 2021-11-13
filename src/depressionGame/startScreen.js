import Phaser from "phaser";

export default class depressionStart extends Phaser.Scene {
    constructor() {
        super('depressionsstart')
    }

    preload() {

        const { width, height } = this.scale;

        this.add.text(width * 0.5, height * 0.15, `This is Life`, {
            fontSize: 70,
            fontFamily: "Papyrus, fantasy",
            fontStyle: "",
            align: "center",
            color: '#ff0303',

        })
        .setOrigin(0.5)

        // welcomeMessage.setStroke('#FFFF00');
        // const gradient = welcomeMessage.context.createLinearGradient(0, 0, 0, welcomeMessage.height);
        // gradient.addColorStop(.5, '#FF69B4');
        // gradient.addColorStop(1, '#77C3EC');
    
        // welcomeMessage.setFill(gradient);

    
        this.add.text(width * 0.5, height * 0.75, `Depression is a common and serious medical illness that negatively affects how you feel, the way you think and how you act.`, {
            fontFamily: "Papyrus, fantasy",
            fontSize: 20,
            wordWrap: {
                width: width*0.8,
                useAdvancedWrap: true
            },
            color: "#000000",
            stroke: "#40156b",
            strokeThickness: .5,
            align: "center",
        }).setOrigin(0.5)

        this.add.text(width * 0.5, height * 0.9, `If you think Thursdays are depressing, wait until 2 more days. Why?`, {
            fontFamily: "Papyrus, fantasy",
            fontSize: 20,
            wordWrap: {
                width: width*0.8,
                useAdvancedWrap: true
            },
            align: "center",
            color: "#000000",
            stroke: "#FF69B4",
            strokeThickness: .5,
        }).setOrigin(0.5)

        this.add.text(width * 0.5, height * 0.95, `Because it will be a sadder day`, {
            fontFamily: "Papyrus, fantasy",
            fontSize: 15,
            wordWrap: {
                width: width*0.8,
                useAdvancedWrap: true
            },
            align: "center",
            fontStyle: "italic",
            color: "#000000",
            stroke: "#FF69B4",
            strokeThickness: .5,
        }).setOrigin(0.5)

        this.add.text(width * 0.5, height * 0.5, `<Click anywhere to play>`, {
            fontFamily: "Papyrus, fantasy",
            fontSize: 25,
            wordWrap: {
                width: width*0.8,
                useAdvancedWrap: true
            },
            color: "#6b1515"
        }).setOrigin(0.5)


    }

    create() {
        this.input.on('pointerdown', () => this.scene.start('depressionPreloader'));
    }
    
}