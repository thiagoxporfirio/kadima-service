import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, staggerItem, viewport } from "../variants";
import pqPenh2 from "../assets/pqPenh2.jpeg";
import serv from "../assets/serv.jpeg";
import coxilha from "../assets/coxilha.jpeg";
import mel from "../assets/mel.jpeg";

const projects = [
	{
		title: "GEL - Complexo Eólico Coxilha Negra",
		image: coxilha,
		items: ["RMT 34,5kV", "Construção", "Comissionamento"]
	},
	{
		title: "Projetos ENGESP - Linhas de Distribuição CEMIG",
		image: serv,
		items: ["Execução", "Comissionamento das LD's da Cemig"]
	},
	{
		title: "Complexo Eólico Serra do Mel I, RN",
		image: mel,
		items: ["Ensaios de descargas parciais em 2020."]
	},
	{
		title: "Parque Eólico Novo Horizonte (PENH), em Novo Horizonte-BA",
		image: pqPenh2,
		items: ["Execução", "Comissionamento da comunicação da rede óptica"]
	}
];

const Work = () => {
	return (
		<section className="section" id="work">
			<div className="container mx-auto">
				{/* Heading */}
				<motion.h2
					variants={fadeIn("up", 0.1)}
					initial="hidden"
					whileInView="show"
					viewport={viewport}
					className="h2 text-accent mb-10"
				>
					Projetos Recentes
				</motion.h2>

				{/* Cards grid */}
				<motion.div
					variants={staggerContainer(0.12, 0.1)}
					initial="hidden"
					whileInView="show"
					viewport={viewport}
					className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
				>
					{projects.map((project, index) => (
						<motion.div
							key={index}
							variants={staggerItem}
							className="flex flex-col"
						>
							<h3 className="h3 mb-4">{project.title}</h3>
							<img
								src={project.image}
								alt={project.title}
								className="rounded-lg shadow-xl mb-4 w-full h-[220px] sm:h-[260px] object-cover"
							/>
							<ul className="list-disc list-inside space-y-1">
								{project.items.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Work;

