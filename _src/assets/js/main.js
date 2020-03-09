'use strict';
//data

const face = document.querySelector('.js-face');
const selectFace = document.querySelector('.js-select');
const container = document.querySelector('.js-container');
const button = document.querySelector('.js-button');

//Función manejadora de eventos

function handleButtonUpdate(){
  selectFaceValue();
  changeBackground();
}

//listener button

button.addEventListener('click', handleButtonUpdate);

// Seleccionar carita
function selectFaceValue(){
  face.innerHTML = selectFace.value;
}

//Generar número aleatorio
function getRandomNumber(){
  return Math.floor(Math.random()*100);
}


//Intercambiar color de fondo
function changeBackground(){
  const randomNumber = getRandomNumber();
  if (randomNumber % 2  === 0) {
    container.classList.add('correct-yellow-color');
  } else {
    container.classList.remove('correct-yellow-color');
  }
}

