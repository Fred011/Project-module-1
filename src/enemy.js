'use strict'

function Enemy (canvas, x, speed) {
    
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.size = 40;
    this.y = 0 - this.size;
    this.x = x;
    this.speed = speed;
    this.lives = 1;
};

Enemy.prototype.updatePosition = function () {

    this.y = this.y += this.speed;

};

Enemy.prototype.isInsideTheScreen = function () {

    return this.y + (this.size / 2) < this.canvas.height;

};

Enemy.prototype.tookBullet = function (bullet) {

    var enemyLeft = this.x;
    var enemyRight = this.x + this.size;
    var enemyTop = this.y;
    var enemyBottom = this.y + this.size;
  
    var bulletLeft = bullet.x;
    var bulletRight = bullet.x + bullet.size;
    var bulletTop = bullet.y;
    var bulletBottom = bullet.y + bullet.size;
  
    // Check if the bullet intersects any of the enemy's sides
    var crossLeft = bulletLeft <= enemyRight && bulletLeft >= enemyLeft;
      
    var crossRight = bulletRight >= enemyLeft && bulletRight <= enemyRight;
    
    var crossBottom = bulletBottom >= enemyTop && bulletBottom <= enemyBottom;
    
    var crossTop = bulletTop <= enemyBottom && bulletTop >= enemyTop;

    var crossInside = bulletLeft <= enemyLeft && bulletRight >= enemyRight;
  
    if ((crossInside || crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    }
    return false;

}

Enemy.prototype.bottomScreenCollision = function (screen) {

    // var enemyLeft = this.x;
    // var enemyRight = this.x + this.size;
    // var enemyTop = this.y;
    var enemyBottom = this.y + this.size;
  
    // var screenLeft = screen.x;
    // var screenRight = screen.x + screen.size;
    // var screenTop = screen.y;
    var screenBottom = screen.y + screen.size;
  
    // Check if the screen intersects any of the enemy's sides
    // var crossLeft = screenLeft <= enemyRight && screenLeft >= enemyLeft;
      
    // var crossRight = screenRight >= enemyLeft && screenRight <= enemyRight;
    
    var crossBottom = enemyBottom > screenBottom;
    
    // var crossTop = screenTop <= enemyBottom && screenTop >= enemyTop;

    // var crossInside = screenLeft <= enemyLeft && screenRight >= enemyRight;
  
    if (crossBottom) {
        console.log('bottom reached')
      return true;
    }
    return false;

}


Enemy.prototype.draw = function () {

    var image = new Image;
    image.src = '../images/spaceship 2.png';

    this.ctx.drawImage(image, this.x, this.y, this.size, this.size)

};
