import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your name:"
    }
]);
const quiz = await inquirer.prompt([
    {
        name: "question1",
        type: "list",
        message: " Q1. TypeScript is a superset of?",
        choices: ["Node.js", "Next.js", "JavaScript", "Python"]
    },
    {
        name: "question2",
        type: "list",
        message: "Q2. Which is the right command for tsconfig.json file?",
        choices: ["npm init", "npm i install", "tsc --int", "tsc init"]
    },
    {
        name: "question3",
        type: "list",
        message: "Q3. Which function has a shorter syntax?",
        choices: ["Named function", "Arrow function", "Annonymous function", "Typeof function"]
    },
    {
        name: "question4",
        type: "list",
        message: "Q4. What is the correct way to define an object?",
        choices: ["{}", "()", "[]", "//"]
    },
    {
        name: "question5",
        type: "list",
        message: "Q5. Which is the correct method to add element at the end of an array?",
        choices: ["pop", "push", "shift", "unshift"]
    }
]);
let score = 0;
switch (quiz.question1) {
    case "JavaScript":
        console.log("1. Correct");
        ++score;
        break;
    default:
        console.log("1. Incorrect");
}
switch (quiz.question2) {
    case "tsc --int":
        console.log("2. Correct");
        ++score;
        break;
    default:
        console.log("2. Incorrect");
}
switch (quiz.question3) {
    case "Arrow function":
        console.log("3. Correct");
        ++score;
        break;
    default:
        console.log("3. Incorrect");
}
switch (quiz.question4) {
    case "{}":
        console.log("4. Correct");
        ++score;
        break;
    default:
        console.log("4. Incorrect");
}
switch (quiz.question5) {
    case "push":
        console.log("5. Correct");
        ++score;
        break;
    default:
        console.log("5. Incorrect");
}
console.log(`Score: ${score}`);
