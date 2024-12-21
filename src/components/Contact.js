import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {
	FaMapMarkerAlt,
	FaClock,
	FaPhone,
	FaWhatsapp,
	FaEnvelope,
	FaLinkedin,
	FaFacebook,
	FaInstagram
} from "react-icons/fa";
import ClientCarousel from "./ClientCarousel";

const Contact = () => {
	const form = useRef();

	return (
		<section className="section mt-[100px] py-16 lg:selection" id="contact">
			<div className="container mx-auto">
			<ClientCarousel />
				<div className="flex flex-col lg:flex-row mb-[50px]">
					{/* text */}
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex justify-start items-center z-30"
					>
						<div>
							<h4 className="text-x1 uppercase text-accent font-medium mb-2 tracking-wide">
								Entrar em contato
							</h4>
							<h2 className=" text-[45px] lg:text-[90px] leading-none mb-12">
								Vamos trabalhar
								<br />
								juntos!
							</h2>
						</div>
					</motion.div>
					{/* form */}
					<motion.div
						ref={form}
						variants={fadeIn("left", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl flex flex-col gap-y-6 p-8 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 z-30"
					>
						<div className="space-y-8">
							{/* Localização */}
							<div className="transform hover:scale-105 transition-all duration-300">
								<h4 className="text-xl font-medium mb-4 flex items-center gap-2 text-accent">
									<FaMapMarkerAlt /> Onde estamos
								</h4>
								<div className="pl-7 space-y-1 text-white/80">
									<p>Rua Simão Pedro de Lisboa, 105</p>
									<p>Jardim Primavera</p>
									<p>Barrinha - SP</p>
								</div>
							</div>

							{/* Horário */}
							<div className="transform hover:scale-105 transition-all duration-300">
								<h4 className="text-xl font-medium mb-4 flex items-center gap-2 text-accent">
									<FaClock /> Atendimento
								</h4>
								<div className="pl-7 space-y-1 text-white/80">
									<p>Segunda à Quinta</p>
									<p>Das 7h às 17h</p>
									<p>Sexta</p>
									<p>Das 7h às 16h</p>
								</div>
							</div>

							{/* Contato */}
							<div className="transform hover:scale-105 transition-all duration-300">
								<h4 className="text-xl font-medium mb-4 flex items-center gap-2 text-accent">
									<FaPhone /> Contato
								</h4>
								<div className="pl-7 space-y-3">
									<p className="flex items-center gap-2 text-white/80">
										<FaPhone className="text-accent" /> Luiz Henrique - +55 42 9994-4224
									</p>
									<p className="flex items-center gap-2 text-white/80">
										<FaWhatsapp className="text-accent" /> Vivian Araujo - +55 34 9915-3060
									</p>
									<p className="flex items-center gap-2 text-white/80">
										<FaEnvelope className="text-accent" />
										<a
											href="mailto:wilza@kadima.eng.br"
											className="hover:text-accent underline transition-colors duration-300"
										>
											wilza@kadima.eng.br
										</a>
									</p>
									<p className="flex items-center gap-2 text-white/80">
										<FaEnvelope className="text-accent" />
										<a
											href="mailto:luiz.souza@kadima.eng.br"
											className="hover:text-accent underline transition-colors duration-300"
										>
											luiz.souza@kadima.eng.br
										</a>
									</p>
									<div className="flex gap-4 pt-4">
										<a
											href="https://www.linkedin.com/company/kadima-service/?viewAsMember=true"
											target="_blank"
											rel="noopener noreferrer"
											className="text-2xl text-white/80 hover:text-accent transition-colors duration-300"
										>
											<FaLinkedin />
										</a>
										<a
											href="https://www.facebook.com/profile.php?id=61566927685820"
											target="_blank"
											rel="noopener noreferrer"
											className="text-2xl text-white/80 hover:text-accent transition-colors duration-300"
										>
											<FaFacebook />
										</a>
										<a
											href="https://www.instagram.com/kadimaservice/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-2xl text-white/80 hover:text-accent transition-colors duration-300"
										>
											<FaInstagram />
										</a>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
