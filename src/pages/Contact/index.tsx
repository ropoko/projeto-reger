import ButtonBackHome from '../../components/ButtonBackHome'
import '../../styles/pages/contact.style.css'

function Contact() {
	return (
		<div className="contact">
			<ButtonBackHome />
			<div className="content">
				<h1>Contato</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
					maiores rerum aperiam exercitationem repudiandae consequuntur facilis,
					nisi assumenda laborum nulla nostrum! Totam fugiat hic, quas nostrum
					nulla esse? Laborum, doloremque.
				</p>
			</div>
			<footer>
				<img src="/assets/unisagrado-logo-white.png" alt="Logo Unisagrado" />
			</footer>
		</div>
	)
}

export default Contact
