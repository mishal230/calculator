#! /usr/bin/env node
import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        message: "ENTER FIRST NUMBER", type: "number", name: "firstNumber"
    },
    {
        message: "ENTER SECOND NUMBER", type: "number", name: "secondNumber"
    },
    {
        message: "SELECT THE OPERATOR", type: "list", name: "operator",
        choices: ["ADDITION", "SUBRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);
if (answers.operator === "ADDITION") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "SUBTRACTION") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "MULTIPLICATION") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "DIVISION") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("PLEASE SELECT THE VALID OPERATOR!");
}
