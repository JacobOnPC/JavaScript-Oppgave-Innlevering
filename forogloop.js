

// Forklarer jeg for loops //
for (let counter = 5; counter < 11 ; counter++) {
    console.log(counter);
  } 

  En nestet for-løkke er en løkke inne i en annen løkke
mens løkker gir mulighet for ulike typer stoppforhold

  // Her forklarer jeg Whole loops //
  const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}

mens løkker tillater forskjellige typer stopptilstand

  