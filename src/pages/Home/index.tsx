import React from 'react'
import ButtonLink from '../../components/ButtonLink'
import Header from '../../components/Header'
import '../../styles/pages/home.style.css'

function Home() {
	return (
		<>
			<div className="background">
				<div className="header-wrapper">
					<Header />
					<button type="button" className="button-credits">
						<img src="/assets/arrow-down.svg" alt="arrow-down" />
						Créditos
					</button>
				</div>
				<div className="buttons">
					<ButtonLink link="/project" color="fc000a" text="O Projeto" />
					<ButtonLink link="/about" color="a6131a" text="O quê fazemos" />
					<ButtonLink link="/contact" color="fc000a" text="Onde estamos" />
					<ButtonLink link="/tips" color="a6131a" text="Dicas" />
				</div>
			</div>
			<div className="credits">
				<h1>Créditos</h1>

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

export default Home
