import inquirer from"inquirer"
let  todos = [];
let condition = true;

while(condition){


let addTask = await inquirer.prompt(
    [
        {
            name:"todo",
            type:'input',
            message:"what you want to Add in your Todos"
        },
        {
            name:'addMore',
            type:'confirm',
            message:"Do you want to Add more",
            default:'false',

        
        }
    ]  
);
todos.push(addTask.todo);
condition = addTask.addMore
console.log(todos);
}
    