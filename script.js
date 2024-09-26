const startBtn =  document.querySelector('.start-btn button');
const infoBox = document.querySelector('.info-box');
const exitBtn = document.querySelector('.buttons .quit-btn');
const continueBtn = infoBox.querySelector('.buttons .restart-btn');


startBtn.onclick = ()=>{
    infoBox.classList.add('activeInfo');
}