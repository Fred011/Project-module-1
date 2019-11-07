'use strict'

function Boss (canvas, randomX, lives , speed) {

    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.speed = speed;
    this.y = 0;
    this.x = randomX;
    this.lives = lives;
    this.size = 300;

}; 

Boss.prototype.removeLife = function () {

    this.lives -= 1;
}

Boss.prototype.updatePosition = function () {

    this.y = this.y += this.speed;

};

Boss.prototype.isInsideTheScreen = function () {

    return this.y + (this.size / 2) < this.canvas.height;

};

Boss.prototype.bossTouched = function (bullet) {

    var bossLeft = this.x;
    var bossRight = this.x + this.size;
    var bossTop = this.y;
    var bossBottom = this.y + this.size;
  
    var bulletLeft = bullet.x;
    var bulletRight = bullet.x + bullet.size;
    var bulletTop = bullet.y;
    var bulletBottom = bullet.y + bullet.size;
  
    // Check if the bullet intersects any of the boss's sides
    var crossLeft = bulletLeft <= bossRight && bulletLeft >= bossLeft;
      
    var crossRight = bulletRight >= bossLeft && bulletRight <= bossRight;
    
    var crossBottom = bulletBottom >= bossTop && bulletBottom <= bossBottom;
    
    var crossTop = bulletTop <= bossBottom && bulletTop >= bossTop;

    var crossInside = bulletLeft <= bossLeft && bulletRight >= bossRight;
  
    if ((crossInside || crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    }
    return false;

}

Boss.prototype.bottomScreenCollision = function (screen) {

    // var bossLeft = this.x;
    // var bossRight = this.x + this.size;
    // var bossTop = this.y;
    var bossBottom = this.y + this.size;
  
    // var screenLeft = screen.x;
    // var screenRight = screen.x + screen.size;
    // var screenTop = screen.y;
    var screenBottom = screen.y + screen.size;
  
    // Check if the screen intersects any of the boss's sides
    // var crossLeft = screenLeft <= bossRight && screenLeft >= bossLeft;
      
    // var crossRight = screenRight >= bossLeft && screenRight <= bossRight;
    
    var crossBottom = bossBottom > screenBottom;
    
    // var crossTop = screenTop <= bossBottom && screenTop >= bossTop;

    // var crossInside = screenLeft <= bossLeft && screenRight >= bossRight;
  
    if (crossBottom) {
      return true;
    }
    return false;

}


Boss.prototype.draw = function () {

    var image = new Image;
    image.src = '../images/boss3.png';

    this.ctx.drawImage(image, this.x, this.y, this.size, this.size)

};