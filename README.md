# SPACE EXPLORER 

## Description
This is a shooter game where the player has to kill enemies to get the best score. The player starts with 3 lives and score 0. Enemies will randomly come from top of the screen and try to kill the player. To defend himself, the player have a laser gun to blow up the enemies. The game ends when the player has no lives left.

## Instructions

- to move left, press left arrow key
- to move right, press right arrow key
- to shoot, press space bar

---

## MVP (DOM - CANVAS)

- player can move left and right
- player can fire bullet in front of him
- random generation of enemies from the top of the screen
- check for collison between player and enemies
- player doesn't move if any keys are pressed
- enemy hit gives 10 pts
- lives

## Backlog

- direction up and down
- enemies will come from every sides
- enemies movements will update to the player position
- score
- move up
- move down
- increase dificulty 
- get random items that can change the bullets
- press two keys at the same time
- images
- sound effects

---

## Data structure

#### Main.js 

```javascript
createSplashScreen() {}

createGameScreen() {}

removeSplashScreen() {}

createGameOverScreen() {}

buildDom () {}
```

#### Game.js

```javascript
Game () {
    this.canvas;
    this.player;
    this.enemy;
    this.gameIsOver;
    this.gameScreen;
    this.score;
}

Game.prototype.gameStart () {}

Game.prototype.startLoop () {}

Game.prototype.checkCollision () {}

Game.prototype.updateGameScore () {}

Game.prototype.gameOver () {}

Game.prototype.removeGameOverScreen () {}
```

#### Player.js

```javascript
Player () {
    this.canvas;
    this.ctx;
    this.lives;
    this.size;
    this.x;
    this.y;
    this.direction;
    this.speed;
}

Player.prototype.setDirection () {}

Player.prototype.collision() {}

Player.prototype.screenCollision () {}

Player.prototype.removeLife() {}

Player.prototype.draw() {}

```

#### Enemy.js

```javascript
Enemy () {
    this.canvas;
    this.ctx;
    this.x;
    this.y;
    this.speed;
    this.size
}

Enemy.prototype.draw () {}

Enemy.prototype.updatePosition () {}

Enemy.prototype.outOfLife () {}

Enemy.prototype.playerCollision () {}
```

#### Bullet

```javascript
Bullet () {
    this.x;
    this.y;
    this.speed;
    this.size;
    this.canvas;
    this.ctx;
    this.direction;
}

Bullet.prototype.draw () {}

Bullet.prototype.bulletPosition () {}

Bullet.prototype.bulletCollision () {}

Bullet.prototype.isInScreen () {}

Bullet.prototype.draw () {}

```

---

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
    - buildDom ()
    - addEventListener() start button
    - removeSplashScreen()

- gameScreen
    - game.start()
    - game.updateGameScore()

- gameOverScreen
    - game.gameOver()
    - addEventListener() restart button

---

## Tasks

- Main - buildDom
- Main - createSplashScreen
- Main - createGameScreen
- Main - removeSplashScreen
- Main - createGameOverScreen
- Game - Game 
- Game - gameStart
- Game - startLoop
- Game - checkCollision
- Game - gameOver
- Game - removeGameOverScreen
- Game - updateGameScore
- Player - setDirection
- Player - collision
- Player - screenCollision
- Player - removeLife
- Player - draw
- Enemy - updatePosition
- Enemy - outOfLife
- Enemy - playerCollision

---

## Links


### Trello
[Link url](https://trello.com/b/yvogOEBM/super-shooting-game)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/Fred011/Project-module-1)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
