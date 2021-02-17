const nextButton = document.getElementById("next-btn")
const audioTrack = document.querySelector(".audios");
const choiceButtons = document.querySelectorAll(".choice-btn");
const answerselected = document.getElementById("answer");
const questionElements = document.getElementById("question");
const artistsNames = document.querySelectorAll(".artist");
const images = document.querySelectorAll(".image")
let score = 0;

console.log(audioTrack)

const q1 = {question: "1. Who interpreted 'Georgy Porgy'?", audio:"audio/Eric-Faith.mp3", answer: 1, names:["Usher & Chilli", "Eric Bennet & Faith Evans"], photos:["",""]}
const q2 = {question: "2. Who interpreted 'Changes'?", audio:"", answer: 0, names:["Tupac", "Biggie"], photos:["",""]}
const q3 = {question: "3. Who interpreted 'If your girl only know'?", audio:"", answer: 0, names:["Aaliyah", "TLC"], photos:["",""]}
const q4 = {question: "4. Who interpreted 'Family Affair'?", audio:"", answer: 0, names:["Mary J Blidge", "Ashanti"], photos:["",""]}
const q5 = {question: "5. Who interpreted 'U know what's up'?", audio:"", answer: 0, names:["Donnell Jones", "112"], photos:["",""]}
const q6 = {question: "6. Who interpreted 'Single ladies'?", audio:"", answer: 0, names:["Beyonce", "Kelly Rowland"], photos:["",""]}
const q7 = {question: "7. Who interpreted 'When I See U'?", audio:"", answer: 1, names:["Mary J Blidge", "Fantasia"], photos:["",""]}
const q8 = {question: "8. Who interpreted 'That's what I like'?", audio:"", answer: 1, names:["Chris Brown", "Bruno Mars"], photos:["",""]}
const q9 = {question: "9. Who interpreted 'Body Party'?", audio:"", answer: 0, names:["Ciara", "Beyonce"], photos:["",""]}
const q10 = {question: "10. Who interpreted 'You changed me'?", audio:"", answer: 0, names:["Jamie Foxx & Chris Brown", "Ne-Yo"], photos:["",""]}

const questions = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];

// const currentPageQuestion = questions[0];

// console.log(currentPageQuestion)

// when good answer button goes green, when wrong goes red

choiceButtons.forEach(function(button) {
    button.addEventListener('click', changeChoiceButtonColor)
});

 function changeChoiceButtonColor(evt) {
     console.log(evt.target)
     const clickedBtn = evt.target;
     const answerIndex = Number(clickedBtn.getAttribute("data-answer"));
     console.log(answerIndex)
     if (answerIndex === questions[0].answer) {
        clickedBtn.classList.add("right-answer-button");
     } else {
        clickedBtn.classList.add("wrong-answer-button");
     }
 }

// Page changes when clicking on next button OPTION 1----

// Page changes when clicking on next button OPTION 2 ----

// for (let index = 0; index < questions.length; index++) {
//     const element = questions[index];
    
// }

let currentIndex = 0

function displayQuestion(){
    questionElements.innerHTML = questions[currentIndex].question 
    audioTrack.src = questions[currentIndex].audio

}

function handleClick() {
    currentIndex = currentIndex + 1
    displayQuestion()

console.log("test")
}

displayQuestion()

    nextButton.addEventListener('click',handleClick)

//-------------------------------------------------------------------------------

/*function handleClick(e) {
    const questionsIndex = Math.floor(Math.random*availableQuestions.length)
    const currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion

    availableQuestions.splice(questionsIndex, 1)
    return newPage
}*/

// -----------------------------------------------------------------------------

// function ShowNewQuestion(followingQuestion) {
//     for (let i = 0, i < questions.length, i++) {
//     questionElements.classList.remove(currentQuestion);
//     questionElements.classList.add(currentQuestion + 1).innerHTML;
// }
// console.log(followingQuestion)
// }