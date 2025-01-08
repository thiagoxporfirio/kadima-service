import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import pqPenh2 from "../assets/pqPenh2.jpeg";
import cemig from "../assets/cemig.jpeg";
import coxilha from "../assets/coxilha.jpeg";
import mel from "../assets/mel.jpeg";

const Work = () => {
	return (
		<section className="section mb-[120px] min-h-screen" id="work">
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
					<motion.div
						variants={fadeIn("left", 0.5)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1"
					>
						<h2 className="h2 text-accent mb-8">Projetos Recentes</h2>

						<h3 className="h3 mb-4">GEL - Complexo Eólico Coxilha Negra</h3>
						<img 
							src={coxilha}
							alt="Complexo Eólico Coxilha Negra"
							className="rounded-lg shadow-xl mb-4"
						/>
						<ul className="list-disc list-inside mb-6">
							<li>RMT 34,5kV</li>
							<li>Construção</li>
							<li>Comissionamento</li>
						</ul>
						
						<h3 className="h3 mb-4">Projetos ENGESP - Linhas de Distribuição CEMIG</h3>
						<img 
							src={cemig}
							alt="Linhas de Distribuição CEMIG"
							className="rounded-lg shadow-xl mb-4"
						/>
						<ul className="list-disc list-inside mb-6">
							<li>Execução</li>
							<li>Comissionamento das LD´s da Cemig</li>
						</ul>
						
					</motion.div>
					<motion.div
						variants={fadeIn("right", 0.5)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1"
					>
						<h3 className="h3 mb-4">Complexo Eólico Serra do Mel I, RN</h3>
						<img 
							src={mel} 
							alt="Complexo Eólico Serra do Mel I"
							className="rounded-lg shadow-xl mb-4"
						/>
						<ul className="list-disc list-inside mb-6">
							<li>Ensaios de descargas parciais em 2020.</li>
						</ul>

						<h3 className="h3 mb-4">Parque Eólico Novo Horizonte (PENH), em Novo Horizonte-BA</h3>
						<img 
							src={pqPenh2}
							alt="Parque Eólico Novo Horizonte"
							className="rounded-lg shadow-xl mb-4"
						/>
						<ul className="list-disc list-inside mb-6">
							<li>Execução</li>
							<li>Comissionamento da comunicação da rede óptica</li>
						</ul>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Work;
