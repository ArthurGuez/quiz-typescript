import React, { useState } from 'react';

//Components
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10;

const App = () => {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestons] = useState([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnsers] = useState([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const startTrivia = async () => {};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const nextQuestion = () => {};

	return (
		<div className="App">
			<h1>REACT QUIZ</h1>
			<button className="start" onClick={startTrivia}>
				Start
			</button>
			<p className="score">Score:</p>
			<p className="">Loading Questions...</p>
			<QuestionCard
				questionNum={number + 1}
				totalQuestions={TOTAL_QUESTIONS}
				question={questions[number].question}
			/>
			<button className="next" onClick={nextQuestion}>
				Next Question
			</button>
		</div>
	);
};

export default App;
