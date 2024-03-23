#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 6 + 1);
let answer = await inquirer.prompt([
    {
        message: "Please guess a number between 1-6",
        type: "number",
        name: "userGuessedNumber",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You Guessed The Right Number");
}
else {
    console.log("You Guessed Wrong Number");
}
