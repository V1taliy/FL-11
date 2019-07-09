let wantToPlay = confirm('Do you want to play a game?');

if (wantToPlay === false) {
    alert('You did not become a billionaire, but can.');
} else if (wantToPlay === true) {
    const maxFirstPrise = 100;
    const middleFirstPrise = 50;
    const lowerFirstPrise = 25;
    const rangeFactor = 4;
    const prizeFactor = 2;
    const restartAttempts = 4;
    const restartRangeGuess = 9;
    let arrPrize = [0, lowerFirstPrise, middleFirstPrise, maxFirstPrise];
    let rangeGuessNumbers = 9;
    let randomNumber = Math.floor(Math.random() * rangeGuessNumbers);
    let userResponse;
    let playAgain;
    let totalPrize = 0;
    let continuePlay;

    for (let i = 3; i > 0; i--) {
        userResponse = +prompt(
            `Choose a roulette pocket number from 0 to ${rangeGuessNumbers - 1}
Attempts left: ${i}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${arrPrize[i]}$`
        );

        if (randomNumber === userResponse) {
            continuePlay = confirm(
                `Congratulation, you won! Your prize is: ${(totalPrize += arrPrize[i])}$. Do you want to continue?`
            );
        }

        if (i <= 1 && randomNumber !== userResponse) {
            alert(`Thank you for your participation. Your prize is: ${(totalPrize += arrPrize[0])}$`);
            playAgain = confirm('Do you want to play again?');
        }

        if (continuePlay === false) {
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
            playAgain = confirm('Do you want to play again?');
        } else if (continuePlay === true) {
            randomNumber = Math.floor(Math.random() * rangeGuessNumbers);
            rangeGuessNumbers += rangeFactor;
            arrPrize = arrPrize.map(item => item * prizeFactor);
            i = restartAttempts;
        }

        if (playAgain === false) {
            break;
        } else if (playAgain === true) {
            totalPrize = 0;
            rangeGuessNumbers = restartRangeGuess;
            randomNumber = Math.floor(Math.random() * rangeGuessNumbers);
            arrPrize = [0, lowerFirstPrise, middleFirstPrise, maxFirstPrise];
            i = restartAttempts;
        }
        continuePlay = null;
        playAgain = null;
    }
}