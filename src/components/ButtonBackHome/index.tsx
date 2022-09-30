import './button-back-home.style.css'
import { Link } from 'react-router-dom'

function ButtonBackHome() {
	return (
		<Link className="arrow" to={'/'}>
			←
		</Link>
	)
}

export default ButtonBackHome
