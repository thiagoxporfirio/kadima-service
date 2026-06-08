import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const TopHeader = () => {
	return (
		<div
			style={{
				background: "var(--k-surface)",
				borderBottom: "1px solid var(--k-border-dim)"
			}}
		>
			<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center py-2">
				<div className="flex flex-col md:flex-row gap-x-6 gap-y-1 items-center text-sm">
					<a
						href="mailto:contato@kadima.eng.br"
						className="flex items-center gap-2 transition-colors duration-200"
						style={{ color: "var(--k-muted)" }}
						onMouseEnter={e => (e.currentTarget.style.color = "var(--k-white)")}
						onMouseLeave={e => (e.currentTarget.style.color = "var(--k-muted)")}
					>
						<FaEnvelope style={{ color: "var(--k-crimson)" }} />
						<span>contato@kadima.eng.br</span>
					</a>
					<a
						href="tel:+5542999944224"
						className="flex items-center gap-2 transition-colors duration-200"
						style={{ color: "var(--k-muted)" }}
						onMouseEnter={e => (e.currentTarget.style.color = "var(--k-white)")}
						onMouseLeave={e => (e.currentTarget.style.color = "var(--k-muted)")}
					>
						<FaPhone style={{ color: "var(--k-crimson)" }} />
						<span>(42) 99994-4224</span>
					</a>
					<a
						href="https://api.whatsapp.com/send?phone=5542999944224&text=Olá, gostaria de mais informações."
						target="_blank"
						rel="nofollow noreferrer"
						className="flex items-center gap-2 transition-colors duration-200"
						style={{ color: "var(--k-muted)" }}
						onMouseEnter={e => (e.currentTarget.style.color = "var(--k-white)")}
						onMouseLeave={e => (e.currentTarget.style.color = "var(--k-muted)")}
					>
						<FaWhatsapp style={{ color: "#25D366" }} />
						<span>(34) 9915-3060</span>
					</a>
				</div>
				<div className="flex gap-4 mt-1 md:mt-0">
					<a
						href="https://www.instagram.com/kadimaservice/"
						target="_blank"
						rel="noreferrer"
						aria-label="Instagram da Kadima Service"
						style={{ color: "var(--k-muted)", transition: "color 0.2s" }}
						onMouseEnter={e => (e.currentTarget.style.color = "var(--k-fire)")}
						onMouseLeave={e => (e.currentTarget.style.color = "var(--k-muted)")}
					>
						<FaInstagram size={18} />
					</a>
					<a
						href="https://www.linkedin.com/company/kadima-service/"
						target="_blank"
						rel="noreferrer"
						aria-label="LinkedIn da Kadima Service"
						style={{ color: "var(--k-muted)", transition: "color 0.2s" }}
						onMouseEnter={e => (e.currentTarget.style.color = "var(--k-fire)")}
						onMouseLeave={e => (e.currentTarget.style.color = "var(--k-muted)")}
					>
						<FaLinkedin size={18} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default TopHeader;
