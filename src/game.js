function Game() {
    this.canvas = null;
    this.ctx = null;
    this.enemies = [];
    this.player = null;
    this.gameIsOver = false;
    this.gameScreen = null;
    this.score = 0;
  }
  
  Game.prototype.start = function() {
    // Get the canvas element, create ctx, save canvas and ctx in the game object
    this.canvasContainer = document.querySelector('.canvas-container');
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
  
    // Set the canvas to be same as the viewport size
    this.containerWidth = this.canvasContainer.offsetWidth;
    this.containerHeight = this.canvasContainer.offsetHeight;
    this.canvas.setAttribute('width', this.containerWidth);
    this.canvas.setAttribute('height', this.containerHeight);
  
    // Create new player
    this.player = new Player(this.canvas, 3);
  
    // Add event listener for keydown movements

    this.handleKeydown = function (event) {

      if (event.key === 'ArrowLeft') {
  
          console.log('LEFT');
          this.player.setDirection('left')
  
      }
      else if (event.key === 'ArrowRight') {
  
          console.log('RIGHT');
          this.player.setDirection('right');
  
      }
    };

    var gameReference = this;

    document.addEventListener('keydown', this.handleKeydown.bind(gameReference))
  
    // Start the game loop
  
    this.startLoop();
  };
  
  Game.prototype.startLoop = function() {

    var loop = function () {

      if (Math.random() > 0,90) {

        var randomX = this.canvas.width * Math.random();
        var newEnemy = new Enemy (this.canvas, randomX, 5)

        this.enemies.push(newEnemy);
      }

      this.checkCollisions();

      this.player.handleScreenCollision();

      this.enemies = this.enemies.filter(function (){

        enemy.updatePosition();
        return enemy.isInsideTheScreen();
      });

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.player.draw();

      this.enemies.forEach( function (enemy) {
        
        enemy.draw();

        if (!this.gameIsOver) {
          window.requestAnimationFrame(loop);
        };

        this.updateGameScore();

      });

    }.bind(this);

    loop()
    
  };


  Game.prototype.checkCollisions = function () {

  }

  Game.prototype.updateGameScore = function () {
    
  }