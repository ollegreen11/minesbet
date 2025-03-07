document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('playButton');
    const loginSignupButton = document.getElementById('loginSignupButton');
    const gameModesModal = document.getElementById('gameModesModal');
    const minesGame = document.getElementById('minesGame');
    const plinkoGame = document.getElementById('plinkoGame');
    const towersGame = document.getElementById('towersGame');

    const minesGrid = document.getElementById('minesGrid');
    const minesResult = document.getElementById('minesResult');

    const plinkoBoard = document.getElementById('plinkoBoard');
    const plinkoStartBtn = document.getElementById('plinkoStartBtn');
    const plinkoResult = document.getElementById('plinkoResult');

    const towersProgress = document.getElementById('towersProgress');
    const towersStartBtn = document.getElementById('towersStartBtn');
    const towersResult = document.getElementById('towersResult');

    // Open the Game Modes Modal
    playButton.addEventListener('click', () => {
        gameModesModal.style.display = 'flex';
    });

    // Close the Game Modes Modal and Start the Selected Game
    document.querySelectorAll('.game-mode').forEach(button => {
        button.addEventListener('click', (e) => {
            const gameMode = e.target.dataset.mode;
            gameModesModal.style.display = 'none';
            if (gameMode === 'Mines') {
                startMinesGame();
            } else if (gameMode === 'Plinko') {
                startPlinkoGame();
            } else if (gameMode === 'Towers') {
                startTowersGame();
            }
        });
    });

    // Mines Game Logic
    function startMinesGame() {
        minesGame.style.display = 'block';
        generateMinesGrid();
    }

    function generateMinesGrid() {
        const gridSize = 5;
        const bombCount = 5;
        let grid = [];
        let gameOver = false;

        // Randomly place bombs
        while (grid.filter(x => x === 'bomb').length < bombCount) {
            const randomIndex = Math.floor(Math.random() * gridSize * gridSize);
            if (!grid[randomIndex]) {
                grid[randomIndex] = 'bomb';
            }
        }

        // Fill remaining spots with 'safe'
        for (let i = 0; i < gridSize * gridSize; i++) {
            if (!grid[i]) {
                grid[i] = 'safe';
            }
        }

        // Clear previous grid and render
        minesGrid.innerHTML = '';
        grid.forEach((tile, index) => {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            div.dataset.index = index;
            div.dataset.status = tile;
            div.addEventListener('click', handleTileClick);
            minesGrid.appendChild(div);
        });

        function handleTileClick(event) {
            if (gameOver) return;

            const tile = event.target;
            const tileStatus = tile.dataset.status;

            if (tileStatus === 'bomb') {
                tile.classList.add('bomb');
                minesResult.textContent = 'Game Over! You hit a bomb!';
                gameOver = true;
            } else {
                tile.classList.add('safe');
                tile.textContent = 'Safe';
            }
        }
    }

    // Plinko Game Logic
    function startPlinkoGame() {
        plinkoGame.style.display = 'block';
        plinkoResult.textContent = '';
        generatePlinkoBoard();

        plinkoStartBtn.addEventListener('click', () => {
            const result = simulatePlinko();
            plinkoResult.textContent = `You landed on: ${result}`;
        });
    }

    function generatePlinkoBoard() {
        plinkoBoard.innerHTML = '';
        for (let i = 0; i < 7; i++) {
            const row = document.createElement('div');
            row.classList.add('plinko-row');
            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('div');
                cell.classList.add('plinko-cell');
                row.appendChild(cell);
            }
            plinkoBoard.appendChild(row);
        }
    }

    function simulatePlinko() {
        const slots = ['Low', 'Medium', 'High'];
        return slots[Math.floor(Math.random() * slots.length)];
    }

    // Towers Game Logic
    function startTowersGame() {
        towersGame.style.display = 'block';
        towersResult.textContent = '';
        towersStartBtn.addEventListener('click', () => {
            simulateTowers();
        });
    }

    function simulateTowers() {
        let progress = 0;
        const interval = setInterval(() => {
            if (progress >= 100) {
                clearInterval(interval);
                towersResult.textContent = 'You reached the top! You win!';
            } else if (Math.random() < 0.1) {
                clearInterval(interval);
                towersResult.textContent = 'You fell! Try again.';
            } else {
                progress += 5;
                updateTowerProgress(progress);
            }
        }, 500);
    }

    function updateTowerProgress(progress) {
        const progressBar = document.createElement('div');
        progressBar.style.width = `${progress}%`;
        progressBar.classList.add('towers-progress-bar');
        towersProgress.innerHTML = '';
        towersProgress.appendChild(progressBar);
    }
});


