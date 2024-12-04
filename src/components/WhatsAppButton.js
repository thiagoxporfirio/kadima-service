import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
	const handleWhatsAppClick = () => {
		window.open(
			"https://wa.me/1234567890?text=Olá, gostaria de mais informações.",
			"_blank"
		);
	};

	return (
		<div
			onClick={handleWhatsAppClick}
			className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 cursor-pointer flex items-center justify-center"
		>
			<FaWhatsapp size={24} />
		</div>
	);
};

export default WhatsAppButton;
