let balance = 5;

function showWallet() {
    alert("Wallet Feature Coming Soon...");
}

function openChat() {
    document.getElementById("chat").style.display = "block";
}

function openGame(game) {
    document.getElementById("gameSection").innerHTML = `
        <h2>${game.toUpperCase()}</h2>
        <p>Game Coming Soon...</p>
    `;
}

function sendMessage() {
    let msg = document.getElementById("chatInput").value;
    let messages = document.getElementById("messages");
    messages.innerHTML += `<p>User: ${msg}</p>`;
    document.getElementById("chatInput").value = "";
}

function login() {
    let cookie = prompt("Enter Your .ROBLOSECURITY Cookie:");
    if (cookie) {
        alert("Logged In Successfully");
        document.getElementById("balance").innerText = balance;
    }
}

// Money Rain System: Every 30 min, splits 1000 Robux
setInterval(() => {
    let rainAmount = 1000;
    let users = 10; // Example: Change based on active users
    let rainPerUser = Math.floor(rainAmount / users);
    
    if (users > 0) {
        balance += rainPerUser;
        document.getElementById("balance").innerText = balance;
        alert(`💰 Money Rain! You received ${rainPerUser} Robux`);
    }
}, 1800000); // 30 minutes

setInterval(() => {
    let rainAmount = 1000;
    let users = 10; // Active users count (example)
    let rainPerUser = Math.floor(rainAmount / users);

    if (users > 0) {
        balance += rainPerUser;
        document.getElementById("balance").innerText = balance;
        alert(`💰 Money Rain! You received ${rainPerUser} Robux`);
    }
}, 1800000); // 30 minutes

