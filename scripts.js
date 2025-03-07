document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('playButton');
    const loginSignupButton = document.getElementById('loginSignupButton');
    const gameModesModal = document.getElementById('gameModesModal');
    const minesGame = document.getElementById('minesGame');
    const plinkoGame = document.getElementById('plinkoGame');
    const towersGame = document.getElementById('towersGame');

    const minesGrid = document.getElementById('minesGrid');
    const restartMines = document.getElementById('restartMines');

    const plinkoBoard = document.getElementById('plinkoBoard');
    const plinkoStartBtn = document.getElementById('plinkoStartBtn');
    const restartPlinko = document.getElementById('restartPlinko');

    const towersProgress = document.getElementById('towersProgress');
    const towersStartBtn = document.getElementById('towersStartBtn');
    const restartTowers = document.getElementById('restartTowers');

    // Game Modes Modal Show/Hide
    playButton.addEventListener('click', () => {
        gameModesModal.style.display = 'flex';
    });

    const closeModal = () => {
        gameModesModal.style.display = 'none';
    };

    document.getElementById('closeModal').addEventListener('click', closeModal);

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

    const gameModeButtons = document.querySelectorAll('.game-mode');
    gameModeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const mode = event.target.getAttribute('data-mode');
            selectGameMode(mode);
        });
    });

    // Mines Game
    const generateMinesGrid = () => {
        minesGrid.innerHTML = '';
        const gridSize = 5;
        for (let i = 0; i < gridSize * gridSize; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.dataset.index = i;
            gridItem.addEventListener('click', () => {
                gridItem.style.backgroundColor = '#444';
            });
            minesGrid.appendChild(gridItem);
        }
    };

    const showMinesGame = () => {
        minesGame.style.display = 'block';
        plinkoGame.style.display = 'none';
        towersGame.style.display = 'none';
        generateMinesGrid();
    };

    restartMines.addEventListener('click', () => {
        generateMinesGrid();
    });

    // Plinko Game
    const generatePlinkoBoard = () => {
        plinkoBoard.innerHTML = '';
        const rows = 5;
        const columns = 7;
        for (let i = 0; i < rows; i++) {
            const row = document.createElement('div');
            for (let j = 0; j < columns; j++) {
                const cell = document.createElement('div');
                cell.classList.add('plinko-cell');
                cell.addEventListener('click', () => {
                    cell.style.backgroundColor = '#555';
                });
                row.appendChild(cell);
            }
            plinkoBoard.appendChild(row);
        }
    };

    const showPlinkoGame = () => {
        plinkoGame.style.display = 'block';
        minesGame.style.display = 'none';
        towersGame.style.display = 'none';
        generatePlinkoBoard();
    };

    restartPlinko.addEventListener('click', () => {
        generatePlinkoBoard();
    });

    // Towers Game
    const showTowersGame = () => {
        towersGame.style.display = 'block';
        minesGame.style.display = 'none';
        plinkoGame.style.display = 'none';
        towersProgress.style.width = '0%';
    };

    restartTowers.addEventListener('click', () => {
        towersProgress.style.width = '0%';
    });

    towersStartBtn.addEventListener('click', () => {
        towersProgress.style.width = '100%';
    });
});

