'use strict'

function Enemy (canvas, y, speed) {
    
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.size = 20;
    this.x = this.canvas.width + this.size;
    this.y = y;
    this.speed = speed;
};

Enemy.prototype.updatePosition = function () {

};

Enemy.prototype.isInsideTheScreen = function () {

};

Enemy.prototype.draw = function () {

};
