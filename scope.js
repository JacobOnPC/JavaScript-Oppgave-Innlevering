


// Her forklarer jeg Global Scope //

const hverdag = 'Mandag';
const helgdag = 'Lørdag';
const stjerner = 'Stjerner';

const hverDagsLivet = () => {
	return 'Night Sky: ' + hverdag + ', ' + helgdag + ', and ' + stjerner;
};

console.log(hverDagsLivet());





// Her forklarer jeg Block scope //
const favoriteFood = () => {
    const favoriteFood = 'Pizza';
    console.log(favoriteFood);
  };
  
  favoriteFood();

  console.log







  // Her forklarer jeg Scope Pollution //
  
  const logSkyColor = () => {
    const dusk = true;
    let color = 'blue'; 
    if (dusk) {
      let color = 'pink';
      console.log(color); // pink
    }
    console.log(color); // blue 
  };
   
  console.log(color); // ReferenceError
  




  const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if (region === 'The Arctic'){
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);
    }
    
    console.log(lightWaves);
  };
  
  logVisibleLightWaves();
  
  
  
  
  
  
  
  Tett omfang av variablene dine vil forbedre koden betraktelig på flere måter:

Det vil gjøre koden din mer lesbar siden blokkene vil organisere koden din i diskrete seksjoner.
Det gjør koden din mer forståelig siden den tydeliggjør hvilke variabler som er knyttet til ulike deler av programmet i stedet for å måtte holde styr på dem linje etter linje!
Det er lettere å vedlikeholde koden din, siden koden din vil være modulær.
Det vil lagre minne i koden din fordi den vil slutte å eksistere etter at blokken er ferdig å kjøre.
  