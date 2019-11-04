  
function Player(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
  
    this.lives = lives;
    this.size = 50;
    this.x = canvas.width / 2;
    this.y = (canvas.height - 1) - this.size;
    this.direction = 0;
    this.speed = 30;
  }

  Player.prototype.setDirection = function (direction) {

    if(direction === 'left') {
      this.direction = this.x -= this.speed;
    }

    else if (direction === 'right') {
      this.direction = this.x += this.speed;
    }

    else if (direction === 'up') {
      this.direction = this.y -= this.speed;
    }

    // else if (direction === 'down') {
    //   this.direction = this.y += this.speed;
    // }

  };
  

   Player.prototype.didCollide = function () {

   };

  Player.prototype.handleScreenCollision = function () {



  };

  Player.prototype.removeLife = function () {

    this.lives -= 1

  };

  Player.prototype.draw = function() {

    this.ctx.fillStyle = 'blue';
    // fillRect(x, y, width, height)
    this.ctx.fillRect(this.x, this.y, this.size, this.size);

  };