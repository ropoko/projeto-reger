import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Project from './pages/Project'
import Tips from './pages/Tips'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="home" element={<Home />} />
				<Route path="project" element={<Project />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="tips" element={<Tips />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
