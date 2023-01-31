import React from 'react';
import { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import { Octokit } from '@octokit/core';
import token from '../auth.js';

export default function App() {
	const [inProp, setInProp] = useState(false);
	useEffect(() => {
		setInProp(true);
	}, []);

	useEffect(() => {
		if(inProp) getGitHub();
	}, [inProp])

	async function getGitHub() {
		const octokit = new Octokit({
			auth: token
		});
		var result = await octokit.request('GET /repos/GuilhermeUrenha/Carracosta', {
			owner: 'GuilhermeUrenha',
			repo: 'Carracosta'
		});
		console.log(result);
	}

	var assembleDelay = 500;
	function nameAssemble(letter, extension){
		const startingPoint = Math.floor(Math.random() * 2);
		const topStart = 0, bottomStart = 1;
		var startPosition;

		if(startingPoint === topStart)
			startPosition = '-15vh';
		else if(startingPoint === bottomStart)
			startPosition = '60vh';
		const assembleTransition = {
			entering: { 
				marginTop: startPosition
			},
			entered: { 
				marginTop: '15vh',
				opacity: 1
			}
		};
		return (<Transition in={inProp} timeout={assembleDelay+=100}>
			{(state) =>(
				<div
				className={`NameLetter ${extension ? 'NameExtension' : ''}`}
				style={{
					marginTop: startPosition,
					...assembleTransition[state]
				}}
				>
				{letter}
				</div>
			)}
		</Transition>);
	}

	var name = ['G', 'U', 'I', 'L', 'H', 'E', 'R', 'M', 'E'];
	var extension = ['.', 'r', 'a', 'r'];

	return (
		<main>
			<div id='Name'>
				{name.map((letter) => nameAssemble(letter))}
				{extension.map((letter) => nameAssemble(letter, true))}
			</div>
		</main>
	);
};