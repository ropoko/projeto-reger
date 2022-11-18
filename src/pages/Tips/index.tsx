import ButtonBackHome from '../../components/ButtonBackHome'
import '../../styles/pages/tips.style.css'

function Tips() {
	return (
		<div className="tips">
			<ButtonBackHome />
			<div className="content">
				<h1>Dicas</h1>
				<p>
					Estamos presentes por todo o campus Unisagrado, seja por meio dos
					pontos de hidratacao ou dos pontos para descarte de residuo,
					entretanto, como podemos levar a essencia do Reger para casa e por
					onde estivermos.
				</p>
			</div>
			<footer>
				<img src="/assets/unisagrado-logo-white.png" alt="Logo Unisagrado" />
			</footer>
		</div>
	)
}

export default Tips
