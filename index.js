function listaPropObj() {
    return console.log(monstro.sabor, monstro.preco, monstro.ml);
}

function listaMinhaLista() {
    return console.log(lista);

}


class Monster {
    constructor(sabor, preco, ml) {
        this.sabor = sabor;
        this.preco = preco;
        this.ml = ml;
    }
}

const monstro = new Monster('Tradicional', 9.50, 473)

let lista = [monstro.sabor, monstro.preco, monstro.ml]

listaMinhaLista();
listaPropObj();
