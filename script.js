function computerPlay() {
    const items = ['Rock', 'Paper', 'Scissors'];
    const item = items[Math.floor(Math.random() * items.length)];
    return item;
}

function playerPlay() {
    const items = ['ROCK', 'PAPER', 'SCISSORS'];
    while (true) {
        const item = prompt("What is your play? (Rock/Paper/Scissors)");
        if (!items.includes(item.toUpperCase())) {
            console.log('Wrong input, try again.')
        } else {
            return item;
        }
    }
}

function playRound() {
    const c = computerPlay().toUpperCase()
    const p = playerPlay().toUpperCase()
    let win;
    if (c == p) {
        console.log('Tie! Play again.');
        win = 'Tie';
    }
    else if (c == 'ROCK' && p == 'PAPER') {
        console.log('You Win! Paper covers rock.');
        win = 'True';
    }
    else if (c == 'ROCK' && p == 'SCISSORS') {
        console.log('You Lose! Rock smashes scissors.');
        win = 'False';
    }
    else if (c == 'PAPER' && p == 'ROCK') {
        console.log('You Lose! Paper covers rock');
        win = 'False';
    }
    else if (c == 'PAPER' && p == 'SCISSORS') {
        console.log('You Win! Scissors cut through paper.');
        win = 'True';
    }
    else if (c == 'SCISSORS' && p == 'PAPER') {
        console.log('You Lose! Scissors cut through paper.');
        win = 'False';
    }
    else if (c == 'SCISSORS' && p == 'ROCK') {
        console.log('You Win! Rock smashes scissors.');
        win = 'True';
    }

    return win;
}


function game() {
    let playerWins = 0;
    for (i = 1; i <= 5; i++) {
        let win = playRound();
        if (win == 'Tie') {
            i--;
        }
        else if (win == 'True') {
            playerWins++;
        }
    }

    if (playerWins >= 3) {
        console.log(`You won! (Won ${playerWins} out of 5 games.)`);
    } else {
        console.log(`You lost. (Won ${playerWins} out of 5 games.)`);
    }
}


game();