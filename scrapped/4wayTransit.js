
/*
	var index = -2;
	var baseLeftMargin = 0;
	var assembleDelay = 400;
	function nameAssemble(letter) {
		var startPosition, assembleTransition, margin, transition;
		const startingPoint = Math.floor(Math.random() * 4);
		const topStart = 0, bottomStart = 1, leftStart = 2, rightStart = 3;

		var lttr = document.getElementsByClassName('NameLetter')[index+=1];
		var lWidth = lttr?.clientWidth || 0;

		if (startingPoint === topStart) {
			startPosition = '-15vh';
			assembleTransition = {
				entering: {
					margin: `${startPosition} 0 0 ${baseLeftMargin+=lWidth}px`
				},
				entered: {
					margin: `15vh 0 0 ${baseLeftMargin}px`,
					opacity: 1
				}
			};
			margin = `${startPosition} 0 0 ${baseLeftMargin}px`;
			transition = `margin 500ms ease-out`;
		}
		else if (startingPoint === bottomStart) {
			startPosition = '72vh';
			assembleTransition = {
				entering: {
					margin: `${startPosition} 0 0 ${baseLeftMargin+=lWidth}px`
				},
				entered: {
					margin: `15vh 0 0 ${baseLeftMargin}px`,
					opacity: 1
				}
			};
			margin = `${startPosition} 0 0 ${baseLeftMargin}px`;
			transition = `margin 500ms ease-out`;
		}
		else if (startingPoint === leftStart) {
			startPosition = '-2';
			assembleTransition = {
				entering: {
					margin: `15vh 0 0 ${startPosition}px`
				},
				entered: {
					margin: `15vh 0 0 ${baseLeftMargin+=lWidth}px`,
					opacity: 1
				}
			};
			margin = `15vh 0 0 ${startPosition}px`;
			transition = `margin 500ms ease-out`;
		}
		else if (startingPoint === rightStart) {
			startPosition = '94';
			assembleTransition = {
				entering: {
					margin: `15vh 0 0 ${startPosition}px`
				},
				entered: {
					margin: `15vh 0 0 ${baseLeftMargin+=lWidth}px`,
					opacity: 1
				}
			};
			margin = `15vh 0 0 ${startPosition}px`;
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
*/