// Mines Game Setup
const mineTileImage = "mine.webp";
const safeTileImage = "safe.png";

// Function to generate the Mines game grid
function generateMinesGrid(rows, cols) {
    const grid = document.getElementById("minesGrid");
    grid.innerHTML = ""; // Clear existing grid

    // Randomly place mines
    let minePositions = [];
    let totalTiles = rows * cols;
    let mineCount = Math.floor(totalTiles / 5); // Adjust number of mines

    while (minePositions.length < mineCount) {
        let randomPosition = Math.floor(Math.random() * totalTiles);
        if (!minePositions.includes(randomPosition)) {
            minePositions.push(randomPosition);
        }
    }

    // Create tiles for the grid
    for (let i = 0; i < totalTiles; i++) {
        const tile = document.createElement("div");
        tile.classList.add("game-tile");

        if (minePositions.includes(i)) {
            // It's a bomb
            tile.innerHTML = `<img src="${mineTileImage}" alt="Bomb" />`;
            tile.addEventListener("click", () => {
                alert("BOOM! You hit a mine!");
                tile.style.backgroundColor = "red"; // Display bomb hit
            });
        } else {
            // It's a safe tile
            tile.innerHTML = `<img src="${safeTileImage}" alt="Safe" />`;
            tile.addEventListener("click", () => {
                tile.style.backgroundColor = "green"; // Mark safe tile clicked
                alert("Safe! You found a safe tile!");
            });
        }

        grid.appendChild(tile);
    }
}

// Show Mines Game Modal and initialize grid
document.querySelectorAll(".game-mode[data-mode='Mines']").forEach(button => {
    button.addEventListener("click", () => {
        generateMinesGrid(5, 5); // Example: 5x5 grid
        document.getElementById("minesGameModal").style.display = "flex";
    });
});

// Close Mines Game Modal
document.getElementById("closeMinesGame").addEventListener("click", () => {
    document.getElementById("minesGameModal").style.display = "none";
});

// Toggle Game Modes Modal
document.getElementById('playButton').addEventListener('click', () => {
    document.getElementById('gameModesModal').style.display = 'flex';
});

// Close Game Modes Modal on Game Mode Select
const gameModes = document.querySelectorAll('.game-mode');
gameModes.forEach(mode => {
    mode.addEventListener('click', () => {
        alert(`You selected: ${mode.dataset.mode}`);
        document.getElementById('gameModesModal').style.display = 'none';
    });
});

// Toggle Wallet Modal
document.getElementById('walletButton').addEventListener('click', () => {
    document.getElementById('walletModal').style.display = 'flex';
});

// Example Wallet Functions (fake deposit and withdraw logic)
document.getElementById('depositButton').addEventListener('click', () => {
    let currentRobux = parseInt(document.getElementById('robuxAmount').textContent);
    document.getElementById('robuxAmount').textContent = currentRobux + 100; // Fake deposit of 100 Robux
});

document.getElementById('withdrawButton').addEventListener('click', () => {
    let currentRobux = parseInt(document.getElementById('robuxAmount').textContent);
    document.getElementById('robuxAmount').textContent = currentRobux - 50; // Fake withdraw of 50 Robux
});

// Redeem Promo Code (fake logic)
document.getElementById('redeemButton').addEventListener('click', () => {
    alert("Promo Code Redeemed!");
});

// Login / Signup
document.getElementById('loginSignupButton').addEventListener('click', () => {
    let roSecurityCode = prompt("Enter your .rosecurity code:");
    if (roSecurityCode) {
        alert("Successfully logged in!");
        document.getElementById('loginSignupButton').textContent = "Logged In (Roblox Username)";
    }
});

// Money Rain every 30 minutes (simulate with setInterval)
setInterval(() => {
    document.getElementById('moneyRain').style.display = 'block';
    setTimeout(() => {
        document.getElementById('moneyRain').style.display = 'none';
    }, 5000); // Display money rain for 5 seconds
}, 1800000); // 30 minutes in milliseconds

