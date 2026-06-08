import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import init1 from "../assets/init1.jpg";
import init2 from "../assets/init2.jpeg";
import init3 from "../assets/init3.jpg";
import LogoMark from "../assets/new/logos-kadima-energia-que-impulsiona-v016.jpg";

const sliderSettings = {
	dots: true,
	infinite: true,
	speed: 800,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5500,
	fade: true,
	cssEase: "ease-in-out",
	arrows: false
};

const Banner = () => {
	return (
		<section id="home" style={{ position: "relative" }}>
			{/* Full-viewport carousel with overlay */}
			<div
				style={{
					position: "relative",
					height: "100vh",
					minHeight: "600px",
					overflow: "hidden"
				}}
			>
				<Slider {...sliderSettings} style={{ height: "100%" }}>
					{[init1, init2, init3].map((img, i) => (
						<div key={i}>
							<img
								src={img}
								alt=""
								style={{
									width: "100%",
									height: "100vh",
									minHeight: "600px",
									objectFit: "cover",
									display: "block"
								}}
							/>
						</div>
					))}
				</Slider>

				{/* Dark gradient overlay */}
				<div
					style={{
						position: "absolute",
						inset: 0,
						background:
							"linear-gradient(to right, rgba(20,20,20,0.88) 0%, rgba(20,20,20,0.55) 50%, rgba(20,20,20,0.3) 100%)",
						zIndex: 1
					}}
				/>

				{/* Bottom diagonal fade */}
				<div
					style={{
						position: "absolute",
						bottom: 0,
						left: 0,
						right: 0,
						height: "200px",
						background:
							"linear-gradient(to bottom, transparent, var(--k-dark))",
						zIndex: 2
					}}
				/>

				{/* Crimson accent stripe */}
				<div
					style={{
						position: "absolute",
						left: 0,
						top: 0,
						bottom: 0,
						width: "4px",
						background:
							"linear-gradient(to bottom, var(--k-crimson), transparent)",
						zIndex: 3
					}}
				/>

				{/* Hero content */}
				<div
					style={{
						position: "absolute",
						inset: 0,
						zIndex: 4,
						display: "flex",
						alignItems: "center"
					}}
				>
					<div className="container mx-auto px-4 lg:px-8">
						<div style={{ maxWidth: "680px" }}>
							{/* Overline */}
							<motion.p
								variants={fadeIn("up", 0.05)}
								initial="hidden"
								animate="show"
								className="overline flex items-center gap-3 mb-6"
							>
								<span className="pulse-dot" />
								Energia que impulsiona
							</motion.p>

							{/* Main headline */}
							<motion.h1
								variants={fadeIn("up", 0.15)}
								initial="hidden"
								animate="show"
								className="h1"
								style={{
									fontSize: "clamp(3.5rem, 10vw, 8rem)",
									color: "var(--k-white)",
									marginBottom: "1.25rem"
								}}
							>
								KADIMA
								<br />
								<span style={{ color: "var(--k-crimson)" }}>SERVICE</span>
							</motion.h1>

							{/* Type animation subtitle */}
							<motion.div
								variants={fadeIn("up", 0.28)}
								initial="hidden"
								animate="show"
								style={{
									fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
									color: "rgba(240,237,232,0.75)",
									marginBottom: "2.5rem",
									fontFamily: "'Barlow Condensed', sans-serif",
									fontWeight: 500,
									letterSpacing: "0.06em",
									textTransform: "uppercase"
								}}
							>
								Especialistas em{" "}
								<TypeAnimation
									sequence={[
										"Automação Industrial",
										2000,
										"Engenharia Elétrica",
										2000,
										"Sistemas de Controle",
										2000,
										"Projetos Elétricos",
										2000
									]}
									speed={50}
									style={{ color: "var(--k-fire)" }}
									wrapper="span"
									repeat={Infinity}
								/>
							</motion.div>

							{/* CTAs */}
							<motion.div
								variants={fadeIn("up", 0.4)}
								initial="hidden"
								animate="show"
								className="flex flex-wrap gap-4"
							>
								<Link to="contact" smooth={true}>
									<button className="btn btn-primary">
										<span>Solicite um Orçamento</span>
									</button>
								</Link>
								<Link to="services" smooth={true}>
									<button className="btn btn-outline">
										<span>Nossos Serviços</span>
									</button>
								</Link>
							</motion.div>

							{/* Stats strip */}
							<motion.div
								variants={fadeIn("up", 0.52)}
								initial="hidden"
								animate="show"
								className="flex gap-8 mt-12"
							>
								{[
									{ n: "15+", label: "Anos de Experiência" },
									{ n: "500m²", label: "Área Industrial" },
									{ n: "100+", label: "Obras Realizadas" }
								].map((s, i) => (
									<div
										key={i}
										style={{
											paddingLeft: i > 0 ? "2rem" : 0,
											borderLeft: i > 0 ? "1px solid var(--k-border)" : "none"
										}}
									>
										<div
											style={{
												fontFamily: "'Barlow Condensed', sans-serif",
												fontWeight: 800,
												fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
												color: "var(--k-crimson)",
												lineHeight: 1
											}}
										>
											{s.n}
										</div>
										<div
											style={{
												fontSize: "0.75rem",
												color: "var(--k-muted)",
												textTransform: "uppercase",
												letterSpacing: "0.12em",
												marginTop: "4px"
											}}
										>
											{s.label}
										</div>
									</div>
								))}
							</motion.div>
						</div>
					</div>
				</div>

				{/* Watermark logo mark */}
				<div
					style={{
						position: "absolute",
						right: "-40px",
						top: "50%",
						transform: "translateY(-50%)",
						zIndex: 2,
						opacity: 0.07,
						pointerEvents: "none",
						width: "520px",
						height: "520px"
					}}
				>
					<img
						src={LogoMark}
						alt=""
						style={{ width: "100%", height: "100%", objectFit: "contain" }}
					/>
				</div>

				{/* Scroll indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5, duration: 0.8 }}
					style={{
						position: "absolute",
						bottom: "2.5rem",
						right: "2rem",
						zIndex: 5,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "8px"
					}}
				>
					<span
						style={{
							fontSize: "0.65rem",
							letterSpacing: "0.2em",
							textTransform: "uppercase",
							color: "var(--k-muted)",
							writingMode: "vertical-rl"
						}}
					>
						Scroll
					</span>
					<div
						style={{
							width: "1px",
							height: "48px",
							background:
								"linear-gradient(to bottom, var(--k-crimson), transparent)"
						}}
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default Banner;
