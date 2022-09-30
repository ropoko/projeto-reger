import { Link } from 'react-router-dom'
import './button.style.css'

const ButtonLink = ({
	text,
	color,
	link,
}: {
	text: string
	color: string
	link: string
}) => {
	return (
		<Link
			style={{ backgroundColor: '#' + color }}
			className="button-link"
			to={link}
		>
			{text}
		</Link>
	)
}

export default ButtonLink
