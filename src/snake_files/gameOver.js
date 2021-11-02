import Phaser from "phaser";

// List of sentences to put into an array
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


export default class gameOver extends Phaser.Scene {

    preload() {

    }

    create() {
        // this.add.button(0,0,'gameover',this.scene,this);

        // this.add.text(300,250,"LAST SCORE",{font:"bolder 24px san-serif", fill: "#ffb00", align:"center"});
        // this.add.text(300,250, score.toString(),{font:"bolder 26px san-serif", fill: "#fff", align:"center"});

        // GAME OVER (CAN'T FIX): still cannot have the overlay)
        // this.gameOverText = this.add.text(275, 250, `Game Over`, { fontSize: '32px', fill: '#000' }).setOrigin(0.5);
        // this.gameOverText.visible = false;
        this.add.text(235, 300, `${diabetes_facts[random_facts]}`, {
            fontSize: '32px',
            fontFamily: "../fonts/PressStart2P-Regular.ttf" 
        })
        .setOrigin(0.0,0.0)


    }


}
