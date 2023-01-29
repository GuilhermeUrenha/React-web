import React from 'react';

export default function Resume() {
    function resumeLoad() {
		const placeholder = document.getElementsByClassName('placeholder')[0];
		placeholder.style.display = 'none';
    }
	return (
		<div>
			<p className='placeholder'>Carregando</p>
			<iframe
				id='Curriculo'
				title='Curriculo'
				onLoad={resumeLoad}
				src="https://docs.google.com/document/d/1ufQMFRV_NppkyrA9i07sM7Tvml-DFMayGkmEjfvFClE/preview?pli=1"
			/>
		</div>
	);
};
