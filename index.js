const prompt = require("prompt-sync")();
const corretora = require('./modules/corretora.js');
const corretor = require('./modules/corretor.js');

console.log("Gerenciamento de corretora de imóveis");

while(true) {
    let logged;
    console.log(`O que deseja gerenciar?
        1. Corretora;
        2. Corretor
        0. Sair.
    `);

    const opcaoEntidade = prompt();

    switch(opcaoEntidade) {
        case "1":
        logged = true;
        while(logged) {
            console.log(`Gerenciamento de corretora:
                1. Criar;
                2. Listar;
                3. Atualizar;
                4. Remover;
                0. Sair
            `);

            const opcaoServico = prompt();

            switch(opcaoServico) {
                case "1":
                    corretora.criar()
                    break;
                case "2":
                    corretora.listar()
                    break;
                case "3":
                    corretora.atualizar()
                    break;
                case "4":
                    corretora.remover()
                    break;
                case "0":
                    logged = false;
                    break;
                default:
                    console.log("Não encontrado");
                    break;
            }

        }
        break;
        case "2":
            logged = true;
            while(logged) {
                console.log(`Gerenciamento de corretor:
                    1. Criar;
                    2. Listar;
                    3. Atualizar;
                    4. Remover;
                    0. Sair
                `);
    
                const opcaoServico = prompt();
    
                switch(opcaoServico) {
                    case "1":
                        corretor.criar()
                        break;
                    case "2":
                        corretor.listar()
                        break;
                    case "3":
                        corretor.atualizar()
                        break;
                    case "4":
                        corretor.remover()
                        break;
                    case "0":
                        logged = false;
                        break;
                    default:
                        console.log("Não encontrado");
                        break;
                }
    
            }
        break;
        case "0":
            return;

        default:
            break;
    }
}