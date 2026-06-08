import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
	return (
		<a
			href="https://wa.me/5542999944224?text=Olá, gostaria de mais informações sobre os serviços da Kadima."
			target="_blank"
			rel="noreferrer"
			aria-label="WhatsApp"
			style={{
				position: "fixed",
				bottom: "1.5rem",
				right: "1.5rem",
				width: "52px",
				height: "52px",
				background: "#25D366",
				borderRadius: "50%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
				zIndex: 100,
				transition: "transform 0.2s ease, box-shadow 0.2s ease"
			}}
			onMouseEnter={e => {
				e.currentTarget.style.transform = "scale(1.1)";
				e.currentTarget.style.boxShadow = "0 6px 28px rgba(37,211,102,0.5)";
			}}
			onMouseLeave={e => {
				e.currentTarget.style.transform = "scale(1)";
				e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.35)";
			}}
		>
			<FaWhatsapp size={26} color="#fff" />
		</a>
	);
};

export default WhatsAppButton;
