const Employee = require("./Employee");
const Egnineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");
const fs = require("fs");

const inquirer = require("inquirer");




const generateHTML = (answers) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="./style.css">
 

  <title>My New Read Me</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">The title of my project is ${answers.title}.</p>
    <h3>Here is more information</h3>
    <ul class="list-group">
      <li class="list-group-item">Description: ${answers.description}</li>
      <li class="list-group-item">Installation instructions: ${answers.instructions}</li>
      <li class="list-group-item">Usage Information: ${answers.information}</li>
      <li class="list-group-item">Contribution guidelines: ${answers.guidelines}</li>
      <li class="list-group-item">Test instructions: ${answers.test}</li>
    </ul>
    <h3>I am still alive! Contact Me!</h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

// questions in the terminal for user input

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
          },

        {
            type: "input",
            name: "id",
            message: "What is your id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your e-mail address?"
        },
        {
            type: "input",
            name: "title",
            message: "What is your project Title?"
        },
        {
            type: "input",
            name: "description",
            message: "Please describe your project"
        },
        {
            type: "input",
            name: "instructions",
            message: "Please list specific installation instructions"
        },
        {
            type: "input",
            name: "information",
            message: "Please list specific usage information"
        },
        {
            type: "input",
            name: "guidelines",
            message: "How could one contribute to your project?"
        },
        {
            type: "input",
            name: "test",
            message: "Please list specific test instructions"
        },


        //takes user input and prints onto the html layout onto a new file

    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });

//require classes 
//require packages

//use fs to create html and use bootstrap for the styling


menu = () => {
    //create seperate functions for each class creation--call function that asks questions
}












menu();