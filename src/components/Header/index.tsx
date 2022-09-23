import { NavLink } from 'react-router-dom'

const Header = () => {
	const activeClassName = 'nav-active'

	return (
		<>
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
		</>
	)
}

export default Header
