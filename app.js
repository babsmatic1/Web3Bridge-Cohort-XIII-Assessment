
        // Array of quiz questions
        const questions = [
            {
                question: "What is the capital of France?",
                options: ["Berlin", "Madrid", "Paris", "Rome"],
                correctAnswer: "Paris",
            },
            {
                question: "Which planet is known as the 'Red Planet'?",
                options: ["Earth", "Mars", "Jupiter", "Venus"],
                correctAnswer: "Mars",
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correctAnswer: "Pacific Ocean",
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
                correctAnswer: "Leonardo da Vinci",
            },
            {
                question: "What is the chemical symbol for water?",
                options: ["O2", "H2O", "CO2", "NACL"],
                correctAnswer: "H2O",
            },
        ];

        // DOM element references
        const gameScreen = document.getElementById('game-screen');
        const gameOverScreen = document.getElementById('game-over-screen');
        const questionTextElement = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const feedbackMessageElement = document.getElementById('feedback-message');
        const scoreDisplay = document.getElementById('score-display');
        const finalScoreDisplay = document.getElementById('final-score');
        const nextButton = document.getElementById('next-button');
        const restartButton = document.getElementById('restart-button');
        const currentQuestionNumDisplay = document.getElementById('current-question-num');
        const totalQuestionsDisplay = document.getElementById('total-questions');
        const timerDisplay = document.getElementById('timer-display');

        // Game state variables
        let currentQuestionIndex = 0;
        let score = 0;
        let selectedAnswer = null; // To store the user's selected answer for the current question
        let timerInterval;
        let timeLeft = 15;
        let timerActive = false; // Flag to control timer behavior

        // Function to initialize or restart the game
        function initializeGame() {
            currentQuestionIndex = 0;
            score = 0;
            selectedAnswer = null;
            feedbackMessageElement.textContent = '';
            scoreDisplay.textContent = score;
            totalQuestionsDisplay.textContent = questions.length;

            gameScreen.classList.remove('hidden');
            gameOverScreen.classList.add('hidden');

            loadQuestion(); // Load the first question
        }

        // Function to load a question
        function loadQuestion() {
            // Reset state for new question
            selectedAnswer = null;
            feedbackMessageElement.textContent = '';
            nextButton.disabled = true; // Disable next button until answer or time runs out
            timerDisplay.classList.remove('timer-red', 'animate-pulse'); // Reset timer display styles

            // Update question number display
            currentQuestionNumDisplay.textContent = currentQuestionIndex + 1;

            const currentQuestion = questions[currentQuestionIndex];
            questionTextElement.textContent = currentQuestion.question;
            optionsContainer.innerHTML = ''; // Clear previous options

            // Create buttons for each option
            currentQuestion.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('option-button', 'text-white', 'py-3', 'px-4', 'rounded-xl', 'shadow-md', 'transition', 'duration-200', 'ease-in-out');
                button.addEventListener('click', () => handleAnswerClick(button, option));
                optionsContainer.appendChild(button);
            });

            startTimer(); // Start the timer for the new question
        }

        // Function to start the question timer
        function startTimer() {
            clearInterval(timerInterval); // Clear any existing timer
            timeLeft = 15; // Reset time
            timerDisplay.textContent = `Time Left: ${timeLeft}s`;
            timerActive = true; // Activate timer

            timerInterval = setInterval(() => {
                timeLeft--;
                timerDisplay.textContent = `Time Left: ${timeLeft}s`;

                // Add red color and pulse animation when time is low
                if (timeLeft <= 5) {
                    timerDisplay.classList.add('timer-red', 'animate-pulse');
                } else {
                    timerDisplay.classList.remove('timer-red', 'animate-pulse');
                }

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    timerActive = false; // Deactivate timer
                    feedbackMessageElement.textContent = "Time's up! Moving to the next question.";
                    feedbackMessageElement.classList.remove('text-green-400');
                    feedbackMessageElement.classList.add('text-red-400');
                    // Automatically move to the next question after a short delay
                    setTimeout(handleNextQuestion, 1500);
                    nextButton.disabled = false; // Enable next button if time runs out
                }
            }, 1000);
        }

        // Function to handle user's answer click
        function handleAnswerClick(clickedButton, answer) {
            if (selectedAnswer !== null || !timerActive) {
                return; // Prevent multiple selections or selection after timer expired
            }

            clearInterval(timerInterval); // Stop the timer
            timerActive = false; // Deactivate timer
            selectedAnswer = answer; // Store the selected answer
            nextButton.disabled = false; // Enable next button

            const currentQuestion = questions[currentQuestionIndex];
            const allOptionButtons = optionsContainer.querySelectorAll('.option-button');

            // Disable all option buttons after selection
            allOptionButtons.forEach(button => {
                button.disabled = true;
                // Add styling based on correctness
                if (button.textContent === currentQuestion.correctAnswer) {
                    button.classList.add('correct-answer-highlight');
                }
            });

            // Provide immediate feedback and styling for the clicked button
            if (answer === currentQuestion.correctAnswer) {
                score++;
                scoreDisplay.textContent = score;
                feedbackMessageElement.textContent = "Correct!";
                feedbackMessageElement.classList.remove('text-red-400');
                feedbackMessageElement.classList.add('text-green-400');
                clickedButton.classList.add('selected-correct');
            } else {
                feedbackMessageElement.textContent = `Incorrect. The correct answer was: ${currentQuestion.correctAnswer}`;
                feedbackMessageElement.classList.remove('text-green-400');
                feedbackMessageElement.classList.add('text-red-400');
                clickedButton.classList.add('selected-incorrect');
            }
        }

        // Function to move to the next question or end the game
        function handleNextQuestion() {
            // Only proceed if an answer was selected or time ran out
            if (selectedAnswer === null && timeLeft > 0 && timerActive) {
                return; // This case should ideally not happen if logic is correct
            }

            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion(); // Load next question
            } else {
                endGame(); // End the game
            }
        }

        // Function to end the game and display results
        function endGame() {
            clearInterval(timerInterval); // Stop timer
            timerActive = false; // Ensure timer is inactive
            gameScreen.classList.add('hidden');
            gameOverScreen.classList.remove('hidden');
            finalScoreDisplay.textContent = `${score} / ${questions.length}`;
        }

        // Event listeners
        nextButton.addEventListener('click', handleNextQuestion);
        restartButton.addEventListener('click', initializeGame);

        // Initialize the game when the window loads
        window.onload = initializeGame;