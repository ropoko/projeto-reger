import '../../styles/pages/home.style.css'

function Team() {
	return (
		<>
			<div className="credits">
				<h1>Sobre o projeto</h1>

				<h2>Objetivo</h2>
				<p className="objective-desc">
					O REGER é uma iniciativa da Diretora da Área de Ciências Exatas,
					Humanas e Sociais, Prof. Dra. Beatriz Antoniassi e da Dra. Dulce
					Helena Jardim Constantino, e também tem o propósito de chamar a
					atenção para que cada ser humano possa fazer a sua parte e ajudar a
					proteger e respeitar o meio ambiente, garantindo um futuro melhor para
					as novas gerações.
				</p>

				<div className="grid">
					<div>
						<div className="authors-dev">
							<h3>Desenvolvedores</h3>
							<p>
								<strong>Professor: </strong>Vinicius Santos Andrade - Ciência da
								Computação
							</p>
							<ul>
								<li>Rodrigo Maganha Stramantinoli</li>
								<li>Roger Santos Barreto</li>
								<li>Felipe Evaristo dos Santos</li>
								<li>Leandro Gomes Zavan</li>
							</ul>
						</div>

						<div className="authors-design">
							<h3>Designers</h3>
							<p>
								<strong>Professora: </strong>Sileide Aparecida - Design
							</p>
							<ul>
								<li>Amanda Scola Gaioti</li>
								<li>Davi Ramos</li>
								<li>Hanna Govedice</li>
							</ul>
						</div>
					</div>
					<img
						className="team-img"
						src="/assets/img_team.svg"
						alt="Imagem meramente Ilustrativa"
					/>
				</div>
			</div>
		</>
	)
}

export default Team
