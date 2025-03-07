document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('playButton');
    const loginSignupButton = document.getElementById('loginSignupButton');
    const gameModesModal = document.getElementById('gameModesModal');
    const minesGame = document.getElementById('minesGame');
    const plinkoGame = document.getElementById('plinkoGame');
    const towersGame = document.getElementById('towersGame');

    const minesGrid = document.getElementById('minesGrid');
    const minesResult = document.getElementById('minesResult');
    const restartMines = document.getElementById('restartMines');

    const plinkoBoard = document.getElementById('plinkoBoard');
    const plinkoStartBtn = document.getElementById('plinkoStartBtn');
    const plinkoResult = document.getElementById('plinkoResult');
    const restartPlinko = document.getElementById('restartPlinko');

    const towersProgress = document.getElementById('towersProgress');
    const towersStartBtn = document.getElementById('towersStartBtn');
    const towersResult = document.getElementById('towersResult');
    const restartTowers = document.getElementById('restartTowers');

    // Show the game modes modal when the play button is clicked
    playButton.addEventListener('click', () => {
        gameModesModal.style.display = 'flex';
    });

    // Close the game modes modal
    const closeModal = () => {
        gameModesModal.style.display = 'none';
    };

    // Switch to selected game mode
    const selectGameMode = (mode) => {
        closeModal();
        switch (mode) {
            case 'Mines':
                showMinesGame();
                break;
            case 'Plinko':
                showPlinkoGame();
                break;
            case 'Towers':
                showTowersGame();
                break;
        }
    };

    // Game Mode buttons
    const gameModeButtons = document.querySelectorAll('.game-mode');
    gameModeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const mode = event.target.getAttribute('data-mode');
            selectGameMode(mode);
        });
    });

    // Mines Game Logic
    const generateMinesGrid = () => {
        minesGrid.innerHTML = '';
        const gridSize = 5;
        const numberOfMines = 5;
        let mines = Array(gridSize * gridSize).fill(false);
        while (mines.filter(x => x === true).length < numberOfMines) {
            const index = Math.floor(Math.random() * mines.length);
            mines[index] = true;
        }
        for (let i = 0; i < gridSize * gridSize; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.dataset.index = i;
            gridItem.addEventListener('click', () => checkMines(i, mines, gridItem));
            minesGrid.appendChild(gridItem);
        }
        return mines;
    };

    const checkMines = (index, mines, gridItem) => {
        if (mines[index]) {
            gridItem.classList.add('bomb');
            minesResult.textContent = 'Boom! You hit a mine!';
            gridItem.style.backgroundColor = 'red';
        } else {
            gridItem.classList.add('safe');
            gridItem.style.backgroundColor = 'green';
        }
    };

    const showMinesGame = () => {
        minesGame.style.display = 'block';
        plinkoGame.style.display = 'none';
        towersGame.style.display = 'none';
        generateMinesGrid();
    };

    restartMines.addEventListener('click', () => {
        minesResult.textContent = '';
        generateMinesGrid();
    });

    // Plinko Game Logic
    const generatePlinkoBoard = () => {
        plinkoBoard.innerHTML = '';
        const rows = 5;
        const columns = 7;
        const plinkoCells = [];
        for (let i = 0; i < rows; i++) {
            const row = document.createElement('div');
            row.classList.add('plinko-row');
            for (let j = 0; j < columns; j++) {
                const cell = document.createElement('div');
                cell.classList.add('plinko-cell');
                cell.addEventListener('click', () => dropPlinkoBall(cell));
                row.appendChild(cell);
            }
            plinkoBoard.appendChild(row);
            plinkoCells.push(row);
        }
        return plinkoCells;
    };

    const dropPlinkoBall = (cell) => {
        const ball = document.createElement('div');
        ball.classList.add('plinko-ball');
        cell.appendChild(ball);
        setTimeout(() => {
            ball.style.transform = 'translateY(200px)';
        }, 100);
        setTimeout(() => {
            plinkoResult.textContent = 'Plinko Ball Dropped!';
        }, 500);
    };

    const showPlinkoGame = () => {
        plinkoGame.style.display = 'block';
        minesGame.style.display = 'none';
        towersGame.style.display = 'none';
        generatePlinkoBoard();
    };

    restartPlinko.addEventListener('click', () => {
        plinkoResult.textContent = '';
        generatePlinkoBoard();
    });

    // Towers Game Logic
    const startTowersProgress = () => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 5;
            towersProgress.style.width = `${progress}%`;
            if (progress >= 100) {
                clearInterval(interval);
                towersResult.textContent = 'You Reached the Top!';
            }
        }, 100);
    };

    const showTowersGame = () => {
        towersGame.style.display = 'block';
        plinkoGame.style.display = 'none';
        minesGame.style.display = 'none';
        startTowersProgress();
    };

    restartTowers.addEventListener('click', () => {
        towersProgress.style.width = '0%';
        towersResult.textContent = '';
        startTowersProgress();
    });

    // Initially, hide the game sections
    minesGame.style.display = 'none';
    plinkoGame.style.display = 'none';
    towersGame.style.display = 'none';
});


