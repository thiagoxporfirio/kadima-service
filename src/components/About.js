import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn, viewport } from "../variants";
import { Link } from "react-scroll";
import { FaBullseye, FaEye } from "react-icons/fa";
import kadima from "../assets/kadima.jpeg";

const stats = [
	{ end: 15, suffix: "+", label: "Anos de\nExperiência" },
	{ end: 500, suffix: "m²", label: "Área\nIndustrial" },
	{ end: 100, suffix: "+", label: "Obras\nRealizadas" }
];

const About = () => {
	const [ref, inView] = useInView({ threshold: 0.3 });

	return (
		<section
			className="section"
			id="about"
			ref={ref}
			style={{ background: "var(--k-surface)", padding: "6rem 0" }}
		>
			<div className="container mx-auto px-4">
				<div className="flex flex-col lg:flex-row gap-16 lg:items-start">

					{/* Left — image block */}
					<motion.div
						variants={fadeIn("right", 0.1)}
						initial="hidden"
						whileInView="show"
						viewport={viewport}
						className="lg:w-[48%]"
						style={{ position: "relative" }}
					>
						{/* Red border frame */}
						<div
							style={{
								position: "absolute",
								top: "-16px",
								left: "-16px",
								width: "calc(100% - 40px)",
								height: "calc(100% - 40px)",
								border: "2px solid var(--k-crimson)",
								zIndex: 0,
								borderRadius: "2px"
							}}
						/>
						<div style={{ position: "relative", zIndex: 1 }}>
							<img
								src={kadima}
								alt="Kadima Service"
								style={{
									width: "100%",
									height: "480px",
									objectFit: "cover",
									borderRadius: "2px",
									display: "block"
								}}
							/>
							{/* overlay gradient */}
							<div
								style={{
									position: "absolute",
									inset: 0,
									background:
										"linear-gradient(to top, rgba(20,20,20,0.6) 0%, transparent 50%)"
								}}
							/>
						</div>

						{/* Stats over image */}
						<div
							style={{
								position: "absolute",
								bottom: "1.5rem",
								left: "1.5rem",
								right: "1.5rem",
								zIndex: 2,
								display: "flex",
								gap: "1rem"
							}}
						>
							{stats.map((s, i) => (
								<div
									key={i}
									style={{
										flex: 1,
										background: "rgba(20,20,20,0.85)",
										backdropFilter: "blur(8px)",
										border: "1px solid var(--k-border)",
										borderTop: "3px solid var(--k-crimson)",
										padding: "0.75rem",
										textAlign: "center"
									}}
								>
									<div className="stat-num" style={{ fontSize: "1.75rem" }}>
										{inView ? (
											<CountUp start={0} end={s.end} duration={4} />
										) : 0}
										{s.suffix}
									</div>
									<div
										style={{
											fontSize: "0.65rem",
											letterSpacing: "0.1em",
											textTransform: "uppercase",
											color: "var(--k-muted)",
											whiteSpace: "pre-line",
											lineHeight: 1.4,
											marginTop: "4px"
										}}
									>
										{s.label}
									</div>
								</div>
							))}
						</div>
					</motion.div>

					{/* Right — text */}
					<motion.div
						variants={fadeIn("left", 0.2)}
						initial="hidden"
						whileInView="show"
						viewport={viewport}
						className="lg:w-[52%]"
					>
						<span className="accent-line" />
						<p className="overline mb-3">Quem Somos</p>
						<h2 className="h2" style={{ color: "var(--k-white)" }}>
							Excelência em<br />
							<span style={{ color: "var(--k-crimson)" }}>Engenharia Elétrica</span>
						</h2>
						<p
							style={{
								color: "rgba(240,237,232,0.75)",
								marginBottom: "2rem",
								lineHeight: 1.8,
								fontSize: "1.05rem"
							}}
						>
							Na linha de projetos renováveis, a KDM participou de inúmeros
							projetos de tecnologias eólica e fotovoltaica em todo o Brasil, em
							diferentes fases do projeto. A KDM conta com equipamentos
							certificados nos mais avançados laboratórios do Brasil, realizando
							inspeções, testes e certificações em cabos BT, MT e Fibra óptica
							para cumprir as normas regulamentadoras brasileiras e internacionais.
						</p>

						{/* Missão & Visão */}
						<div className="flex flex-col gap-4 mb-8">
							{[
								{
									icon: <FaBullseye />,
									title: "Missão",
									text: "Ser reconhecida como a melhor prestadora de serviço, sempre na busca de soluções e atendimento de qualidade."
								},
								{
									icon: <FaEye />,
									title: "Visão",
									text: "Ser empresa de referência em Telecomunicações e Eletricidade, gerando valor com alta tecnologia e desenvolvimento humano."
								}
							].map((item, i) => (
								<div
									key={i}
									className="shimmer-hover"
									style={{
										background: "var(--k-surface2)",
										border: "1px solid var(--k-border-dim)",
										borderLeft: "3px solid var(--k-crimson)",
										padding: "1.25rem 1.5rem",
										borderRadius: "2px"
									}}
								>
									<div
										className="flex items-center gap-3 mb-2"
										style={{
											fontFamily: "'Barlow Condensed', sans-serif",
											fontWeight: 700,
											fontSize: "1.1rem",
											letterSpacing: "0.06em",
											textTransform: "uppercase",
											color: "var(--k-white)"
										}}
									>
										<span style={{ color: "var(--k-crimson)", fontSize: "1rem" }}>
											{item.icon}
										</span>
										{item.title}
									</div>
									<p
										style={{
											color: "var(--k-muted)",
											fontSize: "0.95rem",
											lineHeight: 1.65,
											margin: 0
										}}
									>
										{item.text}
									</p>
								</div>
							))}
						</div>

						<div className="flex flex-wrap gap-4">
							<Link to="contact" smooth={true}>
								<button className="btn btn-primary">
									<span>Entre em Contato</span>
								</button>
							</Link>
							<Link to="work" smooth={true}>
								<button className="btn btn-outline">
									<span>Nossos Projetos</span>
								</button>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
