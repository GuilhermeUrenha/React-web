import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Resume from './pages/Resume';
/*import Projects from './pages/Projects';*/

function App() {
	const ToLink = ({ to, children }) => {
		const location = useLocation();
		const isActive = location.pathname === to;
		return (
			<Link to={to} className={'Link '+(isActive ? 'underline active' : 'underline inactive')}>
				{children}
			</Link>
		);
	}
	const links = document.querySelectorAll('.Link');
	links.forEach(link => {
		link.addEventListener('click', function() {
			links.forEach(li => {
				li.classList.add('inactive');
			});
			this.classList.remove('inactive');
		});
	});

	return (
		<div className='App'>
			<BrowserRouter>
				<header className='App-header'>
					<nav className='Link-routes'>
						<ToLink to={'/'}>Home</ToLink>
						<ToLink to={'/Resume'}>Currículo</ToLink>
					</nav>
				</header>
				<Routes>
					<Route path='/' element={<Main/>}/>
					<Route path='/Resume' element={<Resume/>}/>
				</Routes>
			</BrowserRouter>
			<div className={'sticky'}>
				<a href='https://github.com/GuilhermeUrenha' target='_blank' rel='noreferrer'>
					<img src={process.env.PUBLIC_URL + '/github.svg'} alt='Github'/>
				</a>
				<a href='https://www.linkedin.com/in/guilherme-vieira-urenha/' target='_blank' rel='noreferrer'>
					<img src={process.env.PUBLIC_URL + '/linkedin.svg'} alt='Linkedin'/>
				</a>
			</div>
		</div>
	);
}

export default App;
