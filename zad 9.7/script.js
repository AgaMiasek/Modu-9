//*********   BUTTON NEW GAME  ***********
var newGameBtn = document.getElementById('js-newGameButton');

//set listener to NG button 
newGameBtn.addEventListener('click', newGame);


//*********   BUTTONS rock, paper & scissors  ***********

//get RPS's (rock, papaer & scissors) buttons elements
var pickRock        = document.getElementById('js-playerPick_rock'),
    pickPaper       = document.getElementById('js-playerPick_paper'),
    pickScissors    = document.getElementById('js-playerPick_scissors');

//**** set listeners to RPS buttons    
//human's player picks
pickRock.addEventListener('click', function () { playerPick(CONST.ROCK); });  
pickPaper.addEventListener('click', function() { playerPick(CONST.PAPER); });  
pickScissors.addEventListener('click', function() { playerPick(CONST.SCISSORS); });  


//********** Game' Logic ************************

//start's status
var gameState = 'notStarted',
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

// game's elements display
var newGameElem = document.getElementById('js-newGameElement'),
    pickElem    = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
    switch(gameState) {
        case 'started':
                newGameElem.style.display = 'none';
                pickElem.style.display = 'block';
                resultsElem.style.display = 'block';
            break;
        case 'ended':
                newGameBtn.innerHTML = 'Try again';
                playerPickElem.innerHTML = '';
                playerResultElem.innerHTML = '';
                computerPickElem.innerHTML = '';
                computerResultElem.innerHTML ='';
                player.score = computer.score = 0;
                setGamePoints();
                /* falls through */
        case 'notStarted':
                /* falls through */
        default:        
                newGameElem.style.display = 'block';
                pickElem.style.display = 'none';
                resultsElem.style.display = 'none';
    }
}


setGameElements();

//game start
var playerPointsElem    = document.getElementById('js-playerPoints'),
    playerNameElem      = document.getElementById('js-playerName'),
    computerPointsElem  = document.getElementById('js-computerPoints'); 

function newGame() {
    player.name = prompt(CONST.PROMPT_NAME, CONST.PLAYER_NAME_PLACEHOLDER);
    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();

        playerNameElem.innerHTML = player.name;
        //setGamePoints();
    }
}    

//player choice
function playerPick(playerPick) {

    var computerPick = getComputerPick();

    //display human choice
    playerPickElem.innerHTML = playerPick;   
    //display computer choice
    computerPickElem.innerHTML = computerPick;  

    checkRoundWinner(playerPick, computerPick);
    setGamePoints();

    if (player.score === CONST.MAX_POINTS) {
        endGame('player');
    } else if (computer.score === CONST.MAX_POINTS) {
        endGame('computer');
    }
}


//computer random choice
function getComputerPick() {
    var possiblePicks = [CONST.ROCK, CONST.PAPER, CONST.SCISSORS];
    return possiblePicks[Math.floor(Math.random() * possiblePicks.length)];
}

//add player and copmuter choice on page
var playerPickElem      = document.getElementById('js-playerPick'),
    computerPickElem    = document.getElementById('js-computerPick'),
    playerResultElem    = document.getElementById('js-playerResult'),
    computerResultElem  = document.getElementById('js-computerResult');


function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = ''; 

    var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone';                 //remis
    } else if (
            (computerPick == CONST.ROCK && playerPick == CONST.SCISSORS) ||
            (computerPick == CONST.PAPER && playerPick == CONST.ROCK) ||
            (computerPick == CONST.SCISSORS && playerPick == CONST.PAPER)) {
    
        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = 'Win!';
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = 'Win!';
        computer.score++;
    }
}

//set game points
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}


//end of game
var winnerInfo          = document.getElementById('js-winnerInfo'),
    playerPointsModal   = document.getElementById('js-playerPointsModal'),
    playerNameModal     = document.getElementById('js-playerNameModal'),
    computerPointsModal = document.getElementById('js-computerPointsModal');

function endGame(winner) {

    //check who wins   
    if (winner == 'player') {
        winnerInfo.innerHTML = '<b>' + player.name.toUpperCase() + '</b> YOU WIN!';
    } else if (winner == 'computer') {
        winnerInfo.innerHTML = '<b>Sorry ' + player.name.toUpperCase() + '!</b> YOU LOSE!';
    }

    //set game result in modal
    playerPointsModal.textContent = player.score;
    playerNameModal.textContent = player.name;
    computerPointsModal.textContent = computer.score;

    //call modal
    $('#resultModal').modal('show');
    
    gameState = 'ended';
    setGameElements();
}
