import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Resume from './pages/Resume';

function App() {
	
	function ToLink({ to, children }) {
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
				li.classList.replace('active','inactive')
			});
			this.classList.replace('inactive','active');
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
		</div>
	);
}

export default App;
