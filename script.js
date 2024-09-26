const startBtn = document.querySelector('.start-btn button');
const infoBox = document.querySelector('.info-box');
const continueBtn = infoBox.querySelector('.buttons .restart-btn');
const exitBtn = document.querySelector('.info-box .quit-btn'); // Change made here
const quizBox = document.querySelector('.quiz-box');


startBtn.onclick = () => {
    infoBox.classList.add('activeInfo');
} 
exitBtn.onclick = ()=>{
    infoBox.classList.remove('activeInfo');
}
continueBtn.onclick = ()=>{
    infoBox.classList.remove('activeInfo');
    quizBox.classList.add('activeQuiz');
}