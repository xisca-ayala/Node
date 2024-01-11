const fs = require('fs/promises');

let user = {
    name: 'Miquel',
    surname: 'Morey',
    age: 72
}

let userJson = JSON.stringify(user);

fs.writeFile('data.json', userJson)
.then(()=> {
    return fs.readFile('data.json', 'utf-8')
})
.then(data => {
    console.log(JSON.parse(data));
    console.log('El archivo ha sido creado con éxito');
})
.catch(err => {
    console.error (err); 
}); 

