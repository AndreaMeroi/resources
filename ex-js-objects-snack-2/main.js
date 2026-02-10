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
// 1*/

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
// 2*/

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

const newRestaurant = { ...hamburger.maker.restaurant };

newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = { ...hamburger };
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // 

console.log(secondBurger.maker.name); // 

console.log(hamburger.maker.restaurant.name); // 

console.log(secondBurger.maker.restaurant.name); // 

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?