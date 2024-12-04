import React from "react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
	const [ref, inView] = useInView({
		threshold: 0.5
	});

	return (
		<section className="section" id="about" ref={ref}>
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
					{/* img */}
					<motion.div
						variants={fadeIn("rigth", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex items-center justify-center"
					>
						<img 
							src="https://placehold.co/600x400/1a1a1a/white?text=Kadima+Service" 
							alt="Kadima Service Placeholder"
							className="rounded-lg shadow-xl"
						/>
					</motion.div>
					{/* txt */}
					<motion.div
						variants={fadeIn("left", 0.5)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1"
					>
						<h2 className="h2 text-accent">Quem Somos</h2>
						<h3 className="h3 mb-4">
							Excelência em Engenharia Elétrica e Automação
						</h3>
						<p className="mb-6">
							A Kadima Service foi fundada com a missão de otimizar os serviços de 
							engenharia no norte e nordeste do Brasil. Com sede na Bahia, contamos 
							com uma infraestrutura moderna, incluindo um galpão de mais de 500m² 
							dedicado à montagem de painéis e ao desenvolvimento de soluções 
							industriais, comerciais e prediais nas áreas elétrica e de automação. 
							Nossa equipe é formada por engenheiros altamente especializados e 
							capacitados, com mais de 15 anos de experiência no setor.
						</p>
						<div className="flex gap-x-6 lg:gap-x-10 mb-12">
							<div>
								<div className="text-[40px] font-tertiary text-gradient mb-2">
									{inView ? <CountUp start={0} end={15} duration={6} /> : null}+
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									Anos de <br />
									Experiência
								</div>
							</div>
							<div>
								<div className="text-[40px] font-tertiary text-gradient mb-2">
									{inView ? <CountUp start={0} end={500} duration={8} /> : null}
									m²
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									de Área <br />
									Industrial
								</div>
							</div>
							<div>
								<div className="text-[40px] font-tertiary text-gradient mb-2">
									{inView ? <CountUp start={0} end={100} duration={6} /> : null}+
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									Projetos <br />
									Realizados
								</div>
							</div>
						</div>
						<div className="flex gap-x-8 items-center mt-9">
							<button className="btn btn-lg">
								<Link to="contact" activeClass="active">
									Entre em contato
								</Link>
							</button>
							<a href="#" className="text-gradient btn-link">
								Nossos Projetos
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
