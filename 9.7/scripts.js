//przycisk nowej gry
var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);


//funkcja po kliknięciu

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function () { playerPick('rock') });  
pickPaper.addEventListener('click', function() { playerPick('paper') });  
pickScissors.addEventListener('click', function() { playerPick('scissors') });  


//logika gry

var gameState = 'notStarted',
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

// wyświetlanie elementów gry

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
                newGameBtn.innerHTML = 'Jeszcze raz';

         case 'notStarted':
        default:        
                newGameElem.style.display = 'block';
                pickElem.style.display = 'none';
                resultsElem.style.display = 'none';
    }
}

setGameElements();

//start
var playerPointsElem    = document.getElementById('js-playerPoints'),
    playerNameElem      = document.getElementById('js-playerName'),
    computerPointsElem  = document.getElementById('js-computerPoints'); 

function newGame() {
    player.name = prompt('Please enter your name', 'imię gracza');
    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();

        playerNameElem.innerHTML = player.name;

        setGamePoints();

    }
}    

//wybór gracza
function playerPick(playerPick) {

	var computerPick = getComputerPick();


	playerPickElem.innerHTML = playerPick;   //wybór gracza
	 
	computerPickElem.innerHTML = computerPick;  //wybór komputera

	checkRoundWinner(playerPick, computerPick);
	setGamePoints();

	checkEndGame(); 

}

//losowanie wyboru komputera
function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random() * 3)];
}

//wyświetlenie wyboru gracza i komputera
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

//logika gry i przyznawanie punktów

function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = ''; 

    var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone';   //remis
    } else if (
            (computerPick == 'rock' && playerPick == 'scissors') ||
            (computerPick == 'scissors' && playerPick == 'paper') ||
            (computerPick == 'paper' && playerPick == 'rock')) {
    
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

//aktualizacja wyniku
function setGamePoints() {

    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

//koniec gry

function checkEndGame() {

    if(player.score === 10) {
    	alert('Gratulacje ' + player.name + '! Wygrałeś');
        gameState = "ended";   
    }
    if(computer.score ===10) {
    	alert('Przegrałeś, spróbuj ponownie');
       gameState = "ended";  
     } 
     
    setGameElements(); 
}
   