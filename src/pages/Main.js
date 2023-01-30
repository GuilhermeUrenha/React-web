import React from 'react';
import { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';

export default function Resume() {
	const [inProp, setInProp] = useState(false);
	useEffect(() => {
		setInProp(true);
	}, []);

	function vh(percent) {
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		return (percent * h) / 100;
	}
	
	function vw(percent) {
		var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		return (percent * w) / 100;
	}
	
	function vmin(percent) {
		return Math.min(vh(percent), vw(percent));
	}
	
//	function vmax(percent) {
//		return Math.max(vh(percent), vw(percent));
//	}

	//var index = -2;
	var baseLeftMargin = 20;
	var assembleDelay = 400;
	function nameAssemble(letter) {
		var assembleTransition, margin, transition;
		const startingPoint = Math.floor(Math.random() * 2);
		const topStart = 0, bottomStart = 1, leftStart = 2, rightStart = 3;
		const marginDifference = 4.5;
		var startPosition;

		//var lttr = document.getElementsByClassName('NameLetter')[index+=1];
		//var lWidth = lttr?.clientWidth || 0;
		var lWidth = 0;
		if (lWidth < vmin(20))
			lWidth *= -1;

		if (startingPoint === topStart) {
			startPosition = '-15vh';
			assembleTransition = {
				entering: {
					margin: `${startPosition} 0 0 ${baseLeftMargin+=marginDifference}%`
				},
				entered: {
					margin: `15vh 0 0 ${baseLeftMargin}%`,
					opacity: 1
				}
			};
			margin = `${startPosition} 0 0 ${baseLeftMargin}%`;
			transition = `margin 500ms ease-out`;
		}
		else if (startingPoint === bottomStart) {
			startPosition = '72vh';
			assembleTransition = {
				entering: {
					margin: `${startPosition} 0 0 ${baseLeftMargin+=marginDifference}%`
				},
				entered: {
					margin: `15vh 0 0 ${baseLeftMargin}%`,
					opacity: 1
				}
			};
			margin = `${startPosition} 0 0 ${baseLeftMargin}%`;
			transition = `margin 500ms ease-out`;
		}
		else if (startingPoint === leftStart) {
			startPosition = '-2';
			assembleTransition = {
				entering: {
					margin: `15vh 0 0 ${startPosition}%`
				},
				entered: {
					margin: `15vh 0 0 ${baseLeftMargin+=marginDifference}%`,
					opacity: 1
				}
			};
			margin = `15vh 0 0 ${startPosition}%`;
			transition = `margin 500ms ease-out`;
		}
		else if (startingPoint === rightStart) {
			startPosition = '94';
			assembleTransition = {
				entering: {
					margin: `15vh 0 0 ${startPosition}%`
				},
				entered: {
					margin: `15vh 0 0 ${baseLeftMargin+=marginDifference}%`,
					opacity: 1
				}
			};
			margin = `15vh 0 0 ${startPosition}%`;
			transition = `margin 500ms ease-out`;
		}

		return (<Transition in={inProp} timeout={assembleDelay += 200}>
			{(state) => (
				<div
					className='NameLetter'
					style={{
						margin: margin,
						transition: transition,
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
		<div id='Name'>
			{
				//name.map((letter) => nameAssemble(letter))
				name.concat(extension).map((letter) => nameAssemble(letter))
				//extension.map((letter) => nameAssemble(letter))
			}
		</div>
	);
};