// GENERATORI DI FUNZIONI


//esempi 


// createGreater (generatore di funzioni che salutano qualcuno)

function createGreater(greeting) {
    return function (name) {
        console.log(`${greeting} ${name}!`);

    }
}

const sayHello = createGreater('Hello');
sayHello('Andrea')

const sayGoodbye = createGreater('Goodbye')
sayGoodbye('Andrea')

//createMultiplier (genera una funzione che moltilica numeri)

function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    }
}

const double = createMultiplier(2)
const triple = createMultiplier(3)

console.log(double(5));
console.log(triple(5));

// CLOSURE

//esempio 

function creaContatore() {

    //variabili
}