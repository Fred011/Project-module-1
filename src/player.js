  
function Player(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
  
    this.lives = lives;
    this.size = 60;
    this.x = canvas.width / 2;
    this.y = (canvas.height - 1) - this.size;
    this.direction = 0;
    this.directionName = `up`;
    this.speed = 20;
  }

  Player.prototype.setDirection = function (direction) {

    if(direction === 'left') {
      this.direction = this.x -= this.speed;
      this.directionName = `left`
    }

    else if (direction === 'right') {
      this.direction = this.x += this.speed;
      this.directionName = 'right'
    }

    else if (direction === 'up') {
      this.direction = this.y -= this.speed;
      this.directionName = `up`
    }

    else if (direction === 'down') {
      this.direction = this.y += this.speed;
      this.directionName = `down`
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

   Player.prototype.didCollideBoss = function (boss) {

    var playerLeft = this.x;
    var playerRight = this.x + this.size;
    var playerTop = this.y;
    var playerBottom = this.y + this.size;
  
    var bossLeft = boss.x;
    var bossRight = boss.x + boss.size;
    var bossTop = boss.y;
    var bossBottom = boss.y + boss.size;
  
    // Check if the boss intersects any of the player's sides
    var crossLeft = bossLeft <= playerRight && bossLeft >= playerLeft;
      
    var crossRight = bossRight >= playerLeft && bossRight <= playerRight;
    
    var crossBottom = bossBottom >= playerTop && bossBottom <= playerBottom;
    
    var crossTop = bossTop <= playerBottom && bossTop >= playerTop;

    var crossInside = bossLeft <= playerLeft && bossRight >= playerRight;
  
    if ((crossInside || crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    }
    return false;

   };

  Player.prototype.handleScreenCollision = function () {

    var screenLeft = 0;
    var screenRight = this.canvas.width;

    var screenTop = 0;
    var screenBottom = this.canvas.height;

    if (this.x <= screenLeft) {
      this.x = this.x + 7;
      console.log('left side')
    } 
    else if (this.x + this.size >= screenRight) {
      this.x = this.x - 7;
      console.log('right side');
    } 
    else if (this.y <= screenTop) {
      this.y = this.y + 7;
    }
    else if (this.y + this.size >= screenBottom) {
        this.y = this.y - 7;
      };


  };

  Player.prototype.removeLife = function () {

    this.lives -= 1
    
  };

  Player.prototype.draw = function() {

    if (this.directionName === 'up') {
      
      var image = new Image;
      image.src = './images/spaceshipup.png';
      
    }

    else if (this.directionName === 'left') {

      var image = new Image;
      image.src = './images/spaceshipleft.png';
      
    }
    else if (this.directionName === 'right') {

      var image = new Image;
      image.src = './images/spaceshipright.png';
      
    }
    else if (this.directionName === 'down') {

      var image = new Image;
      image.src = './images/spaceshipdown.png';
      
    }

    this.ctx.drawImage(image, this.x, this.y, this.size, this.size)

  };