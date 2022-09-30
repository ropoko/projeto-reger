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
				</div>
				<div className="buttons">
					<ButtonLink link="/project" color="fc000a" text="O Projeto" />
					<ButtonLink link="/about" color="a6131a" text="O quê fazemos" />
					<ButtonLink link="/contact" color="fc000a" text="Onde estamos" />
					<ButtonLink link="/tips" color="a6131a" text="Dicas" />
				</div>
			</div>
		</>
	)
}

export default Home
