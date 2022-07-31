import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import AboutPage from "./Components/AboutPage";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
