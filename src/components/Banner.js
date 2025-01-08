import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import init1 from "../assets/init1.jpg";
import init2 from "../assets/init2.jpg";
import init3 from "../assets/init3.jpg";

const Banner = () => {
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000
	};

	return (
		<section className="flex flex-col" id="home">
			{/* Carousel Section */}
			<div className="relative h-[85vh] cursor-pointer">
				<Slider {...sliderSettings}>
					<div>
						<img
							src={init1}
							alt="Industrial Automation"
							className="w-full h-[85vh] object-cover"
						/>
					</div>
					<div>
						<img
							src={init2}
							alt="Electrical Engineering"
							className="w-full h-[85vh] object-cover"
						/>
					</div>
					<div>
						<img
							src={init3}
							alt="Control Systems"
							className="w-full h-[85vh] object-cover"
						/>
					</div>
				</Slider>
			</div>

			{/* Content Section - Now below carousel */}
			<div className="container mx-auto py-20 z-30">
				<div className="flex flex-col items-center justify-center text-center">
					<motion.h1
						variants={fadeIn("up", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-[45px] font-bold leading-[0.8] lg:text-[90px] text-black"
					>
						KADIMA <span className="text-accent">SERVICE</span>
					</motion.h1>

					<motion.div
						variants={fadeIn("up", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="mb-6 text-[30px] lg:text-[50px] font-secondary 
                        font-semibold uppercase leading-[1.2] mt-8"
					>
						<span className="text-black mr-4">Especialistas em</span>
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
							className="text-accent"
							wrapper="span"
							repeat={Infinity}
						/>
					</motion.div>

					<motion.div
						variants={fadeIn("up", 0.6)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="flex gap-x-6 items-center justify-center mt-8"
					>
						<button className="btn btn-lg">
							<Link to="contact" activeClass="active" smooth={true}>
								Solicite um Orçamento
							</Link>
						</button>
						<Link
							to="services"
							className="text-gradient btn-link"
							smooth={true}
						>
							Nossos Serviços
						</Link>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
