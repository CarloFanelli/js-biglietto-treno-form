/* 
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
 */



//Il numero di chilometri da percorrere

// età del passeggiero

//calcolo il prezzo in base all'età

let priceAge;

document.getElementById('priceButton').addEventListener('click', function (e) {

   // console.log('ciao'); - debug

    const kmDOM = document.getElementById('km').valueAsNumber;

    console.log(kmDOM);

    const ageUserDOM = document.getElementById('ageUser').value;

    console.log(ageUserDOM);

    const kmPrice = 0.21;

    let temporaryPrice = kmDOM * kmPrice;

    if (ageUserDOM == 'minorenne') {

        priceAge = temporaryPrice * 0.8;

    } else if (ageUserDOM == 'over65') {

        priceAge = temporaryPrice * 0.6;

    } else {
        priceAge = temporaryPrice;
    }

    //stampo il prezzo e i dettagli
    const resultDOM = document.getElementById('priceResult');

    const nomePasseggieroDOM = document.getElementById('userName').value;

    console.log('nomePasseggieroDOM');

    resultDOM.innerHTML = 'il prezzo è ' + priceAge.toFixed(2) + ' €';
});