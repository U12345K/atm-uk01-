#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000; //dollare
let mypin = 2025;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "acountType",
            message: "select your account type",
            type: "list",
            choices: ["current acount", "saving account"]
        },
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (myBalance >= amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log("your remaining balance is:" + myBalance);
        }
        else if (amountAns.amount > myBalance)
            console.log("insuficient amount");
    }
    if (operationAns.operation === "check balance") {
        console.log(operationAns = myBalance);
    }
}
else {
    console.log("incorrect pin code");
}
