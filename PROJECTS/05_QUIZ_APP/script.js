const questions = [
    {
        question: "Which is the largest animal in the world",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which is the National Bird of India",
        answers: [
            { text: "Peacock", correct: true },
            { text: "Shark", correct: false },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which is the largest planet in our solar system",
        answers: [
            { text: "Shark", correct: false },
            { text: "Elephant", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which is the largest continent in the world",
        answers: [
            { text: "Shark", correct: false },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Asia", correct: true }
        ]
    }
];


const questionElement = document.getElementById("question");     
const answerButton = document.getElementById("answer-button");   
const nextButton = document.getElementById("next-btn");          


let currentQuestionIndex = 0; // Tracks current question
let score = 0;               // Tracks score

function startQuiz(){
    currentQuestionIndex = 0; // Reset question index
    score = 0;               // Reset score
    nextButton.innerHTML = "Next";
    showQuestion();           // Load first question
}


function showQuestion(){
    resetState(); // Clear previous UI

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Create answer buttons dynamically
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        // Store correct answer info using dataset
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        // Handle answer click
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none"; 

    // Remove old answer buttons
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    // Mark selected answer
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++; 
    }else{
        selectedBtn.classList.add("incorrect");
    }

    // Show correct answer & disable all buttons
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block"; // Show next button
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


function showScore(){
    resetState();
    questionElement.innerHTML = `Your score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "TRY AGAIN !!!";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

startQuiz();
