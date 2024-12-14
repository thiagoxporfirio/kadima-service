import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const services = [
	{
		name: "Subestações, LT's e RMT",
		description:
			"Projetos de entrada de energia, redes e linhas de distribuição de energia de baixa e média tensão até 34,5 kV.",
		image: "https://placehold.co/200x200?text=Subestações"
	},
	{
		name: "Elétrica Industrial",
		description:
			"Manutenções preventivas, incluindo reaperto das ligações à terra, medição de resistência de isolação, e inspeção termográfica.",
		image: "https://placehold.co/200x200?text=Elétrica+Industrial"
	},
	{
		name: "Fibra Óptica",
		description:
			"Redes ópticas de pequeno e grande porte, instalação de cabos ópticos aéreos e subterrâneos, fusão de fibra óptica, e certificação de redes.",
		image: "https://placehold.co/200x200?text=Fibra+Óptica"
	},
	{
		name: "CFTV",
		description:
			"Soluções em tecnologia de imagem e automação, testes ópticos e terminações, manutenção em redes ópticas.",
		image: "https://placehold.co/200x200?text=CFTV"
	},
	{
		name: "Cabeamento Estruturado",
		description:
			"Soluções em fibra óptica e cabos metálicos para centros de processamento de dados e centrais telefônicas.",
		image: "https://placehold.co/200x200?text=Cabeamento+Estruturado"
	},
	{
		name: "Locação de Máquinas e Equipamentos",
		description:
			"Locação de equipamentos como Hypot CC 120 kV, Medidor de Tangente Delta, Reflectômetro/Gerador de Pulso, e mais.",
		image: "https://placehold.co/200x200?text=Locação+de+Máquinas"
	}
];

const Services = () => {
	return (
		<section className="section mt-[100px] mb-[80px] min-h-screen" id="services">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row">
					{/* Text */}
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 mb-12 lg:mb-0 z-30 order-1 lg:order-1"
					>
						<h2 className="h2 text-accent mb-6">Nossos Serviços</h2>
						<h3 className="h3 max-w-[455px] mb-16">
							Excelência em Engenharia Elétrica e Automação.
						</h3>
						<button className="btn btn-lg">
							<Link to="work" smooth={true} duration={500}>
								Veja nossos projetos
							</Link>
						</button>
					</motion.div>
					{/* Services */}
					<motion.div
						variants={fadeIn("left", 0.5)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 z-30 order-2 lg:order-2"
					>
						{/* Services list */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{services.map((service, index) => {
								const { name, description, image } = service;
								return (
									<div
										className="border-b border-white/20 mb-[48px] flex flex-col items-start"
										key={index}
									>
										<div className="max-w-[576px] mb-4">
											<h4 className="text-[24px] tracking-wide font-primary font-semibold mb-6">
												{name}
											</h4>
											<p className="font-secondary leading-tight text-lg">
												{description}
											</p>
										</div>
										<img
											src={image}
											alt={name}
											className="w-100 h-100 object-cover rounded-md"
										/>
									</div>
								);
							})}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Services;
