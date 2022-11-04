import '../../styles/pages/team.style.css'

function Team() {
	return (
		<div className="wrapper">
			<div className="header">
				<img
					className="bg-img"
					src="/assets/the-team-header.svg"
					alt="background"
					aria-hidden="true"
				/>
				<h1 id="team">Nossa Equipe</h1>
				<img
					className="team-img"
					src="/assets/img_team.svg"
					alt="Imagem meramente Ilustrativa"
				/>
			</div>
			<div className="credits">
				<p>
					O REGER é uma iniciativa da Diretora da Área de Ciências Exatas,
					Humanas e Sociais, Prof. Dra. Beatriz Antoniassi e da Dra. Dulce
					Helena Jardim Constantino, e também tem o propósito de chamar a
					atenção para que cada ser humano possa fazer a sua parte e ajudar a
					proteger e respeitar o meio ambiente, garantindo um futuro melhor para
					as novas gerações.
				</p>

				<p>
					Ademais, este site foi desenvolvido por alunos do curso de Ciência da
					Computação, auxiliados pelo Prof. Vinicius Santos Andrade, juntamente
					com alunos do curso de Design auxiliados pela Prof. Sileide Aparecida
				</p>

				<div className="grid">
					<div className="authors-dev">
						<h3>Desenvolvedores</h3>
						<ul>
							<li>Rodrigo Maganha Stramantinoli</li>
							<li>Roger Santos Barreto</li>
							<li>Felipe Evaristo dos Santos</li>
							<li>Leandro Gomes Zavan</li>
						</ul>
					</div>

					<div className="authors-design">
						<h3>Designers</h3>
						<ul>
							<li>Amanda Scola Gaioti</li>
							<li>Davi Ramos</li>
							<li>Hanna Govedice</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Team
