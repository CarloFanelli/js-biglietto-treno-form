/* 
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
 */



//Il numero di chilometri da percorrere

const kmDOM =Number(prompt('km'));

console.log(kmDOM);

// età del passeggiero

const ageUserDOM = Number(prompt('ageUser'));

console.log(kmDOM,ageUserDOM);

let temporaryPrice = kmDOM * 0.21;

//calcolo il prezzo in base all'età

let priceAge;

if ( ageUserDOM < 18 ) {
    
    priceAge = temporaryPrice * 0.8;

} else if( ageUserDOM >= 65 ) {

    priceAge = temporaryPrice * 0.6;
    
} else{
    priceAge = temporaryPrice;
}

//stampo il prezzo
const resultDOM = document.getElementById('priceResult');

resultDOM.innerHTML = 'il prezzo è ' + priceAge.toFixed(2) + ' €';
