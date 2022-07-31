import logo from "./logo.svg";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	HashRouter,
} from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import AboutPage from "./Components/AboutPage";

function App() {
	return (
		<div>
			<HashRouter>
				<Routes>
					<Route path='/hosting' element={<HomeScreen />} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
