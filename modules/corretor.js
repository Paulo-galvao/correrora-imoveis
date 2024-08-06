const prompt = require('prompt-sync')();
const corretora = require('./corretora.js');

const db = [];

let lastId = 0;

function model(id = ++lastId) {
    const nome = prompt("Digite o nome: ");

    let idCorretora = 0;
    if(corretora.listar()) {
        idCorretora = parseInt(prompt("Digite o Id da corretora: "));
    }

    if(nome != "" && corretora.mostrar(idCorretora)) {
        return {
            id,
            nome,
            idCorretora
        };
    } 

    console.log("Dados inválidos!");
}

function criar() {
    const novo = model();
    if(novo) {
        db.push(novo);
        console.log("Registro criado com sucesso!");
    }
}

function listar() {
    if(db.length == 0) {
        console.log("Nenhum registro encontrado");
        return false;
    }

    db.forEach( el => console.log(el) );
    return true;
}

function atualizar() {
    if(listar() ) {
        const id = +prompt("Digite o Id: ");
        const indice = db.findIndex( el => el.id == id);

        if(indice != -1) {
            const novo = model(id);
            if(novo) {
                db[indice] = novo;
                console.log("Atualizado com sucesso!");
            }
        } else {
            console.log("Id não encontrado");
        }
    }      
}

function remover() {
    if(listar()) {
        const id = +prompt("Digite o Id: ");
        const indice = db.findIndex( el => el.id == id);

        if(indice != -1) {
            db.splice(indice, 1);
            console.log("Removido com sucesso!");

        } else {
            console.log("Id não encontrado");
        }
        
    }
}

module.exports = {
    criar,
    listar,
    atualizar,
    remover,
    
};