'use strict'

function Enemy (canvas, x, speed) {
    
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.size = 15;
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
    var yShot = this.y < bullet.y && this.y + this.size > bullet.y;

    return xShot && yShot 

}


Enemy.prototype.draw = function () {

    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, this.size, this.size);

};