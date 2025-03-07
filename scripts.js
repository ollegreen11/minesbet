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

    const gameModeButtons = document

