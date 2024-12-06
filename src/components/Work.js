import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

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
							src="https://placehold.co/600x400/1a1a1a/white?text=Complexo+Eólico+Coxilha+Negra" 
							alt="Complexo Eólico Coxilha Negra"
							className="rounded-lg shadow-xl mb-4"
						/>
						<ul className="list-disc list-inside mb-6">
							<li>RMT 34,5kV</li>
							<li>Construção</li>
							<li>Comissionamento</li>
						</ul>
						<h3 className="h3 mb-4">Consórcio GEL-COSAMPA</h3>
						<img 
							src="https://placehold.co/600x400/1a1a1a/white?text=Consórcio+GEL-COSAMPA" 
							alt="Consórcio GEL-COSAMPA"
							className="rounded-lg shadow-xl mb-4"
						/>
						<ul className="list-disc list-inside mb-6">
							<li>Construção da RMT 34,5kV</li>
							<li>Comissionamento</li>
							<li>Comunicação da rede óptica</li>
						</ul>
						<h3 className="h3 mb-4">Projetos ENGESP - Linhas de Distribuição CEMIG</h3>
						<img 
							src="https://placehold.co/600x400/1a1a1a/white?text=Linhas+de+Distribuição+CEMIG" 
							alt="Linhas de Distribuição CEMIG"
							className="rounded-lg shadow-xl mb-4"
						/>
						<ul className="list-disc list-inside mb-6">
							<li>Execução</li>
							<li>Comissionamento das LD´s da Cemig</li>
						</ul>
						<h3 className="h3 mb-4">Parque Eólico Novo Horizonte (PENH), em Novo Horizonte-BA</h3>
						<img 
							src="https://placehold.co/600x400/1a1a1a/white?text=Parque+Eólico+Novo+Horizonte" 
							alt="Parque Eólico Novo Horizonte"
							className="rounded-lg shadow-xl mb-4"
						/>
						<ul className="list-disc list-inside mb-6">
							<li>Execução</li>
							<li>Comissionamento da comunicação da rede óptica</li>
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
							src="https://placehold.co/600x400/1a1a1a/white?text=Complexo+Eólico+Serra+do+Mel+I" 
							alt="Complexo Eólico Serra do Mel I"
							className="rounded-lg shadow-xl mb-4"
						/>
						<ul className="list-disc list-inside mb-6">
							<li>Ensaios de descargas parciais em 2020.</li>
						</ul>
						<h3 className="h3 mb-4">Central Fotovoltaica OH Sobrado, Bahia</h3>
						<img 
							src="https://placehold.co/600x400/1a1a1a/white?text=Central+Fotovoltaica+OH+Sobrado" 
							alt="Central Fotovoltaica OH Sobrado"
							className="rounded-lg shadow-xl mb-4"
						/>
						<ul className="list-disc list-inside mb-6">
							<li>Ensaios em subestação de parada anual para WEG em 2020.</li>
						</ul>
						<h3 className="h3 mb-4">Complexo Eólico Serra do Mel I, RN</h3>
						<img 
							src="https://placehold.co/600x400/1a1a1a/white?text=Complexo+Eólico+Serra+do+Mel+I" 
							alt="Complexo Eólico Serra do Mel I"
							className="rounded-lg shadow-xl mb-4"
						/>
						<ul className="list-disc list-inside mb-6">
							<li>Engenharia do proprietário no comissionamento de cabos MT para Echoenergia em 2020.</li>
						</ul>
						<h3 className="h3 mb-4">Complexo Eólico Delfina da ENEL GREEN POWER</h3>
						<img 
							src="https://placehold.co/600x400/1a1a1a/white?text=Complexo+Eólico+Delfina" 
							alt="Complexo Eólico Delfina"
							className="rounded-lg shadow-xl mb-4"
						/>
						<ul className="list-disc list-inside mb-6">
							<li>Construção da RMT, na Bahia em 2020 e 2021.</li>
						</ul>
						<h3 className="h3 mb-4">Complexo Eólico Ourolândia, BA</h3>
						<img 
							src="https://placehold.co/600x400/1a1a1a/white?text=Complexo+Eólico+Ourolândia" 
							alt="Complexo Eólico Ourolândia"
							className="rounded-lg shadow-xl mb-4"
						/>
						<ul className="list-disc list-inside mb-6">
							<li>Ensaios em cabos MT e chaves seccionadoras para Rio Energi em 2018.</li>
						</ul>
						<h3 className="h3 mb-4">Complexo Eólico Umburanas, BA</h3>
						<img 
							src="https://placehold.co/600x400/1a1a1a/white?text=Complexo+Eólico+Umburanas" 
							alt="Complexo Eólico Umburanas"
							className="rounded-lg shadow-xl mb-4"
						/>
						<ul className="list-disc list-inside mb-6">
							<li>Ensaios em cabos MT e chaves seccionadoras para ENGIE em 2018.</li>
							<li>Lançamento de cabos dielétricos, fusão e enlace da rede de comunicação.</li>
						</ul>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Work;
