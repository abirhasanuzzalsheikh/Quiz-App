const startBtn = document.querySelector('.start-btn button');
const infoBox = document.querySelector('.info-box');
const continueBtn = infoBox.querySelector('.buttons .restart-btn');
const exitBtn = document.querySelector('.info-box .quit-btn'); // Change made here

startBtn.onclick = () => {
    infoBox.classList.add('activeInfo');
} 
exitBtn.onclick = ()=>{
    infoBox.classList.remove('activeInfo');
}