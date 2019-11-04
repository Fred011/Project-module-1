'use strict'

function Bullet (canvas, playerX) {

    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.size = 200;
    //this.position = this.player.x;
    this.speed = 5;
    this.x = playerX;
    this.y = (canvas.height - 1) - this.size;

};


Bullet.prototype.bulletShot = function () {
   // this.draw()
    //this.y = this.y + this.speed;
    console.log('bullet shot');
}

Bullet.prototype.updatePosition = function () {

   
    this.y = this.y - this.speed;
    console.log('yyyyy', this.y, this.x);


};

Bullet.prototype.draw = function () {

    this.ctx.fillStyle = '#070f0a';
    this.ctx.fillRect(this.x, this.y, this.size, this.size);

    // fillRect(x, y, width, height)
}  

Bullet.prototype.isInsideScreen = function () {

    return this.y + this.size / 2 > 0;
}