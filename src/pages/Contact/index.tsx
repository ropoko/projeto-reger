import ButtonBackHome from '../../components/ButtonBackHome'
import '../../styles/pages/contact.style.css'

function Contact() {
	return (
		<div className="contact">
			<ButtonBackHome />
			<div className="content">
				<h1>Onde estamos</h1>
				<p>
					Atualmente o projeto esta em diversas localidades diferentes, como:
				</p>
				<ul>
					<li>Centro Socio Educativo Irma Adelaide</li>
					<li>Colegio Sao Francisco, Bauru</li>
					<li>Colegio Nossa Senhora Aparecida, Aracatuba</li>
					<li>Estamos vinculados a Laudato Si Action, de Roma</li>
				</ul>
			</div>
			<footer>
				<img src="/assets/unisagrado-logo-white.png" alt="Logo Unisagrado" />
			</footer>
		</div>
	)
}

export default Contact
