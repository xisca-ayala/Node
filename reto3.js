const readline = require ('readline');

//cream una interfaz para entrada y salida

const rl = readline.createInterface(process.stdin, process.stdout);

let person = {
    name: '',
    surName: '',
    age:0
}; 


rl.question('Cuál es tu nombre?', (name)=>{
    person.name = name; 
    rl.question('Cuál es tu apellido?', (surName)=>{
        person.surName = surName; 
         rl.question('Cuál es tu edad?', (age)=>{
            person.age = age; 
            let personJson = JSON.stringify(person); 
            console.log(personJson);
            rl.close(); 
        });
    });
});















