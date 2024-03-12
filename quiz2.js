const quizData = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    }
    // Add more questions as needed
  ];

  let currentQuestionIndex = 0;
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const feedbackElement = document.getElementById("feedback");

  function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = ""; // Clear previous choices

    currentQuestion.choices.forEach(choice => {
      const choiceButton = document.createElement("button");
      choiceButton.textContent = choice;
      choiceButton.className = "choice-button";
      choiceButton.onclick = () => checkAnswer(choice);
      choicesElement.appendChild(choiceButton);
    });
  }

  function checkAnswer(selectedAnswer) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      feedbackElement.textContent = "Correct!";
    } else {
      feedbackElement.textContent = "Incorrect. The correct answer is: " + currentQuestion.correctAnswer;
    }

    function showResults(){
      const answerContainers = quizContainer.querySelectorAll('.answers');
      let numCorrect=0;
      myQuestions.forEach((currentQuestion,questionNumber)) => {

        const answerContainer= answersContainer[questionNumber];
        const selector = 'input[name=question${questionNumber}]:checked';
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  };

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}
      }
    }
    // Move to the next question or end quiz if it's the last question
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      setTimeout(() => {
        feedbackElement.textContent = "";
        showQuestion();
      }, 1000); // Wait 1 second before showing the next question
    } else {
      endQuiz();
    }
  }

  function endQuiz() {
    questionElement.textContent = "Quiz Completed!";
    choicesElement.innerHTML = ""; // Clear choices
  }

  // Start the quiz
  showQuestion();

