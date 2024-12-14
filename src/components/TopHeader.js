import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const TopHeader = () => {
	return (
		<div className="top-header bg-primary text-white py-2">
			<div className="container mx-auto flex justify-between items-center">
				<div className="top-header__first flex space-x-4">
					<a href="mailto:contato@kadima.eng.br" className="header__contacts-link flex items-center space-x-2">
						<FaEnvelope />
						<span>contato@kadima.eng.br</span>
					</a>
					<a href="tel:+5542999944224" className="header__contacts-link flex items-center space-x-2">
						<FaPhone />
						<span>(42) 99994-4224</span>
					</a>
					<a href="https://api.whatsapp.com/send?phone=5542999944224&amp;text=Ol%C3%A1%2C+encontrei+seu+site+na+busca+do+Google+e+gostaria+de+mais+informa%C3%A7%C3%B5es.+&amp;type=phone_number&amp;app_absent=0" target="_blank" rel="nofollow" className="header__contacts-link flex items-center space-x-2">
						<FaWhatsapp />
						<span>(34) 9915-3060</span>
					</a>
				</div>
				<div className="top-header__last flex space-x-4">
					<a href="https://www.instagram.com/kadimaservice/" target="_blank" className="header__contacts-link" aria-label="Veja o Instagram da Kadima Service">
						<FaInstagram />
					</a>
					<a href="https://www.linkedin.com/company/kadima-service/" target="_blank" className="header__contacts-link" aria-label="Veja o Linkedin da Kadima Service">
						<FaLinkedin />
					</a>
				</div>
			</div>
		</div>
	);
};

export default TopHeader;