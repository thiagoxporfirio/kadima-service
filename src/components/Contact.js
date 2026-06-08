import React from "react";
import { motion } from "framer-motion";
import { fadeIn, viewport } from "../variants";
import {
	FaMapMarkerAlt,
	FaClock,
	FaPhone,
	FaEnvelope,
	FaLinkedin,
	FaInstagram
} from "react-icons/fa";
import ClientCarousel from "./ClientCarousel";

const infoBlocks = [
	{
		icon: <FaMapMarkerAlt />,
		title: "Onde estamos",
		lines: [
			"Rua Simão Pedro de Lisboa, 105",
			"Jardim Primavera",
			"Barrinha — SP"
		]
	},
	{
		icon: <FaClock />,
		title: "Atendimento",
		lines: [
			"Segunda à Quinta: 7h às 17h",
			"Sexta: 7h às 16h"
		]
	},
	{
		icon: <FaPhone />,
		title: "Telefones",
		lines: [
			"+55 42 9994-4224 (Comercial)",
			"+55 34 9915-3060 (Vivian)",
			"+55 42 9911-7846 (Ouvidoria)"
		]
	},
	{
		icon: <FaEnvelope />,
		title: "E-mails",
		links: [
			{ href: "mailto:kadima@kadima.eng.br", label: "kadima@kadima.eng.br" },
			{ href: "mailto:ouvidoria@kadima.eng.br", label: "ouvidoria@kadima.eng.br" },
			{ href: "mailto:vagas@kadima.eng.br", label: "vagas@kadima.eng.br" }
		]
	}
];

const Contact = () => {
	return (
		<section
			className="section"
			id="contact"
			style={{ background: "var(--k-dark)", padding: "6rem 0 4rem" }}
		>
			<div className="container mx-auto px-4">
				<ClientCarousel />

				{/* Section header */}
				<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
					<motion.div
						variants={fadeIn("right", 0.1)}
						initial="hidden"
						whileInView="show"
						viewport={viewport}
					>
						<span className="accent-line" />
						<p className="overline mb-3">Fale com a gente</p>
						<h2
							className="h2"
							style={{ color: "var(--k-white)", marginBottom: 0, lineHeight: 0.95 }}
						>
							Vamos trabalhar
							<br />
							<span style={{ color: "var(--k-crimson)" }}>juntos!</span>
						</h2>
					</motion.div>
					<motion.div
						variants={fadeIn("left", 0.15)}
						initial="hidden"
						whileInView="show"
						viewport={viewport}
						style={{ maxWidth: "360px" }}
					>
						<p
							style={{
								color: "var(--k-muted)",
								fontSize: "0.95rem",
								lineHeight: 1.7,
								marginBottom: "1.25rem"
							}}
						>
							Precisa de um orçamento ou tem alguma dúvida? Nossa equipe está
							pronta para atender você.
						</p>
						<a
							href="https://wa.me/5542999944224?text=Olá, gostaria de mais informações."
							target="_blank"
							rel="noreferrer"
						>
							<button className="btn btn-primary">
								<span>Fale pelo WhatsApp</span>
							</button>
						</a>
					</motion.div>
				</div>

				{/* Info grid */}
				<motion.div
					variants={fadeIn("up", 0.2)}
					initial="hidden"
					whileInView="show"
					viewport={viewport}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
				>
					{infoBlocks.map((block, i) => (
						<div
							key={i}
							className="shimmer-hover"
							style={{
								background: "var(--k-surface)",
								border: "1px solid var(--k-border-dim)",
								borderTop: "3px solid var(--k-crimson)",
								padding: "1.5rem",
								borderRadius: "2px"
							}}
						>
							{/* Title */}
							<div
								className="flex items-center gap-2 mb-3"
								style={{
									fontFamily: "'Barlow Condensed', sans-serif",
									fontWeight: 700,
									fontSize: "1rem",
									letterSpacing: "0.08em",
									textTransform: "uppercase",
									color: "var(--k-white)"
								}}
							>
								<span style={{ color: "var(--k-crimson)", fontSize: "0.9rem" }}>
									{block.icon}
								</span>
								{block.title}
							</div>

							{/* Lines */}
							{block.lines && (
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "4px"
									}}
								>
									{block.lines.map((line, j) => (
										<p
											key={j}
											style={{
												color: "var(--k-muted)",
												fontSize: "0.875rem",
												margin: 0,
												lineHeight: 1.6
											}}
										>
											{line}
										</p>
									))}
								</div>
							)}

							{/* Links */}
							{block.links && (
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "6px"
									}}
								>
									{block.links.map((link, j) => (
										<a
											key={j}
											href={link.href}
											style={{
												color: "var(--k-muted)",
												fontSize: "0.85rem",
												textDecoration: "none",
												transition: "color 0.2s"
											}}
											onMouseEnter={e =>
												(e.currentTarget.style.color = "var(--k-fire)")
											}
											onMouseLeave={e =>
												(e.currentTarget.style.color = "var(--k-muted)")
											}
										>
											{link.label}
										</a>
									))}
								</div>
							)}
						</div>
					))}
				</motion.div>

				{/* Social strip */}
				<motion.div
					variants={fadeIn("up", 0.3)}
					initial="hidden"
					whileInView="show"
					viewport={viewport}
					className="flex items-center gap-4 mt-8"
					style={{
						paddingTop: "2rem",
						borderTop: "1px solid var(--k-border-dim)"
					}}
				>
					<span
						style={{
							fontSize: "0.7rem",
							letterSpacing: "0.15em",
							textTransform: "uppercase",
							color: "var(--k-muted)"
						}}
					>
						Redes Sociais
					</span>
					<a
						href="https://www.linkedin.com/company/kadima-service/"
						target="_blank"
						rel="noreferrer"
						style={{
							color: "var(--k-muted)",
							fontSize: "1.25rem",
							transition: "color 0.2s"
						}}
						onMouseEnter={e => (e.currentTarget.style.color = "var(--k-fire)")}
						onMouseLeave={e => (e.currentTarget.style.color = "var(--k-muted)")}
						aria-label="LinkedIn"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://www.instagram.com/kadimaservice/"
						target="_blank"
						rel="noreferrer"
						style={{
							color: "var(--k-muted)",
							fontSize: "1.25rem",
							transition: "color 0.2s"
						}}
						onMouseEnter={e => (e.currentTarget.style.color = "var(--k-fire)")}
						onMouseLeave={e => (e.currentTarget.style.color = "var(--k-muted)")}
						aria-label="Instagram"
					>
						<FaInstagram />
					</a>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
