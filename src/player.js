  
function Player(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
  
    this.lives = lives;
    this.size = 60;
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

    else if (direction === 'down') {
      this.direction = this.y += this.speed;
    };
  };
  

   Player.prototype.didCollide = function (enemy) {

    var playerLeft = this.x;
    var playerRight = this.x + this.size;
    var playerTop = this.y;
    var playerBottom = this.y + this.size;
  
    var enemyLeft = enemy.x;
    var enemyRight = enemy.x + enemy.size;
    var enemyTop = enemy.y;
    var enemyBottom = enemy.y + enemy.size;
  
    // Check if the enemy intersects any of the player's sides
    var crossLeft = enemyLeft <= playerRight && enemyLeft >= playerLeft;
      
    var crossRight = enemyRight >= playerLeft && enemyRight <= playerRight;
    
    var crossBottom = enemyBottom >= playerTop && enemyBottom <= playerBottom;
    
    var crossTop = enemyTop <= playerBottom && enemyTop >= playerTop;

    var crossInside = enemyLeft <= playerLeft && enemyRight >= playerRight;
  
    if ((crossInside || crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    }
    return false;

   };

  Player.prototype.handleScreenCollision = function () {

    var screenLeft = 0;
    var screenRight = this.canvas.width;

    if (this.x <= screenLeft) {
      this.x = this.x + 7;
      console.log('left side')
    } 
    else if (this.x + this.size >= screenRight) {
      this.x = this.x - 7;
      console.log('right side');
    } 


  };

  Player.prototype.removeLife = function () {

    this.lives -= 1
    
  };

  Player.prototype.draw = function() {

    var image = new Image;
    image.src = '../images/spaceship 3.png';

    this.ctx.fillStyle = 'blue';
    this.ctx.drawImage(image, this.x, this.y, this.size, this.size)
    // fillRect(x, y, width, height)
    //this.ctx.fillRect(this.x, this.y, this.size, this.size);

  };