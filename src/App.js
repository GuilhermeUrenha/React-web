import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Resume from './pages/Resume';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<header className='App-header'>
						<nav>
							<Link to={'/'}>Home</Link>
							<Link to={'/Resume'}>Currículo</Link>
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
