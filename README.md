# SUPER SHOOTER 

## Description
This is a shooter game where the player has to kill enemies to get the best score. The player starts with 3 lives and with the score 0. Enemies will come from every sides of the screen randomly and try to kill the player. To defend himself, the player have a laser gun to blow up the enemies. The game ends when the player has no lives left.

## Instructions

- to move left, press left arrow key
- to move right, press right arrow key
- to move up, press up arrow key
- to move down, press down arrow key
- to shoot, press space bar

---

## MVP (DOM - CANVAS)

- player can move left and right
- player can fire bullet in front of him
- random generation of enemies from the top of the screen
- check for collison between player and enemies
- player doesn't move if any keys are pressed

## Backlog

- score
- increase dificulty 
- get random items that can change the bullets
- press two keys at the same time
- lives
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

game.prototype.gameStart () {}

game.prototype.startLoop () {}

game.prototype.checkCollision () {}

game.prototype.updateGameScore () {}

game.prototype.gameOver () {}

game.prototype.removeGameOverScreen () {}
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

player.prototype.setDirection () {}

player.prototype.collision() {}

player.prototype.screenCollision () {}

player.prototype.removeLife() {}

player.prototype.draw() {}

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

enemy.prototype.draw () {}

enemy.prototype.updatePosition () {}

enemy.prototype.outOfLife () {}

enemy.prototype.playerCollision () {}
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

- gameoverScreen
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
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
