  
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
            <h1>SUPER SHOOTER</h1>
            <button>Start Game</button>
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
            <span>Score: </span><span id="score">0</span>
            <span>Lives: </span><span id="lives">3</span>
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
  
      var game = new Game();
      game.gameScreen = createGameScreen();
  
      game.start();
    }
  
    createSplashScreen();
  }
  
  window.onload = main;