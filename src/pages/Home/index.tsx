import React from 'react'
import ButtonLink from '../../components/ButtonLink'
import Header from '../../components/Header'
import '../../styles/pages/home.style.css'
import Team from '../Team'

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
			<Team />
		</>
	)
}

export default Home
