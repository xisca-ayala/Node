const readline = require ('readline');

//cream una interfaz para entrada y salida

const rl = readline.createInterface(process.stdin, process.stdout);


rl.question('Cuál es tu nombre?', (name)=>{
    rl.question('Cuál es tu apellido?', (surName)=>{
         rl.question('Cuál es tu edad?', (age)=>{
            console.log('Tu nombre es:' + name + '\n' 
            + 'Tu apellido es:' + surName + '\n' 
            + 'Tu edad es:' + age);
            rl.close(); 
        });
    });
});

















