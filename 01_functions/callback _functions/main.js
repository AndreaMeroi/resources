//Utilizzo di una callback 

function funzioneEsempio(prima, dopo) {

    //callback
    prima && prima()

    setTimeout(
        //callback
        () => {
            console.log('Sono passati 100ms.');

            //callback
            dopo && dopo()

        }, 1000)

}

funzioneEsempio(
    //parametro 'prima'
    () => console.log('Sto per arrivare'),
    //parametro 'dopo'

    () => console.log('Fine!')
);

//Comodità posso modificando il contenuto dei parametri attivare contemporaneamente la stessa funzione con risultati diversi 

funzioneEsempio(
    //parametro 'prima'
    () => console.log('Eccomi!'),
    //parametro 'dopo'

    () => console.log('Sono arrivato!')
)

/* omettendo il secondo parametro si creerebbe un errore di sintassi che si può evitare 
utilizzando nel blocco  

prima && prima() e dopo && dopo()  

oppure inserendo una funzione vuota come valore base di del parametro 

function funzioneEsempio(prima ()=>{}, dopo => {}) {}
*/
funzioneEsempio(
    //parametro 'prima'
    () => console.log('Eccomi!')
    // ometto il secondo parametro 
)

