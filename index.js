const Employee = require("./lib/Employee");
const Egnineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
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
function menu() {
        inquirer
            .prompt([{
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
                    type: "list",
                    name: "role",
                    message: "What is your role?",
                    choices: ["Engineer", "Intern", "Manager"]
                },




                //takes user input and prints onto the html layout onto a new file

            ])
            .then(answers => {
                if (answers.role = "Engineer") {
                    inquirer
                        .prompt([{
                            type: "input",
                            name: "github",
                            message: "What is your github username?"
                        }])
                } else if (answers.role = "Manager") {
                    inquirer
                        .prompt([{
                            type: "input",
                            name: "officeNumber",
                            message: "What is your office number?"
                        }])
                } else {
                    inquirer
                        .prompt([{
                            type: "input",
                            name: "school",
                            message: "What is your School's name?"
                        }])
                }
            })
            .then((answers) => {
                const htmlPageContent = generateHTML(answers);

                fs.writeFile('dist/index.html', htmlPageContent, (err) =>
                    err ? console.log(err) : console.log('Successfully created index.html!')
                );
            });


        ////////////////////////////////////////
        //     const inquirer = require("inquirer");

        // (async () => {
        //   const ans1 = await inquirer.prompt([
        //     {
        //       type: "input",
        //       name: "name",
        //       message: "What is your name?",
        //       default: "Jake",
        //     },
        //   ]);
        //   const ans2 = await inquirer.prompt([
        //     {
        //       type: "confirm",
        //       name: "summary",
        //       message: "Is this information correct? Your name is:" + ans1.name,
        //     },
        //   ]);
        //   return { ...ans1, ...ans2 };
        // })()
        //   .then(console.log)
        //   .catch(console.error);
        // }
        ///////////////////////////////////////////////////
        //require classes 
        //require packages

        //use fs to create html and use bootstrap for the styling



        //create seperate functions for each class creation--call function that asks questions













        menu();