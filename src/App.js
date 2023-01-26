import { useEffect, useState } from 'react';
import './App.css';
import { Transition } from 'react-transition-group';



function App() {
	const [inProp, setInProp] = useState(false);
	var name = ['G','U','I','L','H','E','R','M','E'];
	var assembleDelay = 500;
	var extension = ['.','r','a','r']
	var typeDelay = 0;

	useEffect (()=>{
		setInProp(true);
	}, []);
	
	function nameAssemble(letter){
		const assembleTransition = {
			entering: { marginTop: '-15vh' },
			entered: { marginTop: '15vh' }
		};
		//var position;
		return (<Transition in={inProp} timeout={assembleDelay+=100}>
			{(state) =>(
				<div
					className='NameLetter'
					style={{
						transition: `margin-top 500ms`,
						...assembleTransition[state]
					}}
				>
				{letter}
				</div>
			)}
		</Transition>);
	}

	function extensionType(letter){
		const typeTransition = {
			entering: { opacity: 0 },
			entered: { opacity: 1 }
		};
		return (<Transition in={inProp} timeout={typeDelay+=300}>
			{(state) =>(
				<div
					className='NameLetter NameExtension'
					style={{
						transition: `opacity 100ms ease-in-out`,
						opacity: 0,
						...typeTransition[state]
					}}
				>
				{letter}	
				</div>
			)}
		</Transition>);
	}

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
