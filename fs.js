const { error } = require('console');
const fs = require ('fs');

let user = {
    name: 'Miquel',
    surname: 'Morey',
    age: 72
}

let userJson = JSON.stringify(user);



fs.writeFile('data.json', userJson, (err)=> {
    if(err){
        console.error(err);
    }else{
        console.log ('El arxivo ha sido escrito con éxito')
    }
});

fs.readFile('data.json', 'utf-8', (err,data)=> {
    if(err){
        console.error(err);
    }
    console.log(data);
})

