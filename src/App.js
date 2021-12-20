import { Routes, Route } from "react-router-dom"

import Characters from "./screen/Characters"
import Home from "./screen/Home"

import Header from "./components/Header"

import "./App.css"

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/characters" element={<Characters />} />
			</Routes>
		</div>
	)
}

export default App
