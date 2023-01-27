import { useEffect, useState } from 'react';
import './App.css';
import { Transition } from 'react-transition-group';



function App() {
	const [inProp, setInProp] = useState(false);

	useEffect (()=>{
		setInProp(true);
	}, []);
	
	var assembleDelay = 500;
	function nameAssemble(letter){
		const startingPoint = Math.floor(Math.random() * 2);
		const topStart = 0, bottomStart = 1;
		var startPosition;

		if(startingPoint === topStart)
			startPosition = '-15vh';
		else if(startingPoint === bottomStart)
			startPosition = '100vh';

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
				className='NameLetter'
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

	var typeDelay = 100;
	function extensionType(letter){
		const typeTransition = {
			//entering: { },
			entered: { opacity: 1 }
		};
		return (<Transition in={inProp} timeout={typeDelay+=300}>
			{(state) =>(
				<div
				className='NameLetter NameExtension'
				style={{
					transition: `opacity 100ms ease-out`,
					...typeTransition[state]
				}}
				>
				{letter}	
				</div>
			)}
		</Transition>);
	}
	
	var name = ['G','U','I','L','H','E','R','M','E'];
	var extension = ['.','r','a','r'];

	return (
		<div className='App'>
			<header className='App-header'></header>
			<div id='Name'>
				{name.map((letter) => nameAssemble(letter))}
				{extension.map((letter) => extensionType(letter))}
			</div>
		</div>
	);
}

export default App;
