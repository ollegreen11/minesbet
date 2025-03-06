let balance = 0; // Initial balance
let loggedIn = false; // Login status

// Update the balance display
function updateBalance() {
  document.getElementById("balance-display").innerText = `Balance: ${balance} Robux`;
}

// Login function (simulating a .rosecurity code)
function login() {
  const code = document.getElementById("rosecurity-code").value;
  if (code === "mySecretCode") {
    loggedIn = true;
    document.getElementById("login-section").style.display = "none";
    document.getElementById("site-content").style.display = "block";
    updateBalance();
  } else {
    alert("Incorrect .rosecurity code.");
  }
}

// Deposit Robux
function depositRobux() {
  const amount = parseInt(document.getElementById("betAmount").value);
  if (amount && amount > 0) {
    balance += amount;
    updateBalance();
    alert(`${amount} Robux deposited!`);
  } else {
    alert("Please enter a valid amount to deposit.");
  }
}

// Withdraw Robux
function withdrawRobux() {
  const amount = parseInt(document.getElementById("betAmount").value);
  if (amount && amount > 0 && balance >= amount) {
    balance -= amount;
    updateBalance();
    alert(`${amount} Robux withdrawn!`);
  } else {
    alert("Insufficient balance or invalid amount.");
  }
}

// Helper function to get the bet amount
function getBetAmount() {
  const betAmount = document.getElementById("betAmount").value;
  if (!betAmount || betAmount <= 0 || betAmount > balance) {
    alert("Please enter a valid bet amount.");
    return null;
  }
  return parseInt(betAmount);
}

// Mines Game
function playMines() {
  const bet = getBetAmount();
  if (bet === null) return;
  
  // Simulate a mine hit (20% chance)
  const hitMine = Math.random() < 0.2;
  
  // Display result based on whether the player hit a mine
  const resultMessage = hitMine ? 
    `<img src="assets/images/mines.webp" alt="Mine Hit" class="result-image"> You hit a mine! You lost ${bet} Robux.` :
    `<img src="assets/images/safe.png" alt="Safe Tile" class="result-image"> You avoided the mine! You win ${bet * 2} Robux!`;
  
  displayResult(resultMessage);
}

// Towers Game
function playTowers() {
  const bet = getBetAmount();
  if (bet === null) return;
  
  const result = Math.random() < 0.5;
  const resultMessage = result ? `You built a successful tower! You win ${bet * 2} Robux!` : `The tower collapsed! You lost ${bet} Robux.`;
  displayResult(resultMessage);
}

// Crash Game
function playCrash() {
  const bet = getBetAmount();
  if (bet === null) return;
  
  const multiplier = (Math.random() * 10).toFixed(2);
  const resultMessage = multiplier >= 5 ? 
    `<img src="assets/images/crash.jpg" alt="Crash Game" class="result-image"> You win! Your multiplier is ${multiplier}.` : 
    `<img src="assets/images/crash.jpg" alt="Crash Game" class="result-image"> Crash! You lost your bet.`;
  displayResult(resultMessage);
}

// Plinko Game
function playPlinko() {
  const bet = getBetAmount();
  if (bet === null) return;
  
  const slots = [0, 1, 2, 3, 4, 5];
  const resultSlot = slots[Math.floor(Math.random() * slots.length)];
  const resultMessage = resultSlot === 0 ? 
    `<img src="assets/images/plinko.jpg" alt="Plinko Game" class="result-image"> You lost! You get 0 Robux.` : 
    `<img src="assets/images/plinko.jpg" alt="Plinko Game" class="result-image"> You win! You get ${bet * resultSlot} Robux!`;
  displayResult(resultMessage);
}

// Display Result
function displayResult(message) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = message;
}

// Open Codes Section
function openCodes() {
  alert("Open Codes Section.");
}

// Open Affiliate Earnings Section
function openAffiliate() {
  alert("Open Affiliate Earnings Section.");
}

// Open Settings Section
function openSettings() {
  alert("Open Settings Section.");
}

