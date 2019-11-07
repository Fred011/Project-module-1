'use strict'

function Bullet (canvas, playerX, playerY, playerDirection) {

    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.size = 25 ;
    this.direction = playerDirection;
    this.speed = 10;
    this.x = playerX + 17;
    this.y = playerY + 17;

};

Bullet.prototype.updatePosition = function () {
    if(this.direction === 'left') {
        this.x = this.x -= this.speed;
      }
  
      else if (this.direction === 'right') {
        this.x = this.x += this.speed;
      }
  
      else if (this.direction === 'up') {
        this.y = this.y -= this.speed;
      }
  
      else if (this.direction === 'down') {
        this.y = this.y += this.speed;
      };
};


Bullet.prototype.draw = function () {


    if (this.direction === 'up') {
      
        var image = new Image;
        image.src = './images/laserup.png';
        
      }
  
      else if (this.direction === 'left') {
  
        var image = new Image;
        image.src = './images/laserleft.png';
        
      }
      else if (this.direction === 'right') {
  
        var image = new Image;
        image.src = './images/laserright.png';
        
      }
      else if (this.direction === 'down') {
  
        var image = new Image;
        image.src = './images/laserdown.png';
        
      }

    this.ctx.drawImage(image, this.x, this.y, this.size, this.size)
}  

Bullet.prototype.isInsideScreen = function () {

    return this.y + this.size / 2 > 0;
}