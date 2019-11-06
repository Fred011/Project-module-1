'use strict'

function Game() {
  this.canvas = null;
  this.ctx = null;
  this.enemies = [];
  this.player = null;
  this.bullets = [];
  this.gameIsOver = false;
  this.gameScreen = null;
  this.score = 0;
}


Game.prototype.start = function() {
  // Get the canvas element, create ctx, save canvas and ctx in the game object
  this.canvasContainer = document.querySelector('.canvas-container');
  this.canvas = document.querySelector('canvas');
  this.ctx = this.canvas.getContext('2d');

  this.livesElement = this.gameScreen.querySelector('#lives');
  this.scoreElement = this.gameScreen.querySelector('#score');

  // Set the canvas to be same as the viewport size
  this.containerWidth = this.canvasContainer.offsetWidth;
  this.containerHeight = this.canvasContainer.offsetHeight;
  this.canvas.setAttribute('width', window.innerWidth);
  this.canvas.setAttribute('height', window.innerHeight);

  // Create new player
  this.player = new Player(this.canvas, 3);

  // Add event listener for keydown movements

  this.handleKeydown = function (event) {

    if (event.keyCode === 37) {

        console.log('LEFT');
        this.player.setDirection('left')

    }
    else if (event.key === 'ArrowRight') {

        console.log('RIGHT');
        this.player.setDirection('right');

    }

    // TO KEEP FOR THE BACKLOG MOVEMENTS
    else if (event.key === 'ArrowUp') {
      console.log('UP');
      this.player.setDirection('up')
    }
    
    // TO KEEP FOR THE BACKLOG MOVEMENTS
    else if (event.key === 'ArrowDown') {
      console.log('DOWN');
      this.player.setDirection('down')
    }

    else if (event.key === ' ') {

      event.preventDefault();
      this.createBullet();
    } 
  };

  var gameReference = this;

  document.addEventListener('keydown', this.handleKeydown.bind(gameReference))

  // Start the game loop
  this.startLoop();
};

Game.prototype.createBullet = function () {

  //CREATE A BULLET
  this.bullets.push(new Bullet(this.canvas, this.player.x, this.player.y));
  //console.log('bullet created', this.bullets)
}

Game.prototype.startLoop = function() {

  var loop = function () {
    
    // CREATE NEW RANDOM ENEMIES
    if (Math.random() > 0.97) {

      var randomX = this.canvas.width * Math.random();
      var newEnemy = new Enemy (this.canvas, randomX, 1)

      this.enemies.push(newEnemy);
    }
    //console.log(this.enemies);

    // CHECK COLLISIONS
    this.checkCollisions();

    this.checkBulletCollisions();

    this.player.handleScreenCollision();

    this.enemies = this.enemies.filter(function (enemy){
      enemy.updatePosition();

      return enemy.isInsideTheScreen();
    });

    this.bullets = this.bullets.filter(function (bullet) {
      bullet.updatePosition();
      return bullet.isInsideScreen();
    });

    // CLEAR CANVAS
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.player.draw();


    this.bullets.forEach( function (bullet) {
      bullet.draw();
    });

    this.enemies.forEach( function (enemy) {
      enemy.draw();
    });

    if (!this.gameIsOver) {
      window.requestAnimationFrame(loop);
    };

    this.updateGameStat();

  }.bind(this);

  loop();

};

// COLLISIONS
Game.prototype.checkCollisions = function (player) {

  var player = this.player;

  this.enemies.forEach(function (enemy) {

    if (player.didCollide(enemy)) {
      player.removeLife();
      //this.updateGameStat();

        if (player.lives === 0) {
          this.gameOver();
        };
    };
  }, this);
};

Game.prototype.checkBulletCollisions = function () {
  this.bullets.forEach(function (bullet){
    this.enemies.forEach(function (enemy) {
      if (enemy.tookBullet(bullet)) {
        enemy.y = 1000;
      }
    });
  }, this)
};




Game.prototype.updateGameStat = function () {
  
  this.score += 5;
  this.livesElement.innerHTML = this.player.lives;
  this.scoreElement.innerHTML = this.score;
  
};

//NEW TEST REMOVE UPDATE LIFE
Game.prototype.updateGameLife

Game.prototype.passGameOverCallback = function(callback) {

  this.onGameOverCallback = callback;

};

Game.prototype.gameOver = function() {

this.gameIsOver = true;

console.log('GAME IS OVER');
this.onGameOverCallback(this.score);

};

Game.prototype.removeGameScreen = function() {

this.gameScreen.remove();

};