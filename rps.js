/*
const getUserChoice = () => console.log("Hello World");
getUserChoice();
*/
let playerWins = 0;
let aiWins = 0;
let tieWins = 0;

const getUserChoice = (userInput) => {
    let choice = userInput.toLowerCase();

    if (choice === 'rock' || choice === 'paper' || choice === 'scissors' || choice === 'bomb' || choice === 'lizard' || choice === 'spock' || choice === 'auto')
        return choice;
    else
        return 'error!';
};

const getComputerChoice = () => {
    let myChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let choice = Math.floor(Math.random() * myChoices.length);

    return myChoices[choice];
};

/*
function sleepFor(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ console.log(now); } 
}
*/

const determineWinner = (player, ai, verbose) => {
    //validation
    if (player === 'error!') {
        console.log('error!');
        return;
    } else if (player === 'bomb') {
        console.log("User wins, cheater...");
        playerWins++;
        return;
    } else if (player === 'auto') {
        console.log("Bot is playing...");
        player = getComputerChoice();
    }

    if (verbose) {
        console.log('player:' + player);
        console.log('ai:' + ai);
    }

    //win condition durumunu kontrol
    if (player === ai) {
        console.log("Tie");
        tieWins++;
    } else if ((player === 'rock' && ai === 'scissors') ||
        (player === 'rock' && ai === 'lizard') ||
        (player === 'paper' && ai === 'rock') ||
        (player === 'paper' && ai === 'spock') ||
        (player === 'spock' && ai === 'scissors') ||
        (player === 'spock' && ai === 'rock') ||
        (player === 'lizard' && ai === 'spock') ||
        (player === 'lizard' && ai === 'paper') ||
        (player === 'scissors' && ai === 'paper') ||
        (player === 'scissors' && ai === 'lizard')) {
        console.log("User wins");
        playerWins++;
    } else {
        console.log("Computer wins");
        aiWins++;
    }
}

const playGame = (myChoice, verbose = false, gameCount = 1) => { //abstraction
    //console.log(typeof(gameCount) == 'number');
    //console.log(Number.isInteger(gameCount));

    console.log('Game Session Started');
    playerWins = 0;
    aiWins = 0;
    tieWins = 0;

    let choices = [];

    if (Array.isArray(myChoice)) {
        choices = myChoice;
    } else {
        for (i = 0; i < gameCount; i++)
            choices.push(myChoice);
    }

    var gamesPlayed = 0;

    for (i = 0; i < choices.length; i++) {
        console.log(`game ${i+1}:`);
        determineWinner(getUserChoice(choices[i]), getComputerChoice(), verbose);
        console.log('-----------------------');
        gamesPlayed++;
    }

    console.log('Total games played:' + gamesPlayed);
    console.log('Player wins:' + playerWins);
    console.log('AI wins:' + aiWins);
    console.log('Tie:' + tieWins);
    console.log();
}

//Test Suite
//playGame('rock',true);
//playGame('paper',false);
//playGame('scissors');
//playGame('bomb',true);
//playGame('spock', true, 5);
//playGame(getComputerChoice(),true);
playGame('auto', true, 10);
//playGame('auto', true, 10);
//playGame('lizard', true, 5);
//playGame(['rock','paper','scissors','lizard','spock','paper'],true);

//yarın ödev olarak n sayıdaki oyunun istatistiklerini veren bir eklenti yapılacak.
//örnek : 50 oyunda kullanıcı 20 tanesini kazanmıştır.

//spock ve lizard eklentileri yapılacak v2.0

//v2.1 debug mode eklentisi

//++Kullanıcı sayısını belirttiği her oyunda aynı değeri verebilir.
//++Kullanıcı sayı belirtmeden bir array ile oyunu oynayabilir.
//++Kullanıcı tek bir oyunda cevap verebilir.
//++Kullanıcı bilgisyara oyunu oynatabilir.

//sleepFor(1000);