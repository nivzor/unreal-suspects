import './style.scss';

document.querySelector('#app').innerHTML = `
  <div>    
    <h1>Unreal Faces!</h1>
    <div class="wrapper">      
      <h3 class="title loading"></h3>    
      <div class="map hide"></div>
    </div>    
  </div>
`;
const loadingTime = 1250;
const mapLength = 12;
let counter = mapLength;
for (let i = 0; i < mapLength; i++) {
  setTimeout(() => {
    document.querySelector(
      '.map'
    ).innerHTML += `<div class="face-card"><img src="https://thispersondoesnotexist.com/image?${Math.random(
      i
    )}" /></div>`;
    counter--;
    if (counter === 0) {
      initGame();
    }
  }, i * loadingTime);
}

const initGame = () => {
  document.querySelector('.hide').className = 'map';
  document.querySelector('.loading').className = 'title';
  const cards = document.querySelectorAll('.face-card');  
   for (let i = 0; i < cards.length; i++) {
     ['click','touchend'].forEach(e => cards[i].addEventListener(e,function() {       
       cards[i].classList.toggle("removed");
     }))    
 }  
};



