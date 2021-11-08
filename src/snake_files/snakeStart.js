import Phaser from "phaser";

export default class snakeStart extends Phaser.Scene {

    preload() {
        
    }

    create() {
        const { width, height } = this.scale;
        
        const welcomeMessage = this.add.text(
            width * 0.5, 
            height * 0.25, 
            `Imma Eat You Up!`, 
            {
                fontSize: 70,
                fontStyle: "",
                align: "center",
                wordWrap: {
                    width: width*0.8,
                    useAdvancedWrap: true
                    },
            }).setOrigin(0.5);

        welcomeMessage.setStroke('#FFFF00');
        const gradient = welcomeMessage.context.createLinearGradient(0, 0, 0, welcomeMessage.height);
        gradient.addColorStop(.5, '#333A56');
        gradient.addColorStop(1, '#52658F');
    
        welcomeMessage.setFill(gradient);

    
        this.add.text(
            width * 0.5, 
            height * 0.75, 
            `Eat as many cakes as you like! But try not to bite any parts of your body~ Happy Playing!`, 
            {
                fontSize: 25,
                wordWrap: 
                {
                    width: width*0.8,
                    useAdvancedWrap: true
                },
                color: "#333A56",
                stroke: "#52658F",
                strokeThickness: .5,
                align: "center",
            }).setOrigin(0.5);


        this.add.text(
            width * 0.5, 
            height * 0.5, 
            `<Press DOWN arrow to Start>`, 
            {
                fontSize: 25,
                wordWrap: 
                {
                    width: width*0.8,
                    useAdvancedWrap: true
                },
            }).setOrigin(0.5);


        this.input.keyboard.once(`keydown-DOWN`, () => {
            this.scene.start('snakePreloader');
        })
    }

}