function Game() {
    this.canvas = null;
    this.ctx = null;
    this.enemies = [];
    this.player = null;
    this.bullets = [];
    this.boss = [];
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
    this.bullets.push(new Bullet(this.canvas, this.player.x, this.player.y, this.player.direction));
    //console.log('bullet created', this.bullets)
  }

  //CREATE BOSS
  Game.prototype.createBoss = function () {

    setTimeout(() => {

        var newBoss = new Boss(this.canvas, 2);

        this.boss.push(newBoss);
        
        console.log('BOSSSSSS');

    }, 5000); // will start after 5000 m/s;
      
  }
  
  Game.prototype.startLoop = function() {

    var loop = function () {
      
      // CREATE NEW RANDOM ENEMIES
      if (Math.random() > 0.99) {

        var randomX = this.canvas.width * Math.random();
        var newEnemy = new Enemy (this.canvas, randomX, 1)

        this.enemies.push(newEnemy);
      }

      //GENERATE BOSS
      this.createBoss();
      //console.log(this.enemies);

      
      
      // CHECK COLLISIONS
      this.checkCollisions();
      
      this.player.handleScreenCollision();
      
      this.enemies = this.enemies.filter(function (enemy){
        enemy.updatePosition();
        this.followPlayer(enemy);
        
        return enemy.isInsideTheScreen();
      }, this);
      
      this.bullets = this.bullets.filter(function (bullet) {
        bullet.updatePosition();
        return bullet.isInsideScreen();
      });

      this.boss = this.boss.filter(function (boss) {

        boss.updatePosition();
        
        return boss.isInsideTheScreen();

      }, this);

      
      // CLEAR CANVAS
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      
      this.player.draw();
      
      this.boss.filter(function (boss) {
        boss.draw();
        console.log('should draw badass boss');
      })

      this.bullets.forEach( function (bullet) {
        bullet.draw();
      });

      this.checkBulletCollisions();

      this.bossCollisions();

      this.enemyReachBottom();

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
        enemy.y = 1000;
        
        if (player.lives === 0) {
          this.gameOver();
        };
      };
    }, this);
  };

  Game.prototype.bossCollisions = function (player) {

    var player = this.player;
    
    this.boss.forEach(function (boss) {
      player.didCollide(boss);
    }, this);
  };
  
  Game.prototype.checkBulletCollisions = function () {

    this.bullets.forEach(function (bullet){
      this.enemies.forEach(function (enemy) {
        if (enemy.tookBullet(bullet)) {
          enemy.y = 1000;
          bullet.y = 0 - bullet.size;
          this.score += 100;
        }
      }, this);
    }, this)
  };

  Game.prototype.enemyReachBottom = function (player) {

    var player = this.player;

      this.enemies.forEach(function (enemy) {
        if (enemy.bottomScreenCollision(screen)) {
          player.removeLife();
        }
      });
    };

    Game.prototype.followPlayer = function (enemy) {

      console.log('check following');
      if (enemy.x < this.player.x) {
        enemy.x += 0.2
      } else {
        enemy.x -= 0.2
      };

      if (enemy.y > this.player.y) {
        enemy.y -= 1.7
      } else {
        enemy.y += 0.3
      };
    };

  Game.prototype.updateGameStat = function () {
    
    this.livesElement.innerHTML = this.player.lives;
    this.scoreElement.innerHTML = this.score;
    
  };


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
