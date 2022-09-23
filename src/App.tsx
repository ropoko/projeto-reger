import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

function App() {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Header />
				<Routes>
					<Route path="home" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
