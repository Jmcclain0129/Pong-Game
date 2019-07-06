    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let ballRadius = 10;
    let x = canvas.width/2;
    let y = canvas.height-30;
    let dx = 2;
    let dy = -2;
    let paddleHeight = 10;
    let paddleWidth = 75;
    let paddleX = (canvas.width-paddleWidth)/2;
    let rightPressed = false;
    let leftPressed = false;
    let brickRowCount = 5;
    let brickColumnCount = 10;
    let brickWidth = 35;
    let brickHeight = 20;
    let brickPadding = 5;
    let brickOffsetTop = 30;
    let brickOffsetLeft = 40;
    let score = 0;
    let lives = 10;
    let currentState = startGame;

// initialise bricks columns and  rows
    let bricks = [];
    for(let c = 0; c< brickColumnCount; c++) {
        bricks[c] = [];
        for(let r = 0; r < brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 };
 }
}



// creates and updates score
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Score: "+score, 8, 20);
}

// new function
function updateScore() {

    document.getElementById("Score").innerHTML = score;
}

// new function
function updateLives() {

    document.getElementById("Lives").innerHTML = lives;
}


// creates and updates lives
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Lives: "+lives, canvas.width -65, 20);
}

// key event listeners
document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
document.getElementById("speedButton").addEventListener("click", speedGame);


    // set up keyboard IO
    const keys = {  
        KeyP : false,
        Enter : true,
        listener(e){
        if(keys[e.code] !== undefined) {
            keys[e.code] = e.type === "keydown1";
            e.preventDefault();
        }
    }
}

    function startGame (){
     // code to do a single frame of start game
    // display press enter to start
    if(keys.Enter){
        keys.Enter = false;
        currentState = game; // start the game
        return true;    
   } else {
     keys.Enter = true;
     currentState = pause
     return false;
   }
}


    function pause() {
     // code to do a single frame of pause
    // display pause
    
    if(keys.KeyP) {
        currentState = pause; // resume game
        return false;
    } else {
      currentState = game;
      return true;
    }

}
    // code to do a single frame of game
    function game() { 
    if(keys.KeyP){   // pause game
        currentState = pause; 
        return false;
    } else {
      currentState = game; // restart game
      return true;
    }
    
}
    // call the current game state
    function mainLoop(time){
        let state = currentState(); 
        if(state) { // ball refresh rate
            requestAnimationFrame(mainLoop); 
            requestAnimationFrame(draw);
        } 
}


function speedGame() {
console.log("speedButton")

    requestAnimationFrame(mainLoop) //speeds up ball
    draw();

}

// key pressed down for pause start
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    /*else if(e.key === 'Enter') {
        requestAnimationFrame(mainLoop) //speeds up ball
        draw();
    }*/
    else if(e.key === 'p') {
      keys.KeyP = (keys.KeyP) ? false: true;
        currentState();
        pause();
        requestAnimationFrame(mainLoop)
        draw();
    }
}

// key released
function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

// paddle position based on pointer coordinates
function mouseMoveHandler(e) {
    let relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}

function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            let b = bricks[c][r];
            if (b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    updateScore();
                    if(score == brickRowCount*brickColumnCount) {
                     alert("YOU WIN, CONGRATS!");
                     document.location.reload();
                    }
                }
            }
        }
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "rgb(6, 195, 253)";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "rgb(6, 195, 253)";
    ctx.fill();
    ctx.closePath();
}

// drawbricks
function drawBricks() {
   for(let c=0; c<brickColumnCount; c++) {
   for(let r=0; r<brickRowCount; r++) {
    if(bricks [c][r].status == 1) {
     let brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
     let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
     bricks[c][r].x = brickX;
     bricks[c][r].y = brickY;
     ctx.beginPath();
     ctx.rect(brickX, brickY, brickWidth, brickHeight);
     ctx.fillStyle =  ('rgb('+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+')');;
     ctx.fill();
     ctx.closePath();
   }
  }
 } 
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    /*drawScore();*/
    /*drawLives();*/
    collisionDetection();  
  
    
    

    // ball bounces off of left edge
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
}

    // ball bounces off of right edge
    if(y + dy < ballRadius) {
    dy = -dy;
} 
    else if(y + dy > canvas.height-ballRadius) {
     if(x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
  
    // life or game over if ball hits bottom
    else {
     lives--;
     updateLives();
      if(!lives) {
      alert("GAME OVER");
      document.location.reload();
}
    else {
        x = canvas.width/2;
        y = canvas.height-30;
        dx = 3;
        dy = -3;
        paddleX = (canvas.width-paddleWidth)/2;
  }
 }  
}
    if(rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
}
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
}

    x += dx;
    y += dy;
    //requestAnimationFrame(draw);
    //requestAnimationFrame(mainLoop);
    
}



draw();
//mainLoop();
