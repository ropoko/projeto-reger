/* eslint-disable prettier/prettier */
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'

function App() {
	const activeClassName = 'nav-active'

	return (
		<BrowserRouter>
			<div className="temp-wrapper">
				<header>
					<h1>Projeto Reger</h1>
				</header>
				<nav>
					<NavLink
						to="home"
						className={({ isActive }) => (isActive ? activeClassName : undefined)}
					>
						Home
					</NavLink>
					<NavLink
						to="about"
						className={({ isActive }) => (isActive ? activeClassName : undefined)}
					>
						Sobre
					</NavLink>
					<NavLink
						to="contact"
						className={({ isActive }) => (isActive ? activeClassName : undefined)}
					>
						Contato
					</NavLink>
				</nav>
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
