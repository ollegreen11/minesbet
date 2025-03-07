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
        button.addEventListener('click', () => {
            const mode = button.getAttribute('data-mode');
            selectGameMode(mode);
        });
    });

    const showMinesGame = () => {
        minesGame.style.display = 'block';
        plinkoGame.style.display = 'none';
        towersGame.style.display = 'none';
        generateMinesGrid();
    };

    const showPlinkoGame = () => {
        minesGame.style.display = 'none';
        plinkoGame.style.display = 'block';
        towersGame.style.display = 'none';
    };

    const showTowersGame = () => {
        minesGame.style.display = 'none';
        plinkoGame.style.display = 'none';
        towersGame.style.display = 'block';
    };

    // Placeholder game generation functions
    const generateMinesGrid = () => {
        // Generate a 5x5 grid with clickable tiles for Mines
        for (let i = 0; i < 25; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.addEventListener('click', () => {
                // Add your mine click functionality here
                gridItem.style.backgroundColor = '#f00';
            });
            minesGrid.appendChild(gridItem);
        }
    };

    restartMines.addEventListener('click', () => {
        minesGrid.innerHTML = '';
        generateMinesGrid();
    });

    // Add other game logic for Plinko and Towers games...
});

