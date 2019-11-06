  
function buildDom(htmlString) {

    const div = document.createElement('div');
    div.innerHTML = htmlString;
  
    return div.children[0];
}

function main() {

  var game;
  var splashScreen;
  var gameOverScreen;
  var gameScreen;

  function createSplashScreen() {

    splashScreen = buildDom(`
     <main>
          <h1><img src="https://fontmeme.com/permalink/191103/6c19395673d1c662e306015215c8acc7.png" alt="tiny-islanders-font" id="title"></h1>
          <button class="start-btn">Start Game</button>
     </main>
    `);

    document.body.appendChild(splashScreen);

    var startButton = splashScreen.querySelector('button');
    startButton.addEventListener('click', function() {
      startGame();
    });
  }

  function removeSplashScreen() {
    splashScreen.remove();
  }

  function createGameScreen() {
    gameScreen = buildDom(`
      <main class="game">
          <section id="score-section">
          <span>Score: </span><span id="score">0</span>
          <span>Lives: </span><span id="lives">3</span>
          </section>
          
        <section class="canvas-container">
          <canvas></canvas>
        </section>
      </main>
   `);

    document.body.appendChild(gameScreen);

    return gameScreen;
  }
  
  function startGame() {
      removeSplashScreen();
      //removeGameOverScreen();
      
      game = new Game();
      game.gameScreen = createGameScreen();
      
      game.start();
      
      game.passGameOverCallback(gameOver);
      
  }


    function removeGameScreen() {

        gameScreen.remove()
    
    };
  
  function gameOver (score) {
      
      removeGameScreen();
      createGameOverScreen(score);
      
  };
  
  function createGameOverScreen (score) {

    gameOverScreen = buildDom (`
    <main>
        <img src="https://fontmeme.com/permalink/191104/42af41faf94d592f2950217bee343e78.png" alt="tiny-islanders-font" id="game-over">
        <section class="final-score">
            <p>Your score: <span></span></p>
        <section>
        <button id="restart-btn">Restart</button>
        <button id="menu-btn">Menu</button>
    </main>
    `);

    var button = gameOverScreen.querySelector('#restart-btn');
    button.addEventListener('click', function() {
         removeGameOverScreen();
         startGame();
    });

    var button = gameOverScreen.querySelector('#menu-btn');
    button.addEventListener('click', function() {
         removeGameOverScreen();
         createSplashScreen();
    });

    var span = gameOverScreen.querySelector('span');
    span.innerText = score;

    document.body.appendChild(gameOverScreen);
  };
  
    
    createSplashScreen();
    
    function removeGameOverScreen () {
    
      if (gameOverScreen !== undefined) {
          gameOverScreen.remove();
        }
    }
};





  window.addEventListener('load', main)