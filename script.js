let UserName = prompt("Please enter you Name");
let inp = document.querySelector('#guess-inp');
let btn = document.querySelector('.sub-btn');
let previousGuess = document.querySelector('.previous-guess');
let remGuess = document.querySelector('.remaining-guess')
let winner = document.querySelector('#winner');
let looser = document.querySelector('#looser');
let guessLevel = document.querySelector('.guess-level');
let restart = document.querySelector('.restart');

let guessCount = 10;
let winningGuess = Math.floor(Math.random()*100);


// Function to reset the game state
function resetGame() {
    guessCount = 10;
    winningGuess = Math.floor(Math.random() * 100);

    previousGuess.innerHTML = 'Previous guess: ';
    remGuess.innerHTML = 'Guesses Remaining: 10';
    winner.style.display = 'none';
    looser.style.display = 'none';
    guessLevel.innerHTML = '';

    // hide the restart button
    restart.style.display = 'none';
}

// Event listener for the submit button
btn.addEventListener('click', ()=>{
    if(inp.value == ""){
        alert('Enter the number')
    } else if(inp.value != winningGuess){
        --guessCount
        previousGuess.innerHTML = `Previous guess : ${inp.value}`;
        remGuess.innerHTML = `Guesses Remaining: ${guessCount}`;
        guessHighOrLow(inp.value);
        // if player looses
        if(guessCount === 0){
            looser.style.display = "block";
            looser.innerHTML = `<h2>Better luck next time ${UserName}. 🥲</h2>`;
            guessLevel.innerHTML = '';
            restart.style.display = 'block';
        }
    }else{
        // if player win
        winner.style.display = "block";
        winner.innerHTML = `<h1>🎉Congrulation ${UserName} you are the winner!!🎉</h1>`
        guessLevel.innerHTML = '';
        restart.style.display = 'block';
    }
    
    inp.value = "";
})


function guessHighOrLow(inp){
    if(inp < winningGuess){
        return guessLevel.innerHTML = "Hint: Your guess is low"
    }
    return guessLevel.innerHTML = "Hint: Your guess is high"
}

restart.addEventListener('click', resetGame);