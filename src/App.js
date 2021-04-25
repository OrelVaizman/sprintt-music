import './styles/_style.scss';
import { HashRouter as Router } from 'react-router-dom';
import SideNavigation from './cmps/SideNavigation/SideNavigation';
import Routerview from './router/Routerview';
import Player from './cmps/Player/Player';

function App() {
	return (
		<div className="App">
			<Router>
				<SideNavigation />
				<main>
					<Routerview />
				</main>
				<Player />
			</Router>
		</div>
	);
}

export default App;
