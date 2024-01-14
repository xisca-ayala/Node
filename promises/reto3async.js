const { log } = require('console');
const fs = require('fs/promises');
const readline = require ('readline');

function pregunta (pregunta){
    const question = new Promise ((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin, 
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) =>{
                resolve(respuesta);
                rl.close(); 
            });
    });
    return question; 
}

let user = {
    name: '',
    surName: '',
    age:0
}; 


async function questions(){
    try{
        user.name = await pregunta('Cuál es tu nombre?')
        user.surName = await pregunta('Cuál es tu apellido?')
        user.age = await pregunta('Cuál es tu edad?')
        let userJson = JSON.stringify(user);
        await fs.writeFile('data.json', userJson)
        console.log(userJson);

    }catch(err){
        console.error(err);
    }
}

questions(); 



