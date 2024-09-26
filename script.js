import { questions } from "./questions.js";

const startBtn = document.querySelector('.start-btn button');
const infoBox = document.querySelector('.info-box');
const continueBtn = infoBox.querySelector('.buttons .restart-btn');
const exitBtn = document.querySelector('.info-box .quit-btn'); // Change made here
const quizBox = document.querySelector('.quiz-box');
let optionList = document.querySelector('.options-list');
const timeCount = document.querySelector('.timer-sec');
const timeLine = document.querySelector('.time-line');


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
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}

let queNum = 0;
let queCount = 1;
let counter;
let timeValue = 15;
let widthValue = 0;
let counterLine;

let nextBtn = document.querySelector('.next-que');

nextBtn.onclick = () =>{
    if (queNum < questions.length - 1){
        queNum++;
        queCount++;
        showQuestion(queNum);
        queCounter(queCount)
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        nextBtn.style.display = 'none';
    }else{
        console.log('complete que')
    }
}

function showQuestion(index){
    let queText = document.querySelector('.que-text');
    let queTag = ` <span>${questions[index].number}.${questions[index].question}</span>`;
    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>`
                    + `<div class="option"><span>${questions[index].options[1]}</span></div>`
                    +`<div class="option"><span>${questions[index].options[2]}</span></div>`
                    + `<div class="option"><span>${questions[index].options[3]}</span></div>`;
    queText.innerHTML = queTag;
    optionList.innerHTML = optionTag;
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', () => optionSelected(option));
    });
}

let tickIcon  = ` <div class="icon tick"><i class="fas fa-check"></i></div>`;
let crossIcon = `<div class="icon cross"><i class="fas fa-times"></i></div>`;


function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine)
    let userAnswer = answer.textContent;
    let rightAnswer = questions[queNum].answer;
    let allOption = optionList.children.length;
    if(userAnswer === rightAnswer){
        answer.classList.add('correct');
        answer.insertAdjacentHTML('beforeend',tickIcon);
        console.log('correct')
    }else{
        answer.classList.add('incorrect');
        answer.insertAdjacentHTML('beforeend',crossIcon);
        console.log('incorrect')

        for(let i = 0; i < allOption; i++){
            if(optionList.children[i].textContent == rightAnswer){
                optionList.children[i].setAttribute('class','option correct');
                optionList.children[i].insertAdjacentHTML('beforeend',tickIcon);
            }
        }
    }

    for(let i = 0; i < allOption; i++){
        optionList.children[i].classList.add('disabled');
    }
    nextBtn.style.display = 'block';
}

function queCounter(index){
    const bottomQueCounter = document.querySelector('.total-que');
    let totalQueTag = ` <span><p>${index}</p> of <p>${questions.length}</p> Question </span>`;
    bottomQueCounter.innerHTML = totalQueTag;
}

function startTimer(time){
    counter = setInterval(timer,1000);
    function timer(){
        timeCount.textContent =  time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = '0' + addZero;
        }
        if(time < 0){
            clearInterval(counter)
            timeCount.textContent = '00';
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer,29);
    function timer(){
        time++;
        timeLine.style.width = time + 'px';
        if(time > 549){
            clearInterval(counterLine);
        }
    }
}