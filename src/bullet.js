'use strict'

function Bullet (canvas, playerX) {

    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');; 
    this.width = 200;
    this.height = 200;
    //this.position = this.player.x;
    this.speed = 1;
    this.x = playerX;
    this.y = (canvas.height - 1) - this.height;

};


Bullet.prototype.shot = function () {
    this.draw()
     // this.y = this.y + this.speed;
    console.log('bullet shot');

}

Bullet.prototype.updatePosition = function () {

    console.log('yyyyy', this.y);
    this.y = this.y -= this.speed;

};




Bullet.prototype.draw = function () {

    console.log('hjdshdk', this.height)
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = 'blue';
    // fillRect(x, y, width, height)
  }  