import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, staggerItem, viewport } from "../variants";
import { Link } from "react-scroll";
import sub from "../assets/sub.jpeg";
import elemanu from "../assets/elemanu.jpg";
import fibrao from "../assets/fibrao2.jpeg";
import cam from "../assets/cam.jpg";
import maq from "../assets/maq.jpeg";

const services = [
	{
		name: "Subestações, LT's e RMT",
		short: "Energia / Alta Tensão",
		description:
			"Projetos de entrada de energia, redes e linhas de distribuição de energia de baixa e média tensão até 34,5 kV.",
		image: sub
	},
	{
		name: "Elétrica Industrial",
		short: "Manutenção / Industrial",
		description:
			"Manutenções preventivas incluindo reaperto, medição de resistência de isolação e inspeção termográfica.",
		image: elemanu
	},
	{
		name: "Fibra Óptica",
		short: "Telecomunicações",
		description:
			"Redes ópticas de pequeno e grande porte, instalação de cabos aéreos e subterrâneos, fusão e certificação.",
		image: fibrao
	},
	{
		name: "CFTV",
		short: "Segurança / Imagem",
		description:
			"Soluções em tecnologia de imagem e automação, testes ópticos, terminações e manutenção em redes.",
		image: cam
	},
	{
		name: "Locação de Máquinas",
		short: "Equipamentos / Locação",
		description:
			"Locação de Hypot CC 120 kV, Medidor de Tangente Delta, Reflectômetro, Gerador de Pulso e muito mais.",
		image: maq
	}
];

const ServiceCard = ({ service, index }) => {
	return (
		<motion.div
			variants={staggerItem}
			className="service-card k-card"
			style={{
				borderRadius: "2px",
				overflow: "hidden",
				display: "flex",
				flexDirection: "column"
			}}
		>
			{/* Image */}
			<div
				style={{
					height: "220px",
					overflow: "hidden",
					position: "relative"
				}}
			>
				<img
					src={service.image}
					alt={service.name}
					className="img-cover"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						display: "block"
					}}
				/>
				<div
					style={{
						position: "absolute",
						inset: 0,
						background:
							"linear-gradient(to top, rgba(20,20,20,0.85) 0%, transparent 55%)"
					}}
				/>
				{/* Index */}
				<div
					style={{
						position: "absolute",
						top: "1rem",
						right: "1rem",
						fontFamily: "'Barlow Condensed', sans-serif",
						fontWeight: 800,
						fontSize: "3rem",
						color: "rgba(139,32,32,0.35)",
						lineHeight: 1
					}}
				>
					{String(index + 1).padStart(2, "0")}
				</div>
				{/* Short tag on image bottom */}
				<span
					style={{
						position: "absolute",
						bottom: "0.75rem",
						left: "1rem",
						fontSize: "0.65rem",
						letterSpacing: "0.15em",
						textTransform: "uppercase",
						color: "var(--k-crimson)",
						fontFamily: "'DM Sans', sans-serif",
						fontWeight: 600
					}}
				>
					{service.short}
				</span>
			</div>

			{/* Content */}
			<div
				style={{
					padding: "1.5rem",
					flex: 1,
					display: "flex",
					flexDirection: "column",
					gap: "0.75rem",
					borderTop: "3px solid var(--k-crimson)"
				}}
			>
				<h4
					style={{
						fontFamily: "'Barlow Condensed', sans-serif",
						fontWeight: 700,
						fontSize: "1.3rem",
						letterSpacing: "0.04em",
						textTransform: "uppercase",
						color: "var(--k-white)",
						margin: 0
					}}
				>
					{service.name}
				</h4>
				<p
					style={{
						color: "var(--k-muted)",
						fontSize: "0.9rem",
						lineHeight: 1.65,
						margin: 0,
						flex: 1
					}}
				>
					{service.description}
				</p>
			</div>
		</motion.div>
	);
};

const Services = () => {
	return (
		<section
			className="section"
			id="services"
			style={{ background: "var(--k-dark)", padding: "6rem 0" }}
		>
			<div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
				{/* Header row */}
				<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
					<motion.div
						variants={fadeIn("right", 0.1)}
						initial="hidden"
						whileInView="show"
						viewport={viewport}
					>
						<span className="accent-line" />
						<p className="overline mb-3">O que fazemos</p>
						<h2 className="h2" style={{ color: "var(--k-white)", marginBottom: "0" }}>
							Nossos <span style={{ color: "var(--k-crimson)" }}>Serviços</span>
						</h2>
					</motion.div>
					<motion.div
						variants={fadeIn("left", 0.2)}
						initial="hidden"
						whileInView="show"
						viewport={viewport}
					>
						<p
							style={{
								color: "var(--k-muted)",
								maxWidth: "380px",
								fontSize: "0.95rem",
								lineHeight: 1.7
							}}
						>
							Soluções completas em engenharia elétrica e telecomunicações para
							projetos industriais e de energia renovável.
						</p>
						<Link to="work" smooth={true} className="mt-4 inline-block">
							<button className="btn btn-outline" style={{ marginTop: "1rem" }}>
								<span>Ver Projetos</span>
							</button>
						</Link>
					</motion.div>
				</div>

				{/* Cards grid */}
				<motion.div
					variants={staggerContainer(0.08, 0.1)}
					initial="hidden"
					whileInView="show"
					viewport={viewport}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{services.map((service, index) => (
						<ServiceCard key={index} service={service} index={index} />
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
