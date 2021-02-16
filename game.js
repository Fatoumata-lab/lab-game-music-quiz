const audioTrack = document.querySelector(".audio");
const choiceButtons = document.querySelectorAll(".choice-btn");
const answerselected = document.getElementById("answer");
const questionElements = document.querySelector(".question");
let score = 0;

const q1 = {question: "1. Who interpreted 'Georgy Porgy'?", audio:"", answer: 1, names:["Usher & Chilli", "Eric Bennet & Faith Evans"], photos:["",""]}
const q2 = {question: "2. Who interpreted 'Changes'?", audio:"", answer: 0, names:["Tupac", "Biggie"], photos:["",""]}
const q3 = {question: "3. Who interpreted 'If your girl only know'?", audio:"", answer: 0, names:["Aaliyah", "TLC"], photos:["",""]}
const q4 = {question: "4. Who interpreted 'Family Affair'?", audio:"", answer: 0, names:["Mary J Blidge", "Ashanti"], photos:["",""]}
const q5 = {question: "5. Who interpreted 'U know what's up'?", audio:"", answer: 0, names:["Donnell Jones", "112"], photos:["",""]}
const q6 = {question: "6. Who interpreted 'Single ladies'?", audio:"", answer: 0, names:["Beyonce", "Kelly Rowland"], photos:["",""]}
const q7 = {question: "7. Who interpreted 'When I See U'?", audio:"", answer: 1, names:["Mary J Blidge", "Fantasia"], photos:["",""]}
const q8 = {question: "8. Who interpreted 'That's what I like'?", audio:"", answer: 1, names:["Chris Brown", "Bruno Mars"], photos:["",""]}
const q9 = {question: "9. Who interpreted 'Body Party'?", audio:"", answer: 0, names:["Ciara", "Beyonce"], photos:["",""]}
const q10 = {question: "10. Who interpreted 'You changed me'?", audio:"", answer: 0, names:["Jamie Foxx & Chris Brown", "Ne-Yo"], photos:["",""]}

const questions = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10]

let currentQuestion = questions[0].question

console.log(currentQuestion += 1)

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

// Function change the question showing to a new one when clicking on next question

// questionElements.forEach(function(newQuestion){
//     newQuestion.addEventListener('click', changeTheQuestion)
// });

function changeTheQuestion() {

        questionElements.innerHTML = questions[i].question;
        questionElements.classList.add("");
        questionElements.classList.remove("");
}