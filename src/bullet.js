'use strict'

function Bullet (canvas, playerX, playerY, playerDirection) {

    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.size = 25 ;
    this.direction = playerDirection;
    this.speed = 10;
    this.x = playerX + 12;
    this.y = playerY + 5;

};


// Bullet.prototype.bulletShot = function () {
//    // this.draw()
//     this.y = this.y + this.speed;
//     console.log('bullet shot');

// }

Bullet.prototype.shotDirection = function (player) {

    // if(direction === 'left') {
    //     this.direction = this.x -= this.speed;
    //   }
  
    //   else if (direction === 'right') {
    //     this.direction = this.x += this.speed;
    //   }
  
    //   else if (direction === 'up') {
    //     this.direction = this.y -= this.speed;
    //   }
  
    //   else if (direction === 'down') {
    //     this.direction = this.y += this.speed;
    //   };

    // if (player.direction === 'up') {
    //     this.direction = player.direction + this.speed
    //   }
    //   else if (player.direction === 'down') {
    //     this.direction = player.direction + this.speed
    //   }
    //   else if (player.direction === 'left') {
    //     this.direction = player.direction + this.speed
    //   }
    //   else if (player.direction === 'right') {
    //     this.direction = player.direction + this.speed
    //   }
}

Bullet.prototype.updatePosition = function () {

    this.y = this.y - this.speed;
    //console.log('yyyyy', this.y, this.x);
};

Bullet.prototype.draw = function () {

    var image = new Image;
    image.src = './images/laser beam.png';

    this.ctx.drawImage(image, this.x, this.y, this.size, this.size)
}  

Bullet.prototype.isInsideScreen = function () {

    return this.y + this.size / 2 > 0;
}