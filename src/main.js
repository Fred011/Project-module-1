  
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
  var laser = document.getElementById('laser');
  var splashSound = document.getElementById('splashSound');
  var mainMusic = document.getElementById('gameMusic');

  function createSplashScreen() {
    
    splashSound.currentTime = 0
    splashSound.play();
    splashScreen = buildDom(`
     <main>
        <section id="title1">
          <img src="https://fontmeme.com/permalink/191106/28ba4c65f21e2c98c5d61ec48dc1f8d5.png" alt="tiny-islanders-font">
        </section>
        <section id="title2">
          <img src="https://fontmeme.com/permalink/191106/4227d3afa67613e0a7f49462c226676c.png" alt="tiny-islanders-font">
        </section>
          <button class="start-btn">Play</button>
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

  splashSound.pause()

  document.body.appendChild(gameScreen);

    return gameScreen;
  }
  
  function startGame() {
      removeSplashScreen();
      //removeGameOverScreen();

      gameMusic.play();
      
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
        <img src="https://fontmeme.com/permalink/191107/f08ac8b961b25409f579740f9cf73206.png" alt="tiny-islanders-font" id="game-over">
        <section class="final-score">
            <p>Score: <span></span></p>
        </section>
        <section id="btn-section">
            <button id="restart-btn">Restart</button>
            <button id="menu-btn">Menu</button>
        </section>
    </main>
    `);

    mainMusic.pause();
    splashSound.currentTime = 0
    splashSound.play();

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