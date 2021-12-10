// her skriver jeg en funksjon som skal regne ut arealet av en firkant

function firkant(a, b) {
  firkantAreal = a * b;
  return firkantAreal;
}
console.log(firkant(4, 100));

function trekant(h, g) {
  trekantAreal = (h * g) / 2;
  return trekantAreal;
}

sum = trekant(8, 5) + firkant(4, 4);
console.log(sum);

console.log("The sum of the area of the triangle and the square is " + sum +);

console.log(trekant(8, 5));



For å sende tilbake informasjon fra funksjonskallet bruker vi en returerklæring. 
For å lage en returerklæring bruker vi nøkkelordet retur etterfulgt av verdien vi ønsker å returnere. 
Som vi så ovenfor, hvis verdien utelates, returneres udefinert i stedet.

Når en return-setning brukes i en funksjonskropp, 
stoppes utførelsen av funksjonen og koden som følger den vil ikke bli utført. 







