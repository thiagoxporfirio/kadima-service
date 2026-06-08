import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, staggerItem, viewport } from "../variants";
import pqPenh2 from "../assets/pqPenh2.jpeg";
import serv from "../assets/serv.jpeg";
import coxilha from "../assets/coxilha.jpeg";
import mel from "../assets/mel.jpeg";

const projects = [
	{
		title: "Complexo Eólico Coxilha Negra",
		client: "GEL",
		image: coxilha,
		tags: ["RMT 34,5kV", "Construção", "Comissionamento"]
	},
	{
		title: "Linhas de Distribuição CEMIG",
		client: "ENGESP",
		image: serv,
		tags: ["Execução", "Comissionamento LD's CEMIG"]
	},
	{
		title: "Serra do Mel I",
		client: "Complexo Eólico — RN",
		image: mel,
		tags: ["Ensaios de Descargas Parciais 2020"]
	},
	{
		title: "Parque Eólico Novo Horizonte",
		client: "PENH — Novo Horizonte, BA",
		image: pqPenh2,
		tags: ["Execução", "Comissionamento Rede Óptica"]
	}
];

const ProjectCard = ({ project }) => {
	return (
		<motion.article
			variants={staggerItem}
			className="shimmer-hover"
			style={{
				background: "var(--k-surface)",
				border: "1px solid var(--k-border-dim)",
				borderRadius: "2px",
				overflow: "hidden",
				cursor: "default",
				transition: "border-color 0.3s ease"
			}}
			onMouseEnter={e =>
				(e.currentTarget.style.borderColor = "var(--k-border)")
			}
			onMouseLeave={e =>
				(e.currentTarget.style.borderColor = "var(--k-border-dim)")
			}
		>
			{/* Image */}
			<div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
				<img
					src={project.image}
					alt={project.title}
					className="img-cover"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						display: "block",
						transition: "transform 0.5s ease"
					}}
					onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
					onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
				/>
				<div
					style={{
						position: "absolute",
						inset: 0,
						background:
							"linear-gradient(to top, rgba(20,20,20,0.7) 0%, transparent 50%)"
					}}
				/>
				{/* Client badge */}
				<span
					style={{
						position: "absolute",
						top: "1rem",
						left: "1rem",
						background: "var(--k-crimson)",
						color: "var(--k-white)",
						fontFamily: "'Barlow Condensed', sans-serif",
						fontWeight: 700,
						fontSize: "0.7rem",
						letterSpacing: "0.12em",
						textTransform: "uppercase",
						padding: "0.25rem 0.75rem",
						borderRadius: "2px"
					}}
				>
					{project.client}
				</span>
			</div>

			{/* Content */}
			<div style={{ padding: "1.5rem" }}>
				<h3
					style={{
						fontFamily: "'Barlow Condensed', sans-serif",
						fontWeight: 700,
						fontSize: "1.3rem",
						letterSpacing: "0.04em",
						textTransform: "uppercase",
						color: "var(--k-white)",
						marginBottom: "1rem",
						lineHeight: 1.2
					}}
				>
					{project.title}
				</h3>
				<div className="flex flex-wrap gap-2">
					{project.tags.map((tag, i) => (
						<span
							key={i}
							style={{
								display: "inline-block",
								background: "var(--k-surface2)",
								border: "1px solid var(--k-border-dim)",
								color: "var(--k-muted)",
								fontSize: "0.72rem",
								letterSpacing: "0.1em",
								textTransform: "uppercase",
								padding: "0.2rem 0.65rem",
								borderRadius: "2px"
							}}
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</motion.article>
	);
};

const Work = () => {
	return (
		<section
			className="section"
			id="work"
			style={{ background: "var(--k-surface)", padding: "6rem 0" }}
		>
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
					<motion.div
						variants={fadeIn("right", 0.1)}
						initial="hidden"
						whileInView="show"
						viewport={viewport}
					>
						<span className="accent-line" />
						<p className="overline mb-3">Portfólio</p>
						<h2
							className="h2"
							style={{ color: "var(--k-white)", marginBottom: 0 }}
						>
							Projetos <span style={{ color: "var(--k-crimson)" }}>Recentes</span>
						</h2>
					</motion.div>
					<motion.p
						variants={fadeIn("left", 0.15)}
						initial="hidden"
						whileInView="show"
						viewport={viewport}
						style={{
							color: "var(--k-muted)",
							maxWidth: "360px",
							fontSize: "0.95rem",
							lineHeight: 1.7
						}}
					>
						Obras entregues em todo o Brasil, do nordeste ao sul, em projetos de
						energia eólica, fotovoltaica e distribuição elétrica.
					</motion.p>
				</div>

				{/* Grid */}
				<motion.div
					variants={staggerContainer(0.1, 0.1)}
					initial="hidden"
					whileInView="show"
					viewport={viewport}
					className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
				>
					{projects.map((p, i) => (
						<ProjectCard key={i} project={p} />
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Work;
