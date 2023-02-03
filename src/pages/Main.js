import React from 'react';
import { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import Async from 'react-async';
import { Octokit } from '@octokit/core';
import token from '../auth.js';

export default function App() {
	const [inProp, setInProp] = useState(false);
	useEffect(() => {
		setInProp(true);
	}, []);

	const octokit = new Octokit({
		auth: token
	});

	var repositories = new Map();
	class Repository {
		constructor(id, name, html_url, language, updated_at, visibility) {
			this.id = id;
			this.name = name;
			this.url = html_url;
			this.language = language;
			this.updated = updated_at;
			this.visibility = visibility;
			this.commits = 0;
		}
		async getCommits(request) {
			var commitsInfo = await (await fetch(request)).json().then(c => commitsInfo = c);
			this.commits = commitsInfo;
			//document.getElementById('commits').textContent = commitArray.size;
			return 0;
		}
	}

	const gitHub = () => octokit.request('GET /users/GuilhermeUrenha/repos', {});
	const ActAsync = ({ data, error, isLoading }) => {
		if (isLoading) return '';
		if (error) return `Something went wrong: ${error.message}`;

		for (var repo of data.data) {
			let repository = new Repository(
				repo.id,
				repo.name,
				repo.html_url,
				repo.language,
				repo.updated_at,
				repo.visibility
			);
			repository.getCommits(repo.commits_url.replace('{/sha}', ''));
			repositories.set(repo.id, repository);
		}
		return [...repositories.entries()].map(
			(r) => (
				<div key={r[0]} className={'githubCard'}>
					<h1 className='title'>
						<a href={r[1].url} target='_blank' rel='noreferrer'>{r[1].name}</a>
					</h1>
					<h2 className='visibility'>{r[1].visibility[0].toUpperCase() + r[1].visibility.substring(1)}</h2>
					<p className='language'>{r[1].language}</p>
					<time className='updated'>{daysAgo(r[1].updated)}</time>
				</div>
			)
		);
	}

	function daysAgo(date) {
		var formattedDate;
		const today = new Date();
		const elapsedTime = today - new Date(Date.parse(date));
		const elapsedDays = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
		console.log(elapsedDays);
		if (elapsedDays <= 1) formattedDate = 'Hoje';
		else if (elapsedDays == 1) formattedDate = 'Ontem';
		else if (elapsedDays == 2) formattedDate = 'Anteontem';
		else if (elapsedDays > 30) formattedDate = `${Math.floor(elapsedDays % 30)} meses`;
		return formattedDate;
	}

	var assembleDelay = 500;
	function nameAssemble(letter, key, extension) {
		const startingPoint = Math.floor(Math.random() * 2);
		const topStart = 0, bottomStart = 1;
		var startPosition;

		if (startingPoint === topStart)
			startPosition = '-15vmin';
		else if (startingPoint === bottomStart)
			startPosition = '60vmin';
		const assembleTransition = {
			entering: {
				marginTop: startPosition
			},
			entered: {
				marginTop: '15vmin',
				opacity: 1
			}
		};
		return (<Transition in={inProp} key={key} timeout={assembleDelay += 100}>
			{(state) => (
				<div
					className={`NameLetter${extension ? ' NameExtension' : ''}`}
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
				{name.map((letter, key) => nameAssemble(letter, key))}
				{extension.map((letter, key) => nameAssemble(letter, key, true))}
			</div>
			<section id='githubInfo'>
				<Async promiseFn={gitHub}>
					{ActAsync}
				</Async>
			</section>
		</main>
	);
};
