// Referred to: https://phaser.io/examples/v3/view/games/snake/part7

import Phaser from "phaser";
var snake_path = require('../assets/body.png');
var food_path = require('../assets/cake-slice.png');
import eventsCenter from "./EventsCenter";

var snake;
var food;
var cursors;
var diabetes_score;

// Directions for the snake
var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;

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

export default class snakeGame extends Phaser.Scene {

    constructor() {
        super('snakeGame')

        // use 'this' to store the score for the game
        diabetes_score = 0;

        eventsCenter
    }

    preload ()
    {
        this.load.image('food', food_path);
        this.load.image('body', snake_path);
    }

    create ()
    {        
        var Food = new Phaser.Class({

            Extends: Phaser.GameObjects.Image,

            initialize:

            function Food (scene, x, y)
            {
                // 'this' refer to the items called in this class: Food
                Phaser.GameObjects.Image.call(this, scene)
    
                //the 1st food to be shown on the canvas
                this.setTexture('food');
                this.setPosition(x * 32, y * 32); // initial position on the canvas
                this.setOrigin(0);

                this.total = 0;
                scene.children.add(this);
            },

            eat: function ()
            {
                this.total++;
            }

        });

        var Snake = new Phaser.Class({

            initialize:

            function Snake (scene, x, y)
            {
                this.headPosition = new Phaser.Geom.Point(x, y);

                this.body = scene.add.group();
                this.head = this.body.create(x * 32, y * 32, 'head');
                this.head.setOrigin(0);

                this.alive = true;

                this.speed = 100;
                this.moveTime = 0;

                this.tail = new Phaser.Geom.Point(x, y);

                this.heading = RIGHT;
                this.direction = RIGHT;
            },

            update: function (time)
                    {
                        if (time >= this.moveTime)
                        {
                            return this.move(time);
                        }
                    },

            faceLeft: function ()
                    {
                        if (this.direction === UP || this.direction === DOWN)
                        {
                            this.heading = LEFT;
                        }
                    },

            faceRight: function ()
                    {
                        if (this.direction === UP || this.direction === DOWN)
                        {
                            this.heading = RIGHT;
                        }
                    },

            faceUp: function ()
                    {
                        if (this.direction === LEFT || this.direction === RIGHT)
                        {
                            this.heading = UP;
                        }
                    },

            faceDown: function ()
                    {
                        if (this.direction === LEFT || this.direction === RIGHT)
                        {
                            this.heading = DOWN;
                        }
                    },

            move: function (time)
                    {
                        /*
                        * Based on the heading property (which is the direction the pgroup pressed), we update the headPosition value accordingly.
                        * The Math.wrap call allow the snake to wrap around the screen, so when it goes off any of the sides it re-appears on the other.
                        */
                        switch (this.heading)
                        {
                            case LEFT:
                                this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x - 1, 0, 40);
                                break;

                            case RIGHT:
                                this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x + 1, 0, 40);
                                break;

                            case UP:
                                this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y - 1, 0, 30);
                                break;

                            case DOWN:
                                this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y + 1, 0, 30);
                                break;
                        }

                        this.direction = this.heading;

                        //  Update the body segments and place the last coordinate into this.tail
                        Phaser.Actions.ShiftPosition(this.body.getChildren(), this.headPosition.x * 16, this.headPosition.y * 16, 1, this.tail);

                        //  Check to see if any of the body pieces have the same x/y as the head
                        //  If they do, the head ran into the body

                        var hitBody = Phaser.Actions.GetFirst(this.body.getChildren(), { x: this.head.x, y: this.head.y }, 1);

                        if (hitBody)
                        {
                            // FACTS (change it to make it end Screen)
                            var random_facts = Math.floor((Math.random() * diabetes_facts.length));
                            alert (diabetes_facts[random_facts]);
                            
                            // Try not to use this here, maybe after showcasing the facts then reload.
                            location.reload(); 
                            
                            this.alive = false;

                            this.input.on('pointerdown', () => this.scene.start('gameOver'));

                            return false;
                        }
                        else
                        {
                            //  Update the timer ready for the next movement
                            this.moveTime = time + this.speed;

                            return true;
                        }
                    },

            grow: function ()
            {
                var newPart = this.body.create(this.tail.x, this.tail.y, 'body');

                newPart.setOrigin(0);
            },

            collideWithFood: function (food)
            {
                if (this.head.x === food.x && this.head.y === food.y)
                {
                    this.grow();

                    food.eat();
                    
                    //  ADDED (28/10): have a variable to store score
                    diabetes_score += 10;

                    // ADDED (2/11): For the part on showcasing the score
                    eventsCenter.emit('score', this.diabetes_score);


                    //  For every 5 food item eaten we'll increase the snake speed a little
                    if (this.speed > 20 && food.total % 5 === 0)
                    {
                        this.speed -= 5;
                    }
                    
                    // to check if the scoring system works.
                    console.log(diabetes_score);
                    console.log(typeof(diabetes_score));
                    
                    return true;
                }
                else
                {
                
                    return false;
                }
            },

            updateGrid: function (grid)
            {
                //  Remove all body pieces from valid positions list
                this.body.children.each(function (segment) {

                    var bx = segment.x / 16;
                    var by = segment.y / 16;

                    grid[by][bx] = false;

                });

                return grid;
            }

        });

        food = new Food(this, 3, 4);
        snake = new Snake(this, 8, 8);

        //  Create our keyboard controls
        cursors = this.input.keyboard.createCursorKeys();

        //  ADDED (28/10): have a variable to store score
        this.scoreText = this.add.text(25, 450, `Points Earned: ${diabetes_score}`, { 
            fill: '#000',
            fontSize: '16px',
            backgroundColor: "#00FF00"  
        });
        
    }

    update (time)
    {
        if (!snake.alive)
        {

            return;
        }

        /*        
        * Check which key is pressed, and then change the direction the snake is heading based on that. The checks ensure you don't double-back
        * on yourself. E.g. if you're moving to the right and you press the LEFT cursor, it ignores it, because the only valid directions you
        * can move in at that time is up and down. 
        * */
        if (cursors.left.isDown)
        {
            snake.faceLeft();
        }
        else if (cursors.right.isDown)
        {
            snake.faceRight();
        }
        else if (cursors.up.isDown)
        {
            snake.faceUp();
        }
        else if (cursors.down.isDown)
        {
            snake.faceDown();
        }

        if (snake.update(time))
        {
            //  If the snake updated, we need to check for collision against food

            if (snake.collideWithFood(food))
            {
                //  First create an array that assumes all positions
                //  are valid for the new piece of food

                //  A Grid we'll use to reposition the food each time it's eaten
                var testGrid = [];

                for (let y = 0; y < 30; y++)
                {
                    testGrid[y] = [];

                    for (let x = 0; x < 35; x++)
                    {
                        testGrid[y][x] = true;
                    }
                }

                snake.updateGrid(testGrid);

                //  Purge out false positions
                var validLocations = [];

                for (var y = 0; y < 30; y++)
                {
                    for (var x = 0; x < 35; x++)
                    {
                        if (testGrid[y][x] === true)
                        {
                            //  Is this position valid for food? If so, add it here ...
                            validLocations.push({ x: x, y: y });
                        }
                    }
                }

                if (validLocations.length > 0)
                {
                    //  Use the RNG to pick a random food position
                    var pos = Phaser.Math.RND.pick(validLocations);

                    //  And place it
                    food.setPosition(pos.x * 16, pos.y * 16);


                    return true;
                }
                else
                {
                    return false;
                }

            }
        }
    }
}