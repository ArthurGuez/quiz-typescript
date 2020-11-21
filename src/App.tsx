import React, { useState } from 'react';

import { fetchQuizQuestions } from './API';

//Components
import QuestionCard from './components/QuestionCard';

// Types
import { QuestionState, Difficulty } from './API';

type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestons] = useState<QuestionState[]>([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnsers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	(async () => console.log(await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)))();

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
			{/* <QuestionCard
				questionNum={number + 1}
				totalQuestions={TOTAL_QUESTIONS}
				question={questions[number].question}
				answers={questions[number].answers}
				userAnswer={userAnswers ? userAnswers[number] : undefined}
				callback={checkAnswer}
			/> */}
			<button className="next" onClick={nextQuestion}>
				Next Question
			</button>
		</div>
	);
};

export default App;
