import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, staggerItem, viewport } from "../variants";
import Footer from "./Footer";
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
		title: "TANGENTE DELTA - Análise do grau de degradação da isolação",
		text: "O ensaio de Tangente Delta permite a análise do grau de degradação da isolação, este ensaio também indica irregularidades diversas, defeitos que produzem descargas parciais, infiltração de água, arborescência, entre outros. Onde, é possível verificar tendências e reduzir a incidência de falhas inesperadas. A norma IEEE 400.2-2013 estabelece os critérios para os ensaios em cabos isolados com VLF e Tangente de Delta.",
		titleAttr: "Saiba mais sobre Tangente Delta"
	},
	{
		src: vlf,
		alt: "Viola - VLF",
		title: "Analisador de qualidade de energia (VLF)",
		text: "VLF (Very Low Frequency): Nos ensaios de Tensão Aplicada VLF, submetemos os cabos a tensões elétricas alternadas em 0,1 Hz por períodos pré-determinados. Seja na etapa de comissionamento ou durante a operação, é indispensável garantir os requisitos mínimos de desempenho dos cabos isolados de média tensão.",
		titleAttr: "Saiba mais sobre Viola - VLF"
	},
	{
		src: dp,
		alt: "Descarga Parcial e RIV",
		title: "DESCARGA PARCIAL (DP) e TENSÃO DE RADIOINTERFERÊNCIA (RIV)",
		text: "As Descargas Parciais são pequenas descargas elétricas originadas em cavidades internas de um sistema isolante ou em sua superfície. Sua ocorrência caracteriza uma fragilidade na sustentação dielétrica do material isolante e sua evolução pode ocasionar falhas e danos irreversíveis ao equipamento elétrico.",
		titleAttr: "Saiba mais sobre Descarga Parcial"
	},
	{
		src: shirla,
		alt: "Shirla",
		title: "SHIRLA - Teste de Revestimento de Cabos",
		text: "O Shirla é um equipamento portátil especializado para testes de revestimento de cabos e localização precisa de falhas. Com sua tecnologia avançada, permite identificar e localizar defeitos no revestimento de cabos elétricos, garantindo a integridade e segurança das instalações.",
		titleAttr: "Saiba mais sobre Shirla"
	},
	{
		src: metrel,
		alt: "Metrel",
		title: "METREL - Medidor de Resistência de Terra",
		text: "Equipamento versátil que permite a realização de todos os principais tipos de medição de terras em um único instrumento. Oferece sequências automáticas programáveis e uma ampla gama de tensões de teste de isolamento, variando de 50 V a 2500 V, garantindo medições precisas e confiáveis.",
		titleAttr: "Saiba mais sobre Metrel"
	}
];

const veiculos = [
	{
		src: van,
		alt: "Van da Kadima",
		title: "VAN DA KADIMA - Laboratório Móvel de Comissionamento",
		text: "Nossa van laboratório é equipada com tecnologia de ponta para realizar serviços de comissionamento em campo. Oferece mobilidade e eficiência para testes e análises técnicas, permitindo atendimento ágil e preciso diretamente no local necessário.",
		titleAttr: "Saiba mais sobre Van da Kadima"
	},
	{
		src: carro,
		alt: "Carro da Kadima",
		title: "CARRO OPERACIONAL",
		text: "Veículo operacional para deslocamento rápido e eficiente da equipe técnica, proporcionando agilidade no atendimento aos clientes e transporte de equipamentos de menor porte para serviços específicos.",
		titleAttr: "Saiba mais sobre nosso Carro Operacional"
	},
	{
		src: munk,
		alt: "Caminhão Munk",
		title: "CAMINHÃO MUNK",
		text: "Caminhão equipado com guindaste tipo Munk para operações que necessitam de elevação e movimentação de cargas. Ideal para instalações, manutenções e transporte de equipamentos pesados em campo.",
		titleAttr: "Saiba mais sobre nosso Caminhão Munk"
	},
	{
		src: cat,
		alt: "Retroescavadeira CAT",
		title: "RETROESCAVADEIRA CAT",
		text: "Retroescavadeira CAT para serviços de escavação e movimentação de terra. Equipamento versátil e robusto, ideal para obras de infraestrutura e preparação de terrenos para instalações elétricas.",
		titleAttr: "Saiba mais sobre nossa Retroescavadeira"
	},
	{
		src: caminhaao,
		alt: "Caminhão com Cesto Elevatório",
		title: "CAMINHÃO COM CESTO ELEVATÓRIO",
		text: "Caminhão equipado com cesto elevatório que proporciona acesso seguro e eficiente para trabalhos em altura. Ideal para manutenção de iluminação pública, redes elétricas e serviços que necessitam alcance vertical com segurança.",
		titleAttr: "Saiba mais sobre nosso Caminhão com Cesto Elevatório"
	}
];

const CardGrid = ({ items, imageClass = "h-auto" }) => (
	<motion.div
		variants={staggerContainer(0.09, 0.12)}
		initial="hidden"
		whileInView="show"
		viewport={viewport}
		className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
	>
		{items.map((item, index) => (
			<motion.div
				key={index}
				variants={staggerItem}
				className="border rounded-lg p-4 shadow-lg flex flex-col bg-white"
			>
				<div className={`mb-4 ${imageClass !== "h-auto" ? "h-[250px]" : ""}`}>
					<img
						src={item.src}
						alt={item.alt}
						className={`w-full ${imageClass} object-cover rounded-md`}
					/>
				</div>
				<div className="flex-grow">
					<h3 className="text-xl font-semibold mb-2">{item.title}</h3>
					<p className="mb-4 leading-relaxed">{item.text}</p>
				</div>
				<a
					href={WA_LINK}
					title={item.titleAttr}
					className="btn btn-lg mt-auto flex text-center justify-center items-center"
				>
					Saiba mais
				</a>
			</motion.div>
		))}
	</motion.div>
);

const Equipament = () => {
	return (
		<>
			{/* Equipment Section */}
			<section className="section">
				<div className="container mx-auto">
					<motion.div
						variants={fadeIn("up", 0.1)}
						initial="hidden"
						whileInView="show"
						viewport={viewport}
						className="mb-10"
					>
						<h2 className="h2 text-accent">Equipamentos</h2>
						<p className="text-lg mb-8">Equipamentos de medição</p>
					</motion.div>
					<CardGrid items={equipamentos} imageClass="h-auto" />
				</div>
			</section>

			{/* Vehicles Section */}
			<section className="section">
				<div className="container mx-auto">
					<motion.div
						variants={fadeIn("up", 0.1)}
						initial="hidden"
						whileInView="show"
						viewport={viewport}
						className="mb-10"
					>
						<h2 className="h2 text-accent">Veículos</h2>
						<p className="text-lg mb-8">Veículos disponíveis para o trabalho</p>
					</motion.div>
					<CardGrid items={veiculos} imageClass="h-[250px]" />
				</div>
			</section>

			<Footer />
		</>
	);
};

export default Equipament;

