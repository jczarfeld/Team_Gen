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
<div class="row">
    <div class="card">
    <div class="card-body">
    <h1> Name:${answers.github} </h1> 
    <ul class="list-group">
    <li class="list-group-item">ID: ${answers.id}</li>
    <li class="list-group-item">E-mail: ${answers.email}</li>
    <li class="list-group-item">Role: ${answers.role}</li>
    <li class="list-group-item">Github: ${answers.github}</li>
    <li class="list-group-item">School: ${answers.school}</li>
    <li class="list-group-item">Office Number: ${answers.officeNumber}</li>
        </ul>
    </div>
</div>
    </div>
</body>
</html>`;

// questions in the terminal for user input
async function menu()  {
      await  inquirer
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
                if (answers.role === "Engineer") {
                    inquirer
                        .prompt([{
                            type: "input",
                            name: "github",
                            message: "What is your github username?"
                        }]);
                } else if (answers.role === "Manager") {
                    inquirer
                        .prompt([{
                            type: "input",
                            name: "officeNumber",
                            message: "What is your office number?"
                        }]);
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
            })};

        
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
        (async function init(){
            await menu();
          })();