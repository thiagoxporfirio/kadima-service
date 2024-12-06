import React from "react";
import {
	FaLinkedin,
	FaFacebook
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-black p-6 md:p-10 text-white">
			<div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
				<div>
					<h4 className="font-bold mb-2 text-accent">CONTATO</h4>
					<p>support@certopelocerto.com</p>
					<div className="flex space-x-4 mt-4">
						<a
							href="https://www.linkedin.com/company/kadima-service/?viewAsMember=true"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-accent"
						>
							<FaLinkedin size={24} />
						</a>
						<a
							href="https://www.facebook.com/profile.php?id=61566927685820"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-accent"
						>
							<FaFacebook size={24} />
						</a>
					</div>
				</div>

				<div>
					<h4 className="font-bold mb-2 text-accent">Onde estamos</h4>
					<p>Rua Simão Pedro de Lisboa, 105</p>
					<p>Jardim Primavera</p>
					<p>Barrinha - SP</p>
					<a
						href="https://www.google.com/maps"
						className="no-underline hover:text-accent"
					>
						VISUALIZAR NO MAPA
					</a>
				</div>

				<div>
					<h4 className="font-bold mb-2 text-accent">Atendimento</h4>
					<p>Segunda à Quinta</p>
					<p>Das 7h às 17h</p>
					<p>Sexta</p>
					<p>Das 7h às 16h</p>
				</div>

				<div>
					<h4 className="font-bold mb-2 text-accent">CONTATO</h4>
					<p>Telefone: Luiz Henrique - +55 42 9994-4224</p>
					<p>WhatsApp: Vivian Araujo - +55 34 9915-3060</p>
					<p>
						Email:{" "}
						<a href="mailto:wilza@kadima.eng.br" className="hover:text-accent">
							wilza@kadima.eng.br
						</a>
					</p>
					<p>
						Email:{" "}
						<a
							href="mailto:luiz.souza@kadima.eng.br"
							className="hover:text-accent"
						>
							luiz.souza@kadima.eng.br
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
