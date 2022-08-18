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
      document.querySelector('.hide').className = 'map';
      document.querySelector('.loading').className = 'title';
    }    
  }, i * 1150);
}

