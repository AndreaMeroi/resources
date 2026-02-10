// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function somma(numero_1, numero_2) {
    return numero_1 + numero_2
}
console.log(somma(3, 8));


// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const sum = function () {
    return 1 + 5
}
console.log(sum());

//Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

const summ = () => 1 + 8
console.log(summ());
