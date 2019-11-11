'use strict'

class Enemy {
    constructor (canvas, x, speed) {

        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.speed = speed;
        this.size= 60;
        this.x = x;
        this.y = 0 - this.size;
        this.lives = 1;

    };

    // UPDATES THE POSITION OF THE ENEMY
    updatePosition() {

        this.y = this.y += this.speed;

    };

    // CHECK IF THE ENEMY IS INSIDE THE SCREEN
    isInsideTheScreen() {

        return this.y + (this.size / 2) < this.canvas.height;

    };

    // CHECK THE COLLISION WITH THE BULLETS
    tookBullet(bullet) {

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

    };

    // DRAW THE ENEMY
    draw() {

        var image = new Image;
        image.src = './images/spaceshipEnemy.png';

        this.ctx.drawImage(image, this.x, this.y, this.size, this.size);

    };

};