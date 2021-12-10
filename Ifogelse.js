
// Her forklarer jeg en if-statment//
let sale = true;

sale = false;

if (sale) {
  console.log('Time to buy!');
}

Nøkkelordet if etterfulgt av et sett med parenteser () som etterfølges av en kodeblokk, eller blokksetning,
 indikert med et sett med krøllete klammeparenteser {}.
Inne i parentesen (), er det gitt en betingelse som evalueres til sann eller usann.
Hvis betingelsen evalueres til sann, kjøres eller kjøres koden i de krøllede klammerparentesene {}.
Hvis tilstanden evalueres til usann, vil ikke blokkeringen utføres.







// Her forklarer jeg Else-statment//
if (false) {
    console.log('The code in this block will not run.');
  } else {
    console.log('But the code in this block will!');
  }

Hvis vi ønsket å legge til en standardoppførsel til if-setningen, 
kan vi legge til en else-setning for å kjøre en kodeblokk når tilstanden evalueres til usann. 











// Her forklarer jeg Sammenligningsoperatører//

Her er en liste over noen nyttige sammenligningsoperatorer og deres syntaks:

let hungerLevel = 8;
if (hungerLevel > 7) {
  console.log("Time to eat!")
} else {
 console.log("We can eat later!")
}



Mindre enn: <
Større enn: >
Mindre enn eller lik: <=
Større enn eller lik: >=
Er lik: ===
Er ikke lik: !==







// Her forklarer jeg Logical operatører//

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

Vi kan bruke logiske operatorer for å legge til mer sofistikert logikk til betingelsene våre. 
Det er tre logiske operatorer:
og-operatøren (&&)
operatøren eller (||)
ikke-operatoren, ellers kjent som bang-operatoren (!)









//Her forklarer jeg Tærnere operator//
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");








//Her forklarer jeg Else IF //

let stopLight = 'yellow';
 
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

Vi kan legge til flere betingelser til vår if...else med en else if-setning. 
else if-uttalelsen tillater mer enn to mulige utfall. 
Du kan legge til så mange andre utsagn du vil, for å lage mer komplekse betingelser!

else if-setningen kommer alltid etter if-setningen og før else-setningen.
 else if-uttalelsen tar også en betingelse. 






 




 //Her forklarer jeg Switch Setning//

 let athleteFinalPosition = 'first place';

 switch(athleteFinalPosition){
   case 'first place':
     console.log('You get the gold medal!');
     break;
   case 'second place':
     console.log('You get the silver medal!');
     break;
   case 'third place':
     console.log('You get the bronze medal!');
     break;
   default:
     console.log('No medal awarded.');
     break;
 }


 På slutten av hver switch-setning er det en standardsetning.
  Hvis ingen av tilfellene er sanne, vil koden i standardsetningen kjøre.


  