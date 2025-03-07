const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let userBalance = {}; // Store balances per user

app.post("/deposit", (req, res) => {
    const { cookie, amount } = req.body;

    if (!cookie || !amount) {
        return res.status(400).json({ message: "Invalid Request" });
    }

    if (!userBalance[cookie]) {
        userBalance[cookie] = 5; // Default balance
    }

    userBalance[cookie] += amount;
    res.json({ message: "Deposit Successful", robux: userBalance[cookie] });
});

app.listen(3000, () => console.log("Server Running on Port 3000"));

