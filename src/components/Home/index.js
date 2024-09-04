import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

const Home = () => {
	const queryClient = useQueryClient();

	const [playerName, setPlayerName] = useState("");

  const addUserNameData = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(playerName, e)
  }
	return (
		<div className='quizApp__home'>
			<div className='quizApp__home-box'>
				<div className='quizApp__home-intro'>
					<h2> Welcome! </h2>
					<h3>Test your skills by participatinig in simple quiz</h3>
				</div>
				<form className='quizApp__home-form' onSubmit={addUserNameData}>
					<label htmlFor='playername'>
						To start the quiz, please enter your name
					</label>
					<input
						type='text'
						name='playerName'
						id='playerName'
						placeholder='eg: Ram'
						value={playerName}
						onChange={(e) => {
							setPlayerName(e.target.value);
						}}
					/>
					<button type='submit' disabled={playerName.trim() === ''}>Start the Quiz</button>
				</form>
				<span className='quizApp__home-note'>
					Note: your name will be kept for analytics
				</span>
			</div>
		</div>
	);
};

export default Home;
