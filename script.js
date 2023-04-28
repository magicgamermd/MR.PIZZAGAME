
document.addEventListener('click', function() {
  var gameAudio = document.getElementById('game-audio');
  gameAudio.play();
});
const animatedImage = document.getElementById('animated-image');
const audio = document.getElementById("voice-sound");


let counter = 0;

function playAudio() {
  audio.currentTime = 0;
  audio.play();
  counter++;
  
  if (counter >= 3) {
    audio.pause();
    audio.currentTime = 0;
  }
}

animatedImage.addEventListener('animationend', () => {
  playAudio();
  setInterval(playAudio, 8000); // повтаря звука на всеки 5 секунди
});

var startScreen = document.getElementById("start-screen");
var startButton = document.getElementById("start-button");
var highscoreMenu = document.getElementById("highscore-menu");
var highscore = document.getElementById("highscore");
var gameCanvas = document.getElementById("gameCanvas");
var gameAudio = document.getElementById("game-audio");

var gameStarted = false;

// Add event listener to start button


var startAudio = document.getElementById("start-audio");
startButton.addEventListener("click", function() {
  startAudio.volume = 1.0;
  startAudio.play();
  startGame();
  
});


// Define startGame function
function startGame() {
  startScreen.style.display = "none";
  gameCanvas.style.display = "block";
  gameAudio.volume = 0.3;
  gameAudio.play();
  gameStarted = true;
}

  // Your game code goes here...
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let gameOver = false;
const jumpSound = new Audio('jump.mp3');
const moveSound = new Audio('move.mp3');
const eatSound = new Audio('eat.mp3');
const coinSound = new Audio('coin.mp3');
const down = new Audio('falldown.mp3');
let highScore = 0; // Add highScore variable here
let backgroundImage = new Image();
let animationFrame = 0; // Set the initial value of animationFrame to 0
const scoreImage = new Image();
const highscoreImage = new Image();
let characterImage1 = new Image();
let characterImage2 = new Image();
let characterImage3 = new Image();
let platformImage = new Image();
let floorImage = new Image();
let explosionImage = new Image();
const coinImage = new Image();
const specialCoinImage = new Image();
const gameoverimg = new Image();
const pizzaImage = new Image();
var resetimg = new Image();
var endimg = new Image();


function loadAssets(callback) {
  gameoverimg.src = 'gameoverr.png';
  gameoverimg.onload = function (){
    resetimg.src = 'reset.png'
    resetimg.onload = function() {
      endimg.src = 'end.png';
      endimg.onload = function(){
  backgroundImage.src = 'gamebackground2.png';
  backgroundImage.onload = function () {
    characterImage1.src = 'character1.png'; // Replace with the path to your first character image
    characterImage1.onload = function () {
      characterImage2.src = 'character2.png'; // Replace with the path to your second character image
      characterImage2.onload = function () {
        characterImage3.src = 'character3.png'; // Replace with the path to your second character image
        characterImage3.onload = function () {
          platformImage.src = 'platform1.png'; // Replace with the path to your floor tile image
          coinImage.src = 'coin.png';
          coinImage.onload = function() {
            const coin = new Coin(100, 100, 30, coinImage);
            specialCoinImage.src = "coin2.png";
            specialCoinImage.onload = function(){
              this.width = 50; // задава широчината на изображението на 50 пиксела
              this.height = 50;
            pizzaImage.src = 'pizza.png';
          pizzaImage.onload = function() {
            scoreImage.src = 'score.png';
            scoreImage.onload = function () {
            highscoreImage.src = 'highscore.png';
            highscoreImage.onload = function () {
            floorImage.src = 'lavafloor.png'; // Replace with the path to your floor tile image
            floorImage.onload = function () {
              explosionImage.src = 'T-fireexplosion.png'; // Replace with the path to your explosion image
              explosionImage.onload = function () {
                
                
                callback();
              };
            };
          };
        };
      };
    };
  };
};
};
};
}
}
}
  }
}










const camera = {
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height,
  update: function() {
    this.x = player.x - this.width / 2;
  
    // Ensure the camera doesn't move too far to the left
    if (this.x < 0) {
      this.x = 0;
    }
  },
};

const player = {
  x: 5,
  y: canvas.height - 200 - 10, // Subtract 50 (player's height) to make the player start on the first platform
  width: 50,
  height: 150,
  velocityX: 0,
  velocityY: 0,
  isJumping: false,
  speed: 4,
  jumpHeight: 11.5,
  score: 0,
  currentImage: null,
  explosionCounter: 0, // Add explosionCounter property here
};

function setPlayerPositionOnPlatform(platform) {
  player.x = platform.x;
  player.y = platform.y - player.height;
}

class Platform {
  constructor(x, y, width, height, image) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = platformImage;
  }

  draw() {
    // Draw the image of the platform
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    
  }
}


  
class Coin {
  constructor(x, y, radius, image) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.image = image;
    this.rotation = 0; // Add rotation property
  }

  draw() {
    // Update the rotation
    this.rotation += 0.1;
    if (this.rotation >= Math.PI * 2) {
      this.rotation = 0;
    }

    // Draw the coin image
    const currentWidth = this.radius * (1 - 0.5 * Math.abs(Math.sin(this.rotation)));
    ctx.save(); // Save the current drawing state
    ctx.translate(this.x - camera.x, this.y); // Translate the origin to the center of the coin
    ctx.rotate(this.rotation); // Rotate the drawing context
    ctx.drawImage(this.image, -currentWidth / 2, -this.radius / 2, currentWidth, this.radius); // Draw the coin image
    ctx.restore(); // Restore the previous drawing state
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class pizzacoin {
  constructor(x, y, radius, image) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.image = image;
    this.rotation = 0; // Add rotation property
  }

  draw() {
    // Update the rotation
    this.rotation += 0.1;
    if (this.rotation >= Math.PI * 2) {
      this.rotation = 0;
    }

    // Draw the special object image
    const currentWidth = this.radius * (1 - 0.5 * Math.abs(Math.sin(this.rotation)));
    
  }
}

const platforms = [];

function generatePlatforms() {
  // Check if the last platform in the array is close enough to the camera's right edge
  if (platforms.length === 0 || platforms[platforms.length - 1].x - camera.x < canvas.width - 200) {
    const platformWidth = 150;
    const platformHeight = 20;
    const platformColor = getRandomColor(); // Use the random color function here
    let minHeight = canvas.height / 2;
    let maxHeight = canvas.height - 150;
    const minGap = 50;
    const maxGap = 200;

    // Calculate the x position of the new platform
    const randomGap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    const xPos = platforms.length === 0 ? player.x + randomGap : platforms[platforms.length - 1].x + platformWidth + randomGap;

    let yPos;
    if (platforms.length === 0) {
      yPos = player.y;
    } else {
      // Calculate a random y position based on the last platform's height
      const lastPlatformHeight = platforms[platforms.length - 1].y;
      const reachableMinHeight = Math.max(minHeight, lastPlatformHeight - player.jumpHeight * 12);
      const reachableMaxHeight = Math.min(maxHeight, lastPlatformHeight + player.jumpHeight * 10);
      yPos = Math.floor(Math.random() * (reachableMaxHeight - reachableMinHeight - 1) + reachableMinHeight);
    }

    // Create a new platform and add it to the platforms array
    platforms.push(new Platform(xPos, yPos, platformWidth, platformHeight, platformColor));

    // Set the player's position on the first platform
    if (platforms.length === 1) {
      setPlayerPositionOnPlatform(platforms[0]);
    }

    // Call generateCoins() after adding the new platform to the array
    generateCoins();
    

  }
}

 
const coins = [];

function generateCoins() {
  platforms.forEach((platform, index) => {
    if (!platform.coinsGenerated) {
      const numberOfCoins = Math.floor(Math.random() * 3) + 1;
      const coinSpacing = platform.width / (numberOfCoins + 1);

      for (let i = 0; i < numberOfCoins; i++) {
        let coinImageToUse = coinImage;
        let coinPoints = 1;
        const coinX = platform.x + coinSpacing * (i + 1);
        const coinY = platform.y - 25;
        coins.push(new Coin(coinX, coinY, 30, coinImageToUse, coinPoints));
        
      }
      platform.coinsGenerated = true;
    }
  });
}
const specialObjects = [];

function generateSpecialObjects() {
  const platformIndex = Math.floor(Math.random() * platforms.length);
  const platform = platforms[platformIndex];

  if (!platform.specialObjectsGenerated) {
    const specialObjectX = Math.random() * (platform.width - 50) + platform.x;
const specialObjectY = platform.y - 50;
    specialObjects.push(new pizzacoin(pizzacoinX, pizzacoinY, 50, pizzaImage));
    platform.specialObjectsGenerated = true;
  }
}


const keys = {};

window.addEventListener('keydown', (event) => {
  if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'KeyA', 'KeyD', 'KeyW', 'Space'].includes(event.code)) {
    event.preventDefault();
  }
  keys[event.code] = true;
});

generatePlatforms();

window.addEventListener('keyup', (event) => {
  keys[event.code] = false;
});

function handlePlayerMovement() {
  // Horizontal movement
  if (keys['ArrowLeft'] || keys['KeyA']) {
    player.x -= player.speed;
    player.velocityX = -player.speed; // Update player.velocityX
    moveSound.volume = 0.4;
    moveSound.play();
  } else if (keys['ArrowRight'] || keys['KeyD']) {
    player.x += player.speed;
    player.velocityX = player.speed; // Update player.velocityX
    moveSound.play();
  } else {
    player.velocityX = 0; // Set player.velocityX to 0 if player is not moving
    moveSound.pause();
  }

  // Prevent the player from going off the screen to the left
  if (player.x < 0) {
    player.x = 0;
  }
}



function handlePlayerVerticalMovement() {
  // Gravity
  player.velocityY += 0.5; // Gravity strength
  player.y += player.velocityY;

  // Check if the player is on the ground or a platform
  let onPlatform = false;
  const floorHeight = 50;
  if (player.y + player.height >= canvas.height - floorHeight) {
    onPlatform = true;
    player.y = canvas.height - player.height - floorHeight;
    player.velocityY = 0;
  }
  platforms.forEach((platform) => {
    if (
      player.x < platform.x + platform.width  &&
      player.x + player.width > platform.x  &&
      player.y + player.height >= platform.y - 5 &&
      player.y + player.height <= platform.y + platform.height
    ) {
      onPlatform = true;
      player.y = platform.y - player.height;
      player.velocityY = 0; // Reset player's vertical velocity when on a platform
    }
  });

  // Jumping
  if (
    (keys['Space'] || keys['ArrowUp'] || keys['KeyW']) &&
    onPlatform
  ) {
    player.velocityY = -player.jumpHeight;
    jumpSound.play();
  }
}
  

function detectPlatformCollision() {
  const prevY = player.y - player.velocityY;

  let onPlatform = false;

  platforms.forEach((platform) => {
    // Check vertical collision first
    if (
      player.x < platform.x + platform.width &&
      player.x + player.width > platform.x
    ) {
      // Collision on the top side of the platform
      if (
        prevY + player.height <= platform.y &&
        player.y + player.height >= platform.y &&
        player.velocityY >= 0
      ) {
        player.y = platform.y - player.height;
        player.velocityY = 0;
        onPlatform = true;
      }
      // Collision on the bottom side of the platform
      else if (
        prevY >= platform.y + platform.height &&
        player.y <= platform.y + platform.height
      ) {
        player.y = platform.y + platform.height;
        player.velocityY = 0;
      }
    }

    // Check horizontal collision after vertical collision
    if (
      player.y + player.height > platform.y &&
      player.y < platform.y + platform.height
    ) {
      // Collision on the left side of the platform
      if (
        player.x + player.width >= platform.x  &&
        player.x + player.width <= platform.x + 1
      ) {
        player.x = platform.x - player.width;
      }
      // Collision on the right side of the platform
      else if (
        player.x <= platform.x + platform.width &&
        player.x >= platform.x + platform.width + 1
      ) {
        player.x = platform.x + platform.width;
      }
    }
  });

  if (onPlatform) {
    player.isJumping = false;
  }
}
  
    function detectCoinCollision() {
      coins.forEach((coin, index) => {
        const playerCenterX = player.x + player.width / 2;
        const playerCenterY = player.y + player.height / 2;
        const distance = Math.sqrt((playerCenterX - coin.x) ** 2 + (playerCenterY - coin.y) ** 2);
        if (distance < player.width / 2 + coin.radius) {
          player.score += 1;
          coins.splice(index, 1);
          coinSound.volume = 0.3;
        coinSound.play();
        }
      });
    }       

    function detectSpecialObjectCollision() {
      specialObjects.forEach((pizzacoin, index) => {
        const playerCenterX = player.x + player.width / 2;
        const playerCenterY = player.y + player.height / 2;
        const distance = Math.sqrt((playerCenterX - object.x) ** 2 + (playerCenterY - object.y) ** 2);
        if (distance < player.width / 2 + object.width / 2) {
          player.score += 10;
          specialObjects.splice(index, 1);
          
        }
      });
    }


    function checkGroundCollision() {
      const floorHeight = 50;
    
      if (player.y + player.height > canvas.height - floorHeight) {
        player.y = canvas.height - player.height - floorHeight;
        player.velocityY = 0;
        
      }
    }

    function playDown() {
      down.play();
    }

  function resetGame() {
    gameOver = false;
    player.x = 50;
    player.y = canvas.height - 150 - 50;
    player.velocityX = 0;
    player.velocityY = 0;
    player.score = 0;
    camera.x = 0;
    platforms.length = 0;
    coins.length = 0;
    generatePlatforms();
    player.explosionDrawn = false; // Add this line here to reset the explosionDrawn property when the game is reset
    player.explosionCounter = 0; // Reset the explosionCounter when the game is reset
  }

  function update() {
    if (!gameOver) {
      handlePlayerVerticalMovement();
      detectPlatformCollision();
      checkGroundCollision();
      detectCoinCollision();
      detectSpecialObjectCollision();
      
  
      // Update player.isJumping value based on player's position relative to the platforms
      let onPlatform = false;
      platforms.forEach((platform) => {
        if (
          player.x < platform.x + platform.width &&
          player.x + player.width > platform.x &&
          player.y + player.height === platform.y
        ) {
          onPlatform = true;
        }
      });
      player.isJumping = !onPlatform;
  
      const prevX = player.x; // Store the player's x position before handling movement
      handlePlayerMovement();
      generateCoins();
      detectCoinCollision();
      detectSpecialObjectCollision();
  
      // Update player.velocityX based on the change in player.x
      player.velocityX = player.x - prevX;
  
      camera.update();
  
      // Update the current character image
      if (player.isJumping) {
        player.currentImage = characterImage3;
        animationFrame = 0; // Reset animationFrame when the player is jumping
      } else {
        if (keys['ArrowLeft'] || keys['KeyA'] || keys['ArrowRight'] || keys['KeyD']) {
          // Increment animationFrame only when the player is moving horizontally
          animationFrame++;
        } else {
          animationFrame = 0; // Reset animationFrame when the player is not moving horizontally
        }
        if (animationFrame % 20 < 10) {
          player.currentImage = characterImage1;
        } else {
          player.currentImage = characterImage2;
        }
      }
  
      // Generate new platforms as the player moves
      generatePlatforms();
    }
  
    // Check for game over
    if (player.y + player.height >= canvas.height - 50) {
      gameOver = true;
     
      if (player.score > highScore) {
        highScore = player.score;
      }
    }
  }

  
  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
  
    // Draw the platforms, coins, and floor
    ctx.save();
    ctx.translate(-camera.x, 0);
    platforms.forEach((platform) => platform.draw());
    drawFloor();
    ctx.restore();
    coins.forEach((coin) => coin.draw());
  
    // Draw the character image
    drawCharacter();
  
    // Draw the score box and high score box
    drawScoreBox();
    drawHighScoreBox();
   
  
    // Display the "Game Over" message and "Reset" button
   
    drawGameOverAndReset();
   
  }

  function drawCharacter() {
    const characterHeight = player.height;
    const characterWidth = (characterImage1.width / characterImage1.height) * characterHeight;
  
    if (!gameOver) {
      ctx.save();
      ctx.translate(-camera.x, 0);
  
      // Check if the character is moving left, and if so, flip the character image
      if (player.velocityX < 0) {
        ctx.scale(-1, 1);
        ctx.drawImage(
          player.currentImage,
          -player.x - characterWidth + characterWidth, // Add characterWidth to the x-position calculation
          player.y,
          -characterWidth,
          characterHeight
        );
      } else {
        ctx.drawImage(
          player.currentImage,
          player.x,
          player.y,
          characterWidth,
          characterHeight
        );
      }
  
      ctx.restore();
    }
  
  // Draw the explosion image with the same width as the character
  if (gameOver && player.explosionCounter < 50) { // Change this condition
    const explosionWidth = characterWidth * 2; // Multiply by 2 to make the explosion larger
    const explosionHeight = characterHeight * 2; // Multiply by 2 to make the explosion larger
    down.play();


    ctx.save();
    ctx.translate(-camera.x, 0);
    ctx.drawImage(
      explosionImage,
      player.x - (explosionWidth - characterWidth) / 2, // Center the explosion horizontally
      player.y - (explosionHeight - characterHeight) / 2, // Center the explosion vertically
      explosionWidth,
      explosionHeight
    );
    
    ctx.restore();

    player.explosionCounter++; // Increment the explosionCounter
    
  }
}
  
  function drawFloor() {
    const tileWidth = floorImage.width;
    const tileHeight = floorImage.height;
    const numTiles = Math.ceil(canvas.width / tileWidth) + 1;
  
    const startX = Math.floor(camera.x / tileWidth) * tileWidth;
  
    for (let i = 0; i < numTiles; i++) {
      ctx.drawImage(
        floorImage,
        startX + i * tileWidth,
        canvas.height - 50,
        tileWidth,
        tileHeight
      );
    }
  }
  
  function drawScoreBox() {
    ctx.drawImage(scoreImage, canvas.width - 795, 2, 230, 55); // Draw the score image
    ctx.fillStyle = '#000000';
    ctx.font = '30px Arial';
    ctx.fillText(`Score: ${player.score}`, canvas.width - 745, 42); // Draw the score text
  }
  
  function drawHighScoreBox() {
    ctx.drawImage(highscoreImage, canvas.width - 230, 2, 240, 50); // Draw the score image
    ctx.fillStyle = '#000000';
    ctx.font = '25px Arial';
    ctx.fillText(`High Score: ${highScore}`, canvas.width - 225, 36);
  }
  
  
  
  function drawGameOverAndReset() {
    if (gameOver) {
      const x = canvas.width / 2 - gameoverimg.width / 2;
    const y = canvas.height / 2 - gameoverimg.height / 1.2;
    ctx.drawImage(gameoverimg, x, y);
    var resetX = canvas.width / 2.1 - resetimg.width / 2.1;
      var resetY = canvas.height / 1.8 + 20;
      ctx.drawImage(resetimg, resetX, resetY);
      
    }
  }
  
  
    // Добавете код за приключване на играта тук
  
    // Изчакайте 2 секунди, преди да изпълните функцията drawGameOverAndReset()
    
  

  function drawBackground() {
    const scale = canvas.height / backgroundImage.height;
    const scaledWidth = backgroundImage.width * scale;
    const numImages = Math.ceil(canvas.width / scaledWidth) + 1;
  
    // Draw the background layer (slower than the foreground)
    let offsetX = (camera.x * 0.5) % scaledWidth;
    for (let i = 0; i < numImages; i++) {
      ctx.drawImage(backgroundImage, i * scaledWidth - offsetX, 0, scaledWidth, canvas.height);
      
      }
    }
  

  function drawRoundedRect(x, y, width, height, radius, fillColor, borderColor, borderWidth) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  
    if (fillColor) {
      ctx.fillStyle = fillColor;
      ctx.fill();
    }
  
    if (borderColor && borderWidth) {
      ctx.lineWidth = borderWidth;
      ctx.strokeStyle = borderColor;
      ctx.stroke();
    }
  }

function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

generatePlatforms();
loadAssets(function() {
// generatePlatforms();
  gameLoop();
});

window.addEventListener('keydown', (event) => {
  if (event.code === 'KeyN') {
    switchLevel();
  }
});

down.addEventListener('ended', playDown, { once: true });


document.addEventListener('keydown', (event) => {
  if (gameOver && event.code === 'Space') {
    resetGame();
  }
});

canvas.addEventListener('click', (event) => {
  if (gameOver) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const buttonX = canvas.width / 2 - 60;
    const buttonY = canvas.height / 2 + 20;
    const buttonWidth = 120;
    const buttonHeight = 40;

    if (x >= buttonX && x <= buttonX + resetimg.width && y >= buttonY && y <= buttonY + resetimg.height) {
      resetGame();
    }
  }
});

