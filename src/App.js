import { useEffect, useState } from 'react';
import './App.css';
import { Transition } from 'react-transition-group';



function App() {
	const [inProp, setInProp] = useState(false);
	useEffect (()=>{
		setInProp(true);
	}, []);
	
	var assembleDelay = 1000;
	function nameAssemble(letter){
		const startingPoint = Math.floor(Math.random() * 2);
		const topStart = 0, bottomStart = 1;
		var startPosition;

		/*
			leftMargin += 5vh each letter

			leftStart = 2, rightStart = 3
			if(){
				startPosition
				var assembleTransition = {
					margin: 0 0 1 0 // topValue rightValue bottomValue leftValue
			}

			style={{
				transition: margin 500ms ease-out

			CSS
			.NameLetter {
				position: absolute
				margin: 0 0 1 0;
			}
		*/
		
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

		return (<Transition in={inProp} timeout={assembleDelay+=200}>
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

	var typeDelay = 1000;
	function extensionType(letter){
		const typeTransition = {
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
	//var extensionIterator = extension[Symbol.iterator]();

	return (
		<div className='App'>
			<header className='App-header'></header>
			<div id='Name'>
				{name.map((letter) => nameAssemble(letter))}
				{extension.map((letter) => extensionType(letter))}
			</div>
			<iframe
				id='Curriculo'
				title='Curriculo'
				src="https://docs.google.com/document/d/e/2PACX-1vQ17AU6xuCRb9UIh2XntFD_7-p3m8OUnccD2ed12aJoJrVdugko3t-fEcDnRZlnuetVq_a5KigSi6xP/pub?embedded=true"
			/>
		</div>
	);
}

export default App;
