import React from "react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import { FaBullseye, FaEye } from "react-icons/fa";
import kadima from "../assets/kadima.jpeg";

const About = () => {
	const [ref, inView] = useInView({
		threshold: 0.5
	});

	return (
		<section className="section mb-[120px]" id="about" ref={ref}>
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
					{/* img */}
					<motion.div
						variants={fadeIn("rigth", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex items-center justify-center z-30"
					>
						<img
							src={kadima}
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
						className="flex-1 z-30"
					>
						<h2 className="h2 text-accent">Quem Somos</h2>
						<h3 className="h3 mb-4">
							Excelência em Engenharia Elétrica e Automação
						</h3>
						<p className="mb-6">
							Na linha de projetos renováveis, a KDM participou de inúmeros
							projetos de tecnologias eólica e fotovoltaica em todo o Brasil, em
							diferentes fases do projeto. Além disso, a KDM, conta com
							equipamentos certificados nos mais avançados laboratórios do
							Brasil, realiza inspeções, testes e certificações em cabos BT, MT
							e Fibra óptica para cumprir as normas regulamentadores brasileiras
							e internacionais. A KDM conta com pessoal qualificado e
							equipamentos modernos para atender às suas necessidades.
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
									{inView ? <CountUp start={0} end={100} duration={6} /> : null}
									+
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

						<div className="flex flex-col items-center mt-12">
							<div className="bg-white p-8 rounded-lg shadow-lg mb-8">
								<div className="flex items-center mb-4">
									<FaBullseye className="text-accent text-4xl mr-4" />
									<h4 className="text-[24px] tracking-wide font-primary font-semibold">
										Missão
									</h4>
								</div>
								<p className="font-secondary leading-tight text-lg">
									Ser reconhecida como a melhor prestadora de serviço, sempre na
									busca de soluções e atendimento de qualidade aos clientes.
								</p>
							</div>

							<div className="bg-white p-8 rounded-lg shadow-lg">
								<div className="flex items-center mb-4">
									<FaEye className="text-accent text-4xl mr-4" />
									<h4 className="text-[24px] tracking-wide font-primary font-semibold">
										Visão
									</h4>
								</div>
								<p className="font-secondary leading-tight text-lg">
									Ser uma empresa de referência na prestação de serviços,
									abrangendo o setor de Telecomunicações e Eletricidade com alta
									qualidade, foco no cliente e no mercado, gerando valor aos
									sócios, clientes, empregados e toda a sociedade, através do
									desenvolvimento humano e aplicação de alta tecnologia.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
