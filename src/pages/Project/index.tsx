import ButtonBackHome from '../../components/ButtonBackHome'
import '../../styles/pages/project.style.css'

function Project() {
	return (
		<div className="project">
			<ButtonBackHome />
			<div className="content">
				<h1>Projeto</h1>
				<p>
					O Projeto REGER teve inicio em 2016 e se enquadra como um projeto que
					engloba varios setores da USC e que foca a minimizacao na geracao de
					residuos, se pauta no principio dos <strong>3 Rs:</strong>
				</p>
				<ul>
					<li>Reducao no consumo e desperdicio</li>
					<li>Reutilizacao</li>
					<li>Reciclagem de materiais</li>
				</ul>
			</div>
			<footer>
				<img src="/assets/unisagrado-logo-white.png" alt="Logo Unisagrado" />
			</footer>
		</div>
	)
}

export default Project
