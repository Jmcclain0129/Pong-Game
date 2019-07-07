# Title: Disco Breakout

## Table of contents
* [Project](#Project Background)
* [Credits](#credits)
* [Demo](#demo)
* [Disclosure](#Full Disclosure)
* [General_info](# Build Plan)
* [Features](#Added Features)
* [Bugs](#Technical Issues Bug Report)
* [Resources](#Resources)
* [Testing](#Testing)


## Project Background
I built this game using an online tutorial which can be found here:
https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript

The entire code stack for the tutorial used to build the game canvas is available on git here:
https://github.com/end3r/Gamedev-Canvas-workshop.git

## Credits
Credit to the authors found in footer of development page listed just above this passage

## Demo
A live demo can be found [here](https://jmcclain0129.github.io/Pong-Game/)

## Full Disclosure
I think it is important to note that I did not copy and paste the code from the tutorials "compare code" option, nor did I simply clone the project from the authors git. I actually used the tutorial and keyed the code into my local workspace which is managed with the visual studio code app.

After each of the ten lessons I reviewed the compare code option to debug any errors because they were times when I was missing characters or had the code ordering out of alignment with the authors version. In cases like this I did cut and paste the code to place it in the correct area but this is code that was inside my local ide.

## Build Plan

I know the suggestion was to make a simple Simon type of memory game but I felt I would have more fun with pong instead of the simon game since I am old enough to remember what pong was. I owned an atari pong game console when I was a young boy growing up in the seventies, so it brings back some memories as well.

As part of my interactive milestone project I plan on using the Pong-Game skeleton I pushed to git titled "my first commit" as a template. My plan includes improving the game and wrapping some page styling around it to complete the project

I will commit each time I finish an exercise.

## Added Features

I improved the game from its original version by doing the following

1. Removed the score and points features from the canvas and placed them in the grid above the game canvas
2. Added button to increase the speed of the ball which greatly increases the difficulty of play
3. put inifinite looping on each of the colored bricks so that the bricks constantly changed colors until the brick was eliminated. 

## Technical Issues Bug Report:

1. Button Grid

- 1. Go Faster Button also acts as a start button.

2. Keyed Actions

- 1. P button is starting game which is not expected behavior.

3. Game Board (canvas)

- 1. not responsive to lower display sizes
 
## Research Resources

1. Used this resource to study how to manage brick coloring. Original idea was to make each row of bricks a different color but settled on the random colors looping technique so the game appears to flash like a disco ball, hence the naming of the game "disco breakout"
Coloring bricks: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

2. Used this resource to study different options for collision detection. Specifically, I was trying to narrow in on how to control the direction the ball reflected when colliding with paddle. I did not achieve any upgrade here as the ball is still just bounces in opposit direction when it hits the paddle. I was trying to get the ball to realize when it hit left of center of the paddle to bounce in oposite direction. Same when ball recognized hitting to the right of center of paddle. This would give user better ability to control the direction the ball moves off of paddle after contacting it.
Bounce deflection: http://www.informit.com/articles/article.aspx?p=2180417&seqNum=2

3. Used this resource to study how manipulate key actions. Like adding additional features such as speeding up the ball using a key rather than the button we settled on. I did achive this goal and speed was increased by using the "enter" key but I abondoned that approach and stuck with the button option since I had already proved I could use keys to interact with game play.
Key action: https://stackoverflow.com/questions/43814422/how-to-pause-simple-canvas-game-made-with-js-and-html5

Used this resource to study how the score and lives features could be pulled from the canvas. I also wanted to place the pause and game over notice in a modal that was drawn over the canvas but was not able to achive the effect in the given time. It is worth noting that this particular game template is using import js features from within the index.js file. This is not a behavior modern browsers are able to achieve since the ES6 updates. I spent two days trying to refactor my code so that I could use this template rather than the one I have submitted. However, I found it very difficult to step the code back to ES5. I did come across a simple solution which was to switch my IDE from VS Code App to the CodeSandbox editor which automates the process of downgrading es6 syntax to es5 syntax.
Elevating game to new heights: https://codecanyon.net/item/breakout-html5-game/20329376

## Testing

I simply did not have ime to debug using Jasmine. Matt mentioned we did not have to use Jasmine is we did not feel we had time.

I used manual testing to test site functionaly, game performance and overall site responsiveness to different display sizes. I found the game itself in standard state to function as expected for the most part. I was unable to get the project responsive and worked to the last hour before submitting trying to resolve. This isseu was related to getting the canvas to work in all states. I could get the page content responsive in all states except for the canvas. In the end I blewout the page responsiveness trying to fix the canvas issue and simply did not have time to back out of revisions far enough so that the page content other than the canvas was responsive. I believe it is as simple as removing the margin tag in the grid function to get the page back to responsive state but this still does not resolve the isse with the canvas. So given that time was running out I decided to move on to writing the README.md doc instead of continuing to debug the responsive issue.


## ToDo List

The following are improvements I was hoping to get to but just couldn't find the time

1. Fix responsive issue
2. Add Start button
3. Replace game over and you win alerts with modal alerts on canvas section so that game board is covered by modal after end of each game or during a puse session
4. Additional levels
5. High Game Leaders Board

I plan on re-submitting the game after initial review