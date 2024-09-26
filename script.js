import { questions } from "./questions.js";

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
    showQuestion(queNum);
    queCounter(1)
}

let queNum = 0;
let queCount = 1;

let nextBtn = document.querySelector('.next-que');

nextBtn.onclick = () =>{
    if (queNum < questions.length - 1){
        queNum++;
        queCount++;
        showQuestion(queNum);
        queCounter(queCount)
    }else{
        console.log('complete que')
    }
}

function showQuestion(index){
    let queText = document.querySelector('.que-text');
    let optionList = document.querySelector('.options-list');
    let queTag = ` <span>${questions[index].number}.${questions[index].question}</span>`;
    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>`
                    + `<div class="option"><span>${questions[index].options[1]}</span></div>`
                    +`<div class="option"><span>${questions[index].options[2]}</span></div>`
                    + `<div class="option"><span>${questions[index].options[3]}</span></div>`;
    queText.innerHTML = queTag;
    optionList.innerHTML = optionTag;
}

function queCounter(index){
    const bottomQueCounter = document.querySelector('.total-que');
    let totalQueTag = ` <span><p>${index}</p> of <p>${questions.length}</p> Question </span>`;
    bottomQueCounter.innerHTML = totalQueTag;
}