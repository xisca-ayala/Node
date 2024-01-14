const fs = require('fs/promises');

let user = {
    name: 'Miquel',
    surname: 'Morey',
    age: 72
}

let userJson = JSON.stringify(user);

async function writeRead(){
    try{
        await fs.writeFile('data.json', userJson)
    const read = await fs.readFile('data.json', 'utf-8')
    console.log(JSON.parse(read))
    console.log('El archivo ha sido creado con éxito')
    
    }catch(err){
        console.error(err)
    }
}

writeRead(); 

