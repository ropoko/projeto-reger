import './header.style.css'

const Header = () => {
	return (
		<header>
			<img
				src="https://cdns1.2rscms.com.br/custom/2008/uploads/header/topo_60f18c0fd3099.png"
				alt="Logo Unisagrado"
			/>
			<h1>
				{' '}
				<strong className="highlight">REGER - Re</strong>dução da{' '}
				<strong className="highlight">Ge</strong>ração de
				<strong className="highlight"> R</strong>esíduos
			</h1>
		</header>
	)
}

export default Header
