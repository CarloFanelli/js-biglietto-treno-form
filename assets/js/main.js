/* 
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
 */



//Il numero di chilometri da percorrere

const kmDOM =document.getElementById('km');

console.log(kmDOM);

// età del passeggiero

const ageUserDOM = document.getElementById('ageUser');

let tot = kmDOM + ageUserDOM;

console.log(kmDOM,ageUserDOM);

console.log(tot);