import chalk from 'chalk';

export default function Log(method, endpoint){
    if(method === "GET"){
        console.log(`${chalk.magenta(method)} ${endpoint} `);

    } else if(method === "POST"){
        console.log(`${chalk.green(method)} ${endpoint}`);
    }
}