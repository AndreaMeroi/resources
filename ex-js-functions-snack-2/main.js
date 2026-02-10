// 🏆 Snack 1 Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function somma(numero_1, numero_2) {
    return numero_1 + numero_2
}
console.log(somma(3, 8));


// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const sum = function (numero_1, numero_2) {
    return numero_1 + numero_2
}
console.log(sum(1, 78));
;

//Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

const summ = (numero_1, numero_2) => numero_1 + numero_2
console.log(summ(4, 7));


//🏆 Snack 2 Crea una arrow function che calcola il quadrato di un numero.
//Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
const quadrato = (numero) => numero ** 2
console.log(quadrato(5));

//🏆 Snack 3 Crea una funzione eseguiOperazione
//Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.
const sottrazione = (num_1, num_2) => num_1 - num_2
const divisione = (num_1, num_2) => num_1 / num_2

const eseguiOperazione = (num_1, num_2, operazione) => operazione(num_1, num_2)

console.log(eseguiOperazione(3, 99, sottrazione));
console.log(eseguiOperazione(90, 67, divisione));

//🏆 Snack 4 Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(ms) {
    return function () {
        setTimeout(function () {
            console.log(('Tempo scaduto!'));

        }, ms)
    }
}

const timer = creaTimer(5000)
timer()

//🏆 Snack 5 Crea una funzione stampaOgniSecondo con setInterval.
/*
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
Nota: Questa funzione creerà un loop infinito. 
Interrompilo manualmente o usa clearInterval() in un altro script.
*/

function stampaOgniSecondo() {
    return function () {
        const intervalId = setInterval(function () {
            console.log('non devo mangiare in classe');

        }, 1000);
        return intervalId

    }
}

const stampaMessaggio = stampaOgniSecondo()
const id = stampaMessaggio()

clearInterval(id) // non l'ho capito (mi ha aiutato l'AI)

//🏆 Snack 6 Crea un contatore automatico con setInterval
/*
Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo 
e restituisce una funzione che avvia un setInterval, 
incrementando un contatore e stampandolo. 
*/

function creaContatoreAutomatico(ms) {
    return function () {

        let count = 0
        const intervalId = setInterval(function () {
            count++
            console.log(count);
        }, ms)
        return intervalId
    }

}

const timeCounter = creaContatoreAutomatico(1000)
const newId = timeCounter()

clearInterval(newId)

//🏆 Snack 7 Crea una funzione che ferma un timer dopo un certo tempo
/*
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. 
Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.*/


function eseguiEferma(msg, timeStart, timeStop) {
    return function () {
        const intervalId = setInterval(function () {
            console.log(msg)
        }, timeStart)
        setTimeout(function () {
            clearInterval(intervalId)
        }, timeStop);

    }
}

const messaggio = eseguiEferma('messaggio prova', 1000, 7000)
messaggio()

//🎯 Snack 8 (Bonus) Crea una funzione che simula un conto alla rovescia
/*
Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il 
conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. 
Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
*/

function contoAllaRovescia(n) {
    return function () {

        let currentN = n;

        const intervalId = setInterval(function () {
            if (currentN >= 0) {
                console.log(currentN--)
            } else {
                console.log('Time is Over!');
                clearInterval(intervalId)
            }
        }, 1000)
    }
}



const reverseCount = contoAllaRovescia(10)
reverseCount()






//🎯 Snack 9 (Bonus) Creare una funzione che esegue una sequenza di operazioni con ritardi
/*
Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.
Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
*/

function sequenzaOperazioni(operazioni, intervalTime) {

    return function () {
        let i = 0;
        const intervalId = setInterval(function () {
            if (i < operazioni.length) {
                operazioni[i]();
                i++;
            } else {
                clearInterval(intervalId)
            }
        }, intervalTime)
    }
}

const operazioni = sequenzaOperazioni([
    () => console.log('Op 1'),
    () => console.log('Op 2'),
    () => console.log('Op 3'),
], 300
)

operazioni()




//🎯 Snack 10 (Bonus) Creare un throttler per limitare l’esecuzione di una funzione
/*
Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.
Restituisce una nuova funzione che, quando chiamata ripetutamente,
esegue l'operazione originale al massimo una volta ogni n millisecondi.
*/

function creaThrottler(funzione, timeLimit) {

    let lastCall = 0

    return function () {
        const now = Date.now();

        if (now - lastCall >= timeLimit) {
            funzione();
            lastCall = now

        } else {
            console.log('Ignorato (chiamato troppo presto)');
        }
    }
}


const throttledLog = creaThrottler(() => console.log('Eseguito!'), 2000);


throttledLog()
setTimeout(throttledLog, 1000)
setTimeout(throttledLog, 1900)

