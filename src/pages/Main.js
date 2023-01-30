import React from 'react';
import { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';

export default function App() {
	const [inProp, setInProp] = useState(false);
	useEffect(() => {
		setInProp(true);
	}, []);

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
					transition: `margin-top 500ms ease-out`,
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
				{/*name.concat(extension).map((letter) => nameAssemble(letter))*/}
			</div>
			<div>

			</div>
		</main>
	);
};