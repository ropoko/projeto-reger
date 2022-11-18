import ButtonBackHome from '../../components/ButtonBackHome'
import '../../styles/pages/about.style.css'

function About() {
	return (
		<div className="about">
			<ButtonBackHome />
			<div className="content">
				<h1>O que fazemos</h1>
				<p>
					Diagnosticamos, conscientizamos, elaboramos e divulgamos propostas de
					intervencao para depois implementa-las na rotina do estabelecimento.
					Reunimos dados de anos anteriores e os comparamos.
				</p>
				<p>
					o projeto REGER busca trazer e aprendizagem baseada em problemas,
					utilizando-se muito da comunicacao visual com cores e textos
					chamativos e incentivadores
				</p>
			</div>
			<footer>
				<img src="/assets/unisagrado-logo-white.png" alt="Logo Unisagrado" />
			</footer>
		</div>
	)
}

export default About
