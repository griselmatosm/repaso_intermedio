"use strict";const face=document.querySelector(".js-face"),selectFace=document.querySelector(".js-select"),container=document.querySelector(".js-container"),button=document.querySelector(".js-button");function handleButtonUpdate(){selectFaceValue(),changeBackground()}function selectFaceValue(){face.innerHTML=selectFace.value}function getRandomNumber(){return Math.floor(100*Math.random())}function changeBackground(){getRandomNumber()%2==0?container.classList.add("correct-yellow-color"):container.classList.remove("correct-yellow-color")}button.addEventListener("click",handleButtonUpdate);