# Web3Bridge-Cohort-XIII-Assessment

Project Title: Quiz Game
Description
This is a dynamic, interactive quiz game built using HTML, CSS (with Tailwind CSS), and JavaScript. It allows players to test their knowledge on various topics by presenting one question at a time. Players can select an answer, receive immediate feedback on its correctness, and track their score as they progress through the quiz. The game also includes a timer for each question, adding an element of challenge. At the end, the player's total score is displayed, with an option to restart the game.

Features
Dynamic Questions: Questions, options, and correct answers are loaded dynamically from a JavaScript array within the script. This can be easily extended to fetch data from a JSON file or API.

Interactive Answer Selection: Players can click on their chosen answer from a set of options.

Instant Feedback: Immediate visual and textual feedback is provided, indicating whether the selected answer was correct or incorrect, and revealing the correct answer if the player made a mistake.

Score Tracking: The player's score is updated in real-time and displayed during the game. A final score summary is presented at the end.

Question Timer: Each question has a 15-second timer. If the timer runs out before an answer is selected, the question is automatically skipped, and the game proceeds. The timer displays a visual warning (red text and pulse animation) when time is low.

Game Over Screen: A clear "Game Over" screen displays the final score.

Restart Functionality: Players can easily restart the quiz after finishing.

Responsive Design: The game interface is styled using Tailwind CSS and custom CSS to ensure it is visually engaging and adapts well to various screen sizes (mobile, tablet, desktop).

How to Play
Start the Game: Open the quiz_game.html file in your web browser. The quiz will start automatically with the first question.

Answer Questions: Read the question and click on one of the provided answer options.

Receive Feedback: After selecting an answer, you will see immediate feedback indicating if your answer was correct or incorrect. If incorrect, the correct answer will be highlighted.

Monitor Timer: Keep an eye on the timer. If it reaches zero, the question will be skipped, and your current answer (if any) will be recorded.

Next Question: After answering (or when the timer runs out), the "Next Question" button will become active. Click it to proceed to the next question.

Game End: The game concludes after all questions have been answered. Your final score will be displayed.

Play Again: Click the "Play Again" button on the "Game Over" screen to restart the quiz from the beginning.

Technologies Used
HTML5: For the structure and content of the web page.

CSS3: For styling the application, including:

Tailwind CSS (via CDN): A utility-first CSS framework for rapid UI development and responsiveness.

Custom CSS: Additional styles to enhance visual appeal, animations, and specific component behaviors.

JavaScript (Vanilla JS): For all the interactive logic, game state management, DOM manipulation, and timer functionality.

Error Handling
The game includes basic error handling to ensure a smooth player experience:

Invalid/Missing Data: The questions array is directly embedded for simplicity. In a production scenario, fetching data from an external source would require more robust checks (e.g., try-catch blocks for fetch operations) to handle network errors or malformed data gracefully. For this current implementation, the structure of the questions array is assumed to be correct.

Game Logic Errors: The JavaScript logic is designed to prevent disruptions. For instance, players cannot select multiple answers for a single question, and the game flow ensures progression even if the timer runs out.

Setup and Running the Code
To run this quiz game locally:

Save the Code: Copy the entire HTML, CSS, and JavaScript code provided into a single file. Save this file with an .html extension (e.g., quiz_game.html).

Open in Browser: Locate the saved quiz_game.html file on your computer and open it with any modern web browser (e.g., Chrome, Firefox, Edge, Safari).

The game should load and be immediately playable. No additional server or complex setup is required as all assets are included directly within the HTML file or fetched from a CDN.

GitHub (Optional)
If you wish to manage this project with Git and host it on GitHub:

Initialize Git: Open your terminal or command prompt, navigate to the directory where you saved quiz_game.html, and run git init.

Add Files: Stage your quiz_game.html file for commit: git add quiz_game.html.

Commit: Commit your changes: git commit -m "Initial commit of Quiz Game".

Create GitHub Repository: Go to GitHub and create a new repository (e.g., quiz-game). Do not initialize it with a README, .gitignore, or license.

Link and Push: Follow the instructions provided by GitHub after creating the repository to link your local repository and push your code:

git remote add origin https://github.com/your-username/quiz-game.git
git branch -M main
git push -u origin main

(Replace your-username with your actual GitHub username.)

You can then continue to commit and push changes as you modify or enhance the game.
