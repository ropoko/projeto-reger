import './button-back-home.style.css'
import { Link } from 'react-router-dom'

function ButtonBackHome() {
	return (
		<div className="wrapper-arrow">
			<Link className="arrow" to={'/'}>
				←
			</Link>
		</div>
	)
}

export default ButtonBackHome
