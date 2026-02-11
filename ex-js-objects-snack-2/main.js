// 🏆 Code Question 1

//Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

/*
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); //  "Double Cheese Burger"
console.log(secondBurger.name); // 'Double Cheese Burger'

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// 1
*/

//🏆 Code Question 2

//Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
/*
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";


console.log(hamburger.ingredients[0]); // "Salad", "Meat", "Bread", "Tomato"
console.log(secondBurger.ingredients[0]); // "Salad", "Meat", "Bread", "Tomato"

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// 3
// */

//🏆 Code Question 3
/*
const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// 9*/

//🏆 Code Question 4
/*
const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};

//Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// SPREAD perchè contiene una funzione che voglio potere copiare 

//Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
// structuredClone() perchè contiene un oggetto complesso come la data */


//🎯 Code Question 5 (Bonus)

//Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};
//nel codice sono presenti 3 objs (hamburger, maker, restaurant)

const newRestaurant = { ...hamburger.maker.restaurant };
// viene copiato l'obj restaurant quindi +1 obj tot 4 objs


newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
// vengono cambiati name e address dell'obj restaurants


const secondBurger = { ...hamburger };
// viene copiato con ...spread, quindi SOLO hamburger + 1 obj tot 5 objs, in questo caso gli objs maker e restaurant sono refereces 


secondBurger.maker.restaurant = newRestaurant;
// in questo caso viene SOSTITUITO restaurant originale con il nuovo restaurant inserento nuovi valori a riga 111 e 112

secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // "Chef Hyur" 

console.log(secondBurger.maker.name); // "Chef Hyur" 

console.log(hamburger.maker.restaurant.name); // "Hyur's II"

console.log(secondBurger.maker.restaurant.name); // "Hyur's II"

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 5

// 🎯 Code Question 6 (Bonus)

//Qual è il metodo migliore per clonare l’oggetto chef, e perché?

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

// SOLUZIONE

const chefCopy = {
    ...chef,
    restaurant: {
        ...chef.restaurant,
        address: {
            ...chef.restaurant.address
        }
    }
}

console.log(chefCopy);

//🎯 Snack  (Bonus)
/* Crea una funzione che permette la copia profonda (deep copy) di un oggetto, 
che copia anche i suoi metodi (proprietà che contengono funzioni). 
Usa l’oggetto di Code Question 6 come test.
⚠️ Serve usare una funzione ricorsiva! (FUNZIONE CHE RICHIAMA SE STESSA).
*/

/* la funzione deve riconoscere se ciò che stà per copiare è un OBJ, 
perciò servirà lo strumento 'typeOf', messo accanto ad un elemento ne identifica 
il tipo */

// esempio di utilizzo di typeOf

console.log(typeof 'andrea'); // risultato: string 

function deepCopy(obj) {
    if (typeof obj !== 'object') {
        return obj
    }
    const copy = {};
    for (const key in obj) {
        const value = obj[key];
        if (typeof value !== 'object') {
            copy[key] = value;
        } else {
            copy[key] = deepCopy(value)
        }
    }
    return copy
}

const chefCopi = deepCopy(chef)
console.log(chefCopi);
