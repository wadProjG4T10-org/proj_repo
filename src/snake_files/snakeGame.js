// Referred to: https://phaser.io/examples/v3/view/games/snake/part7

import Phaser from "phaser";
var snake_path = require('../assets/body.png');
var food_path = require('../assets/cake-slice.png');
import eventsCenter from "./EventsCenter";

var snake;
var food;
var cursors;

// Directions for the snake
var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;

export default class snakeGame extends Phaser.Scene {

    constructor()
    {
        super('snakeGame');

        // use 'this' to store the score for the game
        this.diabetes_score = 0;

        // Storing the score and putting it in the template
        eventsCenter.emit('score', this.diabetes_score);
    }

    preload()
    {
        this.load.image('food', food_path);
        this.load.image('body', snake_path);
    }

    create()
    {   
        // Pause the game 
        this.input.keyboard.on(`keydown-P`, () => {
            this.scene.pause();
            this.scene.launch('pauseScreen');
        }, this);
        
        // this.events.on('pause', function () {
        //     console.log('snakeGame paused');
        // })

        // this.events.on('resume', function () {
        //     console.log('snakeGame resumed');
        // })
        
        var Food = new Phaser.Class({ Extends: Phaser.GameObjects.Image,

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
                // Initialising these
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
                            this.alive = false;
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
                    
                    //  For every 5 food item eaten we'll increase the snake speed a little
                    if (this.speed > 20 && food.total % 5 === 0)
                    {
                        this.speed -= 5;
                    }
                    
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

    }

    update (time)
    {
        if (!snake.alive)
        {
            this.scoreText = this.add.text(
                570 * 0.5, 
                500 * 0.5, 
                `Points Earned: ${this.diabetes_score}`, 
                {
                    color: "#ffffff",
                    fontSize: 30,
                    fontFamily: 'Arial',
                    backgroundColor: '#7ec4cf'
                }).setOrigin(0.5)
            
            this.message = this.add.text(570 * 0.5, 500 * 0.6, `<Click to continue>`, {
                fontSize: 25,
                fontFamily: 'Arial',
                backgroundColor: '#7ec4cf'
            })
            .setOrigin(0.5)

            this.input.on(`pointerdown`, () => this.scene.start('gameOver'));
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
            //  If the snake updated, we need to check for collision against food and add score to the points system

            if (snake.collideWithFood(food))
            {

                //  ADDED (28/10): have a variable to store score
                this.diabetes_score += 10;

                // ADDED (2/11): For the part on showcasing the score
                eventsCenter.emit('score', this.diabetes_score);

                // console.log(this.diabetes_score);
                // console.log(typeof(this.diabetes_score));
                
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