document.addEventListener('DOMContentLoaded', (event) => {
    const choices = ['rock', 'paper', 'scissors'];
    const buttons = document.querySelectorAll('.choice');
    const userChoiceDisplay = document.getElementById('user-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const winnerDisplay = document.getElementById('winner');
    const playComputerButton = document.getElementById('play-computer');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            animateButton(button);
            const userChoice = button.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            userChoiceDisplay.textContent = `La tua scelta: ${convertChoice(userChoice)}`;
            computerChoiceDisplay.textContent = `Scelta del computer: ${convertChoice(computerChoice)}`;
            const winner = determineWinner(userChoice, computerChoice, false);
            winnerDisplay.textContent = `Risultato: ${winner}`;
        });
    });

    playComputerButton.addEventListener('click', () => {
        const computerChoice1 = choices[Math.floor(Math.random() * choices.length)];
        const computerChoice2 = choices[Math.floor(Math.random() * choices.length)];
        userChoiceDisplay.textContent = `Scelta del computer 1: ${convertChoice(computerChoice1)}`;
        computerChoiceDisplay.textContent = `Scelta del computer 2: ${convertChoice(computerChoice2)}`;
        const winner = determineWinner(computerChoice1, computerChoice2, true);
        winnerDisplay.textContent = `Risultato: ${winner}`;
    });

    function animateButton(button) {
        button.classList.add('active');
        setTimeout(() => {
            button.classList.remove('active');
        }, 300);
    }

    function convertChoice(choice) {
        switch (choice) {
            case 'rock':
                return 'Sasso';
            case 'paper':
                return 'Carta';
            case 'scissors':
                return 'Forbice';
        }
    }

    function determineWinner(choice1, choice2, isComputerVsComputer) {
        if (choice1 === choice2) {
            return 'Pareggio!';
        } else if (
            (choice1 === 'rock' && choice2 === 'scissors') ||
            (choice1 === 'paper' && choice2 === 'rock') ||
            (choice1 === 'scissors' && choice2 === 'paper')
        ) {
            return isComputerVsComputer ? 'Computer 1 ha vinto!' : 'Hai vinto!';
        } else {
            return isComputerVsComputer ? 'Computer 2 ha vinto!' : 'Hai perso!';
        }
    }
});