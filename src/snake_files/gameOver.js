import Phaser from "phaser";

export default class gameOver extends Phaser.Scene {

    constructor() {
        super('gameOver')
    }

    preload() {

    }

    create() {

        var diabetes_facts = ['Type 1 Diabetes is when your body stops making insulin, the key to let the blood sugar into your body cells for energy. It can be found in children, teens and young adults.',
                      'There is no prevention for Type 1 diabetes.',
                      'Type 2 diabetes is developed over many years, can also be found in children, teens and young adults.',
                      'Type 2 diabetes prevention: Healthy Lifestyle changes, losing weight healthily, eating healthy food, be active!',
                      'The risk of getting type 2 diabetes increases as you get older.',
                      'Did you know that there are 4 types of diabetes? Type 1, Type 2, Gestational and Prediabetes.',
                      'Gestational diabetes develops in pregnant women who have never had diabetes.',
                      'Did you know that a baby could have higher risk for health problems if the mommy have gestational diabetes?',
                      'Prediabetes can occur anytime, and their blood sugar levels are higher than normal!',
                      'Prediabetes raises your risk of getting type 2 diabetes, heart disease and stroke.',
                      'Diabetes is caused by high blood sugar levels. Eat your snacks moderately as a diet in high level of sugar and fat content can lead to obesity and increase your risk of getting one!',
                      'Did you know, once you get diabetes, you cannot be cured? So please be healthy and consume your sugars and fat moderately!',
                      'Did you know, if you do not take care of your health when you are a diabetic (person with diabetes) there is a chance of getting your joints amputated (chopped off)? So, take care of your health!',
                      'Did you know that diabetics (person with diabetes) cannot eat too many carbohydrates like white rice? You would need to talk to your doctor about your diet. So if you like your white rice a lot, take care of your health!',
                      'Diabetes can cause so many issues: Heart disease, Stroke, Kidney Disease / Kidney Failure, Nerve damage, eye disease, digestive problems',
                      'Diabetes can also be caused by genetics, but there is no exact cause, no cure or any known prevention.',
                      'Remember! Eating well, staying active is the best prevention to diseases.'
                    ];
        
        var random_facts = Math.floor((Math.random() * diabetes_facts.length));
        // console.log(diabetes_facts[random_facts]);

        var warningSignsDisclaimer = "Diabetes is a serious condition, eat your sweet stuffs moderately.";  

        const { width, height } = this.scale;
        this.add.text(width * 0.5, height * 0.25, `${diabetes_facts[random_facts]}`, {
            fontSize: 25,
            wordWrap: {
                width: width*0.8,
                useAdvancedWrap: true
            },
            color: "#333A56",
            align: 'center'
        }).setOrigin(0.5)

        this.add.text(width * 0.5, height * 0.5, `<Click in the game to continue playing>`, {
            fontSize: 25,
            wordWrap: {
                width: width*0.8,
                useAdvancedWrap: true
            },
            color: "#333A56",
            stroke: "#52658F",
            strokeThickness: .5,
            align: "center",
        }).setOrigin(0.5);

        this.add.text(width * 0.5, height * 0.75, `*${warningSignsDisclaimer}`, {
            fontSize: 20,
            wordWrap: {
                width: width*0.8,
                useAdvancedWrap: true
            },
            color: "#333A56",
            align: 'center',
            fontStyle: 'italic'
        }).setOrigin(0.5)
      
        // Click to start the scene, will head to snakePreloader and not snakeGame
        // as we would need to load the images 1st before running the codes in snakeGame.js
        this.input.on(`pointerdown`, () => {
            this.scene.start('snakePreloader');
        })

    }

}
