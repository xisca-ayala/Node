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


pregunta('Cuál es tu nombre?')
    .then((name) => {
        user.name = name; 
        return pregunta('Cuál es tu apellido?')
    })
    .then((surName)=> { 
        user.surName = surName;
        return pregunta('Cuál es tu edad?')
    })
    .then((age)=>{
        user.age = age;
        let userJson = JSON.stringify(user);
        console.log(userJson);
        return fs.writeFile('data.json', userJson)
    })
    .catch(err => {
        console.error(err);
    })




