function returnTrue() {
    return true;
}

async function saludo() {
    return await setTimeout(() => console.log('Hola soy una promesa'), 5000);
}

function* generaId() {
    let id = 0;
    while(id<10){
        yield id += 2;
    }
}