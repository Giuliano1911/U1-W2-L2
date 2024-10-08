/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const n1 = 2
const n2 = 10

if (n1 < n2) {
  console.log('il secondo numero è più grande')
} else if (n1 > n2) {
  console.log('il primo numero è più grande')
} else {
  console.log('i numeri sono uguali')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

if (n1 !== 5) {
  console.log('not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

if (n2 % 5 === 0) {
  console.log('divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

if (n1 === 8 || n2 === 8 || n1 + n2 === 8 || n1 - n2 === 8 || n2 - n1 === 8) {
  console.log('condizione verificata')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 70
let total

if (totalShoppingCart >= 50) {
  total = totalShoppingCart
} else {
  total = totalShoppingCart + 10
}
console.log('Il totale è di €' + total)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let DiscountedTotal = (totalShoppingCart * 80) / 100
if (DiscountedTotal >= 50) {
  total = DiscountedTotal
} else {
  total = DiscountedTotal + 10
}
console.log('Il totale è di €' + total)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const n3 = 2
const n4 = 9
const n5 = 7

if (n3 < n4 && n4 < n5) {
  console.log(n5, n4, n3)
} else if (n3 < n5 && n5 < n4) {
  console.log(n4, n5, n3)
} else if (n4 < n3 && n3 < n5) {
  console.log(n5, n3, n4)
} else if (n4 < n5 && n5 < n3) {
  console.log(n3, n5, n4)
} else if (n5 < n4 && n4 < n3) {
  console.log(n3, n4, n5)
} else {
  console.log(n4, n3, n5)
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

if (typeof n3 === 'number') {
  console.log(n3, ' è un numero')
} else {
  console.log(n3, ' non è un numero')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

if (n3 % 2 === 0) {
  console.log('numero pari')
} else {
  console.log('numero dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 5) {
  console.log('Meno di 5')
} else if (val < 10) {
  console.log('Meno di 10')
} else {
  console.log('Uguale a 10 o maggiore')
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2]
console.log(me)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const numbers = []

/* METODO BELLO
for (let i = 0; i < 10; i++) {
  numbers[i] = i + 1
}
console.log(numbers)
*/

/* METODO BRUTTO */
numbers[0] = 1
numbers[1] = 2
numbers[2] = 3
numbers[3] = 4
numbers[4] = 5
numbers[5] = 6
numbers[6] = 7
numbers[7] = 8
numbers[8] = 9
numbers[9] = 10

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numbers[9] = 100
console.log(numbers)
