const nextButton = document.getElementById("next-btn")
const audioTrack = document.querySelector(".audios");
const choiceButtons = document.querySelectorAll(".choice-btn");
const choicebtn1 = document.getElementById("choice-btn1")
const choicebtn2 = document.getElementById("choice-btn2")
const answerselected = document.getElementById("answer");
const questionElements = document.getElementById("question");
const artistName1 = document.getElementById("name1");
const artistName2 = document.getElementById("name2");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const goodAnswer = document.querySelector(".good-answers");
const page = document.querySelector(".container")

let score = 0;

const q1 = { question: "1. Who interpreted 'Georgy Porgy'?", audio: "./audio/Eric-Faith.mp3", answer: 1, names1: "Usher & Chilli", names2: "Eric Bennet & Faith Evans", photos1: "./images/CU.jpg", photos2: "./images/EricFaith.jpg", button: 'Next Question' }

const q2 = { question: "2. Who interpreted 'Changes'?", audio: "./audio/2pac.mp3", answer: 0, names1: "Tupac", names2: "Biggie", photos1: "./images/tupac.jpg", photos2: "./images/Biggie.jpg", button: 'Next Question' }

const q3 = { question: "3. Who interpreted 'If your girl only know'?", audio: "./audio/Aaliyah.mp3", answer: 0, names1: "Aaliyah", names2: "TLC", photos1: "./images/Aaliyah.jpg", photos2: "./images/tlc.jpg", button: 'Next Question' }

const q4 = { question: "4. Who interpreted 'Family Affair'?", audio: "./audio/Family-Affair.mp3", answer: 0, names1: "Mary J Blidge", names2: "Ashanti", photos1: "./images/mary-j-blige.jpg", photos2: "./images/ashanti.jpg", button: 'Next Question' }

const q5 = { question: "5. Who interpreted 'U know what's up'?", audio: "./audio/Donell-Jones.mp3", answer: 0, names1: "Donnell Jones", names2: "112", photos1: "./images/Donell-Jones.jpg", photos2: "./images/112.jpg", button: 'Next Question' }

const q6 = { question: "6. Who interpreted 'Single ladies'?", audio: "./audio/Single-ladies.mp3", answer: 0, names1: "Beyonce", names2: "Kelly Rowland", photos1: "./images/beyonce.png", photos2: "./images/kelly-rowland.jpg", button: 'Next Question' }

const q7 = { question: "7. Who interpreted 'When I See U'?", audio: "./audio/Fantasia.mp3", answer: 1, names1: "Mary J Blidge", names2: "Fantasia", photos1: "./images/mary-j-blige.jpg", photos2: "./images/Fantasia.jpg", button: 'Next Question' }

const q8 = { question: "8. Who interpreted 'That's what I like'?", audio: "./audio/Bruno-Mars.mp3", answer: 1, names1: "Chris Brown", names2: "Bruno Mars", photos1: "./images/chris-brown.jpg", photos2: "./images/bruno-mars.jpg", button: 'Next Question' }

const q9 = { question: "9. Who interpreted 'Body Party'?", audio: "./audio/Ciara.mp3", answer: 0, names1: "Ciara", names2: "Beyonce", photos1: "./images/ciara.jpeg", photos2: "./images/beyonce.png", button: 'Next Question' }

const q10 = { question: "10. Who interpreted 'You changed me'?", audio: "./audio/Jamie-Chris.mp3", answer: 0, names1: "Jamie Foxx & Chris Brown", names2: "Ne-Yo", photos1: "./images/JamieChris.jpg", photos2: "./images/neyo.jpg", button: 'Results' }

const questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

// when good answer button goes green, when wrong goes red
let hasAnswered = false;


choiceButtons.forEach(function (button) {
    button.addEventListener('click', changeChoiceButtonColor)
});

function changeChoiceButtonColor(evt) {
    if (hasAnswered === true) return;
    const clickedBtn = evt.target;
    hasAnswered = true;
    console.log(evt.target)
    const answerIndex = Number(clickedBtn.getAttribute("data-answer"));
    if (answerIndex === questions[currentIndex].answer) {
        clickedBtn.classList.add("right-answer-button");
        goodAnswer.innerHTML = score += 1;
        console.log("good")
    } else {
        clickedBtn.classList.add("wrong-answer-button");
        goodAnswer.innerHTML = score;
        console.log("bad")

    }
}

// Page changes when clicking on next button ----

let currentIndex = 0

displayQuestion()

function displayQuestion() {
    questionElements.innerHTML = questions[currentIndex].question
    audioTrack.src = questions[currentIndex].audio
    artistName1.innerHTML = questions[currentIndex].names1
    artistName2.innerHTML = questions[currentIndex].names2
    image1.src = questions[currentIndex].photos1
    image2.src = questions[currentIndex].photos2
    nextButton.innerHTML = questions[currentIndex].button
}

// disable button not clicked

function disableButtonsClasses() {
    choicebtn1.classList.remove("right-answer-button");
    choicebtn1.classList.remove("wrong-answer-button");
    choicebtn2.classList.remove("right-answer-button");
    choicebtn2.classList.remove("wrong-answer-button");
}

function handleClick() {
    hasAnswered = false;
    currentIndex = currentIndex + 1
    displayQuestion()
    disableButtonsClasses()
    //calculateScore()
}
nextButton.addEventListener('click', handleClick)

//last page set

//if (questions.length > currentIndex)
//div.classList.add(.hide)

function endGamePage() {
    page.classList.add('hide')
}
