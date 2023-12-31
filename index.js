const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const promptTeam = () => {
    console.log(`
    ======================
    Team Profile Generator
    ======================

    In order to create a webpage showcasing your team, please answer the following prompts:
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your team's name? If no name, leave blank.",
        }
    ]);
};

const promptTeamLead = () => {
    console.log(`
    ============
    Team Manager
    ============`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the team manager?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return "Please enter the team manager's name.";
                }
            } 
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee ID for the team manager?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return "Please enter the team manager's ID.";
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the email address for the team manager?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return "Please enter the team manager's email address.";
                }
            } 
        },
        {
            type: 'number',
            name: 'office',
            message: "What is the office number for the team manager?",
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    return "Please enter a number for the team manager office.";
                }
            } 
        }
    ]);
};

const promptEmployee = portfolioData => {
    if (!portfolioData.team) {
        portfolioData.team = [];
    }

    console.log(`
    ===============
    Other Employees
    ===============
    
    If you have other employees in your team, please select one of the options below. Otherwise, select finish to create the team portfolio page.`);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'To enter information for another employee, select from the following positions:',
            choices: ['Engineer', 'Intern', new inquirer.Separator(), 'Finish Portfolio'],
            default: 'Finish Portfolio'
        }
    ])
    .then(employeeAnswer => {
        if (employeeAnswer.employee === 'Engineer') {
            return promptEngineer(employeeAnswer);
        } else if (employeeAnswer.employee === 'Intern') {
            return promptIntern(employeeAnswer);
        } else {
            return employeeAnswer;
        }
    });
};

const promptEngineer = portfolioData => {
    console.log(`
    ========
    Engineer
    ========
    
    Answer the following prompts to enter information about this team Engineer:`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the engineer?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return "Please enter the engineer's name.";
                }
            } 
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee ID for the engineer?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return "Please enter the engineer's ID.";
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the email address for the engineer?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return "Please enter the engineer's email address.";
                }
            } 
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the GitHub username for the engineer?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return "Please enter the engineer's GitHub username.";
                }
            } 
        }
    ])
    .then(engineerAnswers => {
        portfolioData.team.push(engineerAnswers);
        return promptEmployee();
    });
};

const promptIntern = portfolioData => {
    console.log(`
    ========
    Intern
    ========
    
    Answer the following prompts to enter information about this team intern:`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the intern?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return "Please enter the intern's name.";
                }
            } 
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee ID for the intern?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return "Please enter the intern's ID.";
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the email address for the intern?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return "Please enter the intern's email address.";
                }
            } 
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the name of the school this intern is currently attending?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return "Please enter the name of the school this intern is attending. If no school, type 'None'.";
                }
            } 
        }
    ])
    .then(internAnswers => {
        portfolioData.team.push(internAnswers);
        return promptEmployee();
    });
};

promptTeam()
    .then(promptTeamLead)
    .then(promptEmployee)
    .then(portfolioData => {
        return generatePage(portfolioData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
