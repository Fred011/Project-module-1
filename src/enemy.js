'use strict'

function Enemy (canvas, x, speed) {
    
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.size = 30;
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

    var xShot = this.x < bullet.x && this.x + this.size > bullet.x
    var yShot = this.y < bullet.y && this.y + this.size > bullet.y
    // var xShotReversed = this.x > bullet.x && this.x + this.size < bullet.x
    // var yShotReversed = this.y < bullet.y && this.y + this.size > bullet.y
    //console.log('xShot', xShot, 'yShot', yShot);

    //return bullet.x < this.x
    return xShot && yShot //&& xShotReversed && yShotReversed;




    // var enemyLeft = this.x;
    
    // var enemyRight = this.x + this.size;
    // var enemyTop = this.y;
    // var enemyBottom = this.y + this.size;
  
    // var bulletLeft = bullet.x;
    // var bulletRight = bullet.x + bullet.size;
    // var bulletTop = bullet.y;
    // var bulletBottom = bullet.y + bullet.size;
  
    // // Check if the enemy intersects any of the player's sides
    // var crossLeft = bulletLeft <= enemyRight && bulletLeft >= enemyLeft;
      
    // var crossRight = bulletRight >= enemyLeft && bulletRight <= enemyRight;
    
    // var crossBottom = bulletBottom >= enemyTop && bulletBottom <= enemyBottom;
    
    // var crossTop = bulletTop <= enemyBottom && bulletTop >= enemyTop;
  
    // if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
    //   return true;
    // }
    // return false;
}


Enemy.prototype.draw = function () {

    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, this.size, this.size);

};
