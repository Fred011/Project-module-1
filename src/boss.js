'use strict'

class Boss {
    constructor (canvas, randomX, lives , speed) {

    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.size = 300;
    this.speed = speed;
    this.y = 0 - this.size;
    this.x = randomX;
    this.lives = lives;

    };

    // REMOVE A LIFE FROM PLAYER
    removeLife() {

        this.lives -= 1;

    };

    // UPDATES THE POSITION OF THE BOSS
    updatePosition() {

        this.y = this.y += this.speed;

    };

    // CHECKS IF THE BOSS IS STILL IN THE SCREEN
    isInsideTheScreen() {

        return this.y + (this.size / 2) < this.canvas.height;

    };

    // CHECKS THE COLLISIONS WITH BULLETS
    bossTouched(bullet) {

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
    };

    // DRAW THE BOSS
     draw() {

        var image = new Image;
        image.src = './images/boss3.png';

        this.ctx.drawImage(image, this.x, this.y, this.size, this.size)

        };

};