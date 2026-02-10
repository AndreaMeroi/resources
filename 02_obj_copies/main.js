// PRIMITIVE TYPE
/*in questo caso assegnando il valore di una variabile (numero_1) ad una 
nuova variabile (numero_2) viene creata una copia.
Se cambio il valore di una delle due variabili, l'altra manterrà comunque il suo valore 
originale
*/

//es1
let numero_1 = 10
let numero_2 = numero_1

numero_2 = 20

console.log(numero_1);
console.log(numero_2);

//es 2

let stringa_1 = 'ciao!'
let stringa_2 = stringa_1

stringa_2 = 'Andrea'

console.log(stringa_1);
console.log(stringa_2);


//REFERENCE TYPE
/* in questo caso salvando la variabile albero in copiaAlbero
non salvo una COPIA dell'oggetto, entrambe le variabili fanno SOLO RIFERIMENTO 
all'oggetto, perciò se cambio il vcontenuto di una delle due, l'oggetto cambierà in entrambe
*/

const albero = { tipo: 'melo', quantitaDiFrutti: 14 };
const copiaAlbero = albero;

copiaAlbero.tipo = 'pesco'

console.log(albero)
console.log(copiaAlbero);

// SHALLOW COPY (copia superficiale) come fare COPIE DI OGGETTI O ARRAYS )
/* utilizzando SPREAD (...) viene in questo caso copiato SOLO il primo livello 
di proprietà dell'oggetto, mentre pe proprietà annidate vengono copiate SOLO come RIFERIMENTO (perciò se modificassimo delle proprietà annidate
verrebbe modificato anche l'oggetto originale )
*/

// ES:
const persona_1 = {
    nome: 'Andrea',  //primo livello 
    età: 40,         //primo livello 
    smartphone: { marca: 'samsung' } //oggetto annidato salvato come reference
};


const persona_2 = { ...persona_1 } //copia dei dati di primo livello 

persona_2.nome = 'Mario' // posso cambiare l'oggetto copiato senza modificare l'originale

console.log(persona_1.nome);
console.log(persona_2.nome);

persona_2.smartphone.marca = 'iPhone' // cambiando il valore della propietà dell'oggetto annidato (salvato come reference) modifico l'oggetto originale 


console.log((persona_1.smartphone.marca)); // oggetto originale modificato


//es con albero:

const tree = {
    tipo: 'melo',
    quantitaDiFrutti: 14,
    proprietario: {
        nome: 'mario',
        età: 35
    }
};

const secondTree = {
    ...tree,
    proprietario: { ...tree.proprietario } /* per modificare un oggetto annidato in un oggetto copiato 
    senza modificare l'oggetto originale devo utilizzare la shallow copy 
    annidandola anch'essa => sistema più semplice che permette di fare una 
    COPIA TOTALE: DEEP COPY
*/
};

secondTree.tipo = 'pesco'
secondTree.proprietario.nome = 'andrea'

console.log('tree', tree);
console.log('secondTree', secondTree);

//deep copy, COME UTILIZZARLA 

const person_1 = {
    nome: 'Andrea',  //primo livello 
    età: 40,         //primo livello 
    smartphone: { marca: 'samsung' } //oggetto annidato salvato come reference
};

const person_2 = JSON.parse(JSON.stringify(person_1)) /*utilizzo JSON.parse(JSON.stringify()) per
eseguire la deep copy dell'intero oggetto.
(JSON.stringify(Oggetto)) -> trasforma l'oggetto tra parentesi in una stringa
JSON.parse -> trasforma la stringa appena creata in un nuovo OGGETTO
*/

person_2.smartphone.marca = 'iPhone'

console.log(person_1.smartphone.marca);

// JSON.parse(JSON.stringify()) NON COPIA Funzioni, Simboli, oggetti complessi (date, promise), in questi casi userò structureClone()

// ESEMPIO JSON.parse(JSON.stringify()) vs STRUCTURECLONE()

const pers_1 = {
    nome: 'Andrea',
    dataDinascita: new Date(1985, 3, 21)
};

const pers_2 = JSON.parse(JSON.stringify(pers_1))

console.log(pers_1.dataDinascita); // stampato come oggetto
console.log(pers_2.dataDinascita); // stampato come stringa


const per_1 = {
    nome: 'Andrea',
    dataDinascita: new Date(1985, 3, 21)
}

const per_2 = structuredClone(per_1)

console.log(per_1.dataDinascita); // stampato come oggetto
console.log(per_2.dataDinascita); // stampato come oggetto

// ESEMPIO RECAP

const alber = {
    tipo: 'melo',
    quantitaDiFrutti: 14,
    età: 34,
    proprietario: {
        nome: 'mario',
        età: 35,
        smartphone: {
            marca: 'samsung',
            dataDiProduzione: new Date(2024, 5, 13)
        }
    }
};

const alberCopia = structuredClone(alber)
alberCopia.proprietario.smartphone.marca = 'Iphone'

console.log('alber', alber);

console.log('alberCopia', alberCopia);
