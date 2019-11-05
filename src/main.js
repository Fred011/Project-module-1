  
function buildDom(htmlString) {

    const div = document.createElement('div');
    div.innerHTML = htmlString;
  
    return div.children[0];
  }
  
  function main() {

    var game;
    var splashScreen;
    var gameOverScreen;
  
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
      var gameScreen = buildDom(`
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
      removeGameOverScreen();
  
      game = new Game();
      game.gameScreen = createGameScreen();
  
      game.start();

      game.passGameOverCallback(gameOver);

    }
  
    createSplashScreen();
  };

  function gameOver () {

    removeGameScreen();
    createGameOverScreen(score);

  };

  function removeGameScreen() {

    game.removeGameScreen();

  };

  function createGameOverScreen (score) {

    gameOverScreen = buildDom (`
    <main>
        <h1>Game over</h1>
        <p>Your score: <span></span></p>
        <img src="https://fontmeme.com/permalink/191104/42af41faf94d592f2950217bee343e78.png" alt="tiny-islanders-font" border="0">
        <button>Restart</button>
    </main>
    `);

    var button = gameOverScreen.querySelector('button');
    button.addEventListener('click', startGame);

    var span = gameOverScreen.querySelector('span');
    span.innerText = score;

    document.body.appendChild(gameOverScreen);
  };

  function removeGameOverScreen () {

    // if (gameOverScreen !== undefined) {
    //     gameOverScreen.remove();
    //   }
  }

  window.addEventListener('load', main)