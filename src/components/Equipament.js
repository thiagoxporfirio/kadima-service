import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, staggerItem, viewport } from "../variants";
import vlf from "../assets/vlf.png";
import dp from "../assets/dp.png";
import tangente from "../assets/tangente.jpeg";
import shirla from "../assets/shirla.webp";
import metrel from "../assets/metrel.png";
import van from "../assets/van.jpeg";
import carro from "../assets/carro.jpeg";
import munk from "../assets/munk.png";
import cat from "../assets/cat.webp";
import caminhaao from "../assets/caminhaao.jpeg";

const WA_LINK =
	"https://api.whatsapp.com/send?phone=5542999944224&text=Ol%C3%A1%2C+encontrei+seu+site+na+busca+do+Google+e+gostaria+de+mais+informa%C3%A7%C3%B5es.+&type=phone_number&app_absent=0";

const equipamentos = [
	{
		src: tangente,
		alt: "Tangente Delta",
		title: "Tangente Delta",
		subtitle: "Análise do grau de degradação da isolação",
		text: "O ensaio de Tangente Delta permite a análise do grau de degradação da isolação, indicando irregularidades diversas, defeitos que produzem descargas parciais, infiltração de água, arborescência, entre outros."
	},
	{
		src: vlf,
		alt: "Viola - VLF",
		title: "VLF",
		subtitle: "Analisador de qualidade de energia",
		text: "VLF (Very Low Frequency): submetemos os cabos a tensões elétricas alternadas em 0,1 Hz por períodos pré-determinados. Indispensável para garantir os requisitos mínimos de desempenho dos cabos isolados de média tensão."
	},
	{
		src: dp,
		alt: "Descarga Parcial e RIV",
		title: "Descarga Parcial (DP) e RIV",
		subtitle: "Tensão de radiointerferência",
		text: "As Descargas Parciais são pequenas descargas elétricas originadas em cavidades internas de um sistema isolante. Sua ocorrência caracteriza uma fragilidade na sustentação dielétrica e pode ocasionar falhas irreversíveis."
	},
	{
		src: shirla,
		alt: "Shirla",
		title: "Shirla",
		subtitle: "Teste de Revestimento de Cabos",
		text: "Equipamento portátil especializado para testes de revestimento de cabos e localização precisa de falhas. Identifica e localiza defeitos no revestimento de cabos elétricos, garantindo a integridade das instalações."
	},
	{
		src: metrel,
		alt: "Metrel",
		title: "Metrel",
		subtitle: "Medidor de Resistência de Terra",
		text: "Equipamento versátil para todos os principais tipos de medição de terras em um único instrumento. Ampla gama de tensões de teste de isolamento, de 50 V a 2500 V."
	}
];

const veiculos = [
	{
		src: van,
		alt: "Van da Kadima",
		title: "Van Laboratório",
		subtitle: "Laboratório Móvel de Comissionamento",
		text: "Equipada com tecnologia de ponta para serviços de comissionamento em campo. Mobilidade e eficiência para testes e análises técnicas diretamente no local necessário."
	},
	{
		src: carro,
		alt: "Carro da Kadima",
		title: "Carro Operacional",
		subtitle: "Deslocamento rápido da equipe técnica",
		text: "Veículo operacional para deslocamento ágil e eficiente da equipe técnica, proporcionando transporte de equipamentos de menor porte para serviços específicos."
	},
	{
		src: munk,
		alt: "Caminhão Munk",
		title: "Caminhão Munk",
		subtitle: "Elevação e movimentação de cargas",
		text: "Equipado com guindaste tipo Munk para operações que necessitam de elevação e movimentação de cargas. Ideal para instalações e transporte de equipamentos pesados em campo."
	},
	{
		src: cat,
		alt: "Retroescavadeira CAT",
		title: "Retroescavadeira CAT",
		subtitle: "Escavação e movimentação de terra",
		text: "Retroescavadeira CAT versátil e robusta, ideal para obras de infraestrutura e preparação de terrenos para instalações elétricas."
	},
	{
		src: caminhaao,
		alt: "Caminhão com Cesto Elevatório",
		title: "Cesto Elevatório",
		subtitle: "Trabalhos seguros em altura",
		text: "Caminhão com cesto elevatório para acesso seguro em trabalhos em altura. Ideal para manutenção de redes elétricas e serviços que necessitam alcance vertical."
	}
];

const ItemCard = ({ item, index }) => (
	<motion.div
		variants={staggerItem}
		style={{
			background: "var(--k-surface)",
			border: "1px solid var(--k-border-dim)",
			borderTop: "3px solid var(--k-crimson)",
			borderRadius: "2px",
			overflow: "hidden",
			display: "flex",
			flexDirection: "column",
			transition: "border-color 0.3s ease, transform 0.3s ease"
		}}
		onMouseEnter={e => {
			e.currentTarget.style.borderColor = "var(--k-crimson)";
			e.currentTarget.style.transform = "translateY(-4px)";
		}}
		onMouseLeave={e => {
			e.currentTarget.style.borderColor = "var(--k-border-dim)";
			e.currentTarget.style.transform = "translateY(0)";
		}}
	>
		{/* Image */}
		<div style={{ height: "220px", overflow: "hidden", position: "relative" }}>
			<img
				src={item.src}
				alt={item.alt}
				style={{
					width: "100%",
					height: "100%",
					objectFit: "cover",
					display: "block",
					transition: "transform 0.5s ease"
				}}
				onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
				onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
			/>
			<div
				style={{
					position: "absolute",
					inset: 0,
					background: "linear-gradient(to top, rgba(20,20,20,0.7) 0%, transparent 55%)"
				}}
			/>
			<span
				style={{
					position: "absolute",
					top: "1rem",
					right: "1rem",
					fontFamily: "'Barlow Condensed', sans-serif",
					fontWeight: 800,
					fontSize: "2.5rem",
					color: "rgba(139,32,32,0.3)",
					lineHeight: 1
				}}
			>
				{String(index + 1).padStart(2, "0")}
			</span>
		</div>

		{/* Content */}
		<div
			style={{
				padding: "1.5rem",
				flex: 1,
				display: "flex",
				flexDirection: "column",
				gap: "0.5rem"
			}}
		>
			<p
				style={{
					fontSize: "0.65rem",
					letterSpacing: "0.15em",
					textTransform: "uppercase",
					color: "var(--k-crimson)",
					fontFamily: "'DM Sans', sans-serif",
					fontWeight: 600,
					margin: 0
				}}
			>
				{item.subtitle}
			</p>
			<h3
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
				{item.title}
			</h3>
			<p
				style={{
					color: "var(--k-muted)",
					fontSize: "0.875rem",
					lineHeight: 1.65,
					margin: 0,
					flex: 1
				}}
			>
				{item.text}
			</p>
			<a
				href={WA_LINK}
				target="_blank"
				rel="noreferrer"
				className="btn btn-outline"
				style={{ marginTop: "1rem", textDecoration: "none", display: "inline-flex" }}
			>
				<span>Saiba mais</span>
			</a>
		</div>
	</motion.div>
);

const SectionBlock = ({ title, subtitle, items }) => (
	<section
		style={{ background: "var(--k-dark)", padding: "5rem 0" }}
	>
		<div className="container mx-auto px-4">
			<motion.div
				variants={fadeIn("up", 0.1)}
				initial="hidden"
				whileInView="show"
				viewport={viewport}
				style={{ marginBottom: "3rem" }}
			>
				<span
					style={{
						display: "block",
						width: "48px",
						height: "3px",
						background: "var(--k-crimson)",
						marginBottom: "1.25rem"
					}}
				/>
				<p
					style={{
						fontSize: "0.75rem",
						fontWeight: 600,
						letterSpacing: "0.2em",
						textTransform: "uppercase",
						color: "var(--k-crimson)",
						marginBottom: "0.5rem"
					}}
				>
					{subtitle}
				</p>
				<h2
					style={{
						fontFamily: "'Barlow Condensed', sans-serif",
						fontWeight: 700,
						fontSize: "clamp(2rem, 5vw, 3.5rem)",
						lineHeight: 1,
						letterSpacing: "0.04em",
						textTransform: "uppercase",
						color: "var(--k-white)",
						margin: 0
					}}
				>
					{title}
				</h2>
			</motion.div>

			<motion.div
				variants={staggerContainer(0.09, 0.12)}
				initial="hidden"
				whileInView="show"
				viewport={viewport}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
			>
				{items.map((item, i) => (
					<ItemCard key={i} item={item} index={i} />
				))}
			</motion.div>
		</div>
	</section>
);

const Equipament = () => (
	<>
		<SectionBlock
			title="Equipamentos"
			subtitle="Locação de equipamentos"
			items={equipamentos}
		/>
		<SectionBlock
			title="Veículos"
			subtitle="Frota disponível"
			items={veiculos}
		/>
	</>
);

export default Equipament;
