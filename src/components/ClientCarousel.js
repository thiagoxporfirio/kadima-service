import React from "react";
import { motion } from "framer-motion";
import { fadeIn, viewport } from "../variants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "../assets/celesc.png";
import client2 from "../assets/CEMIG.png";
import client3 from "../assets/cosampa.png";
import client4 from "../assets/cymi.png";
import client5 from "../assets/enel.png";
import client6 from "../assets/engie.png";
import client7 from "../assets/HNclyPTQavjVcJxhkWbDvJpSKRhQUIylEtXAHrAgIvmxsCshxlRimaiYwbjNXtQO.png";
import client8 from "../assets/Klabin.svg";
import client9 from "../assets/logo-tecnova-2.png";
import client10 from "../assets/santa.png";
import client11 from "../assets/seta.png";
import client12 from "../assets/weg.png";

const clients = [
	client1, client2, client3, client4, client5, client6,
	client7, client8, client9, client10, client11, client12
];

const sliderSettings = {
	dots: false,
	infinite: true,
	speed: 600,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2800,
	arrows: false,
	pauseOnHover: true,
	responsive: [
		{ breakpoint: 1024, settings: { slidesToShow: 4 } },
		{ breakpoint: 768,  settings: { slidesToShow: 3 } },
		{ breakpoint: 480,  settings: { slidesToShow: 2 } }
	]
};

const ClientCarousel = () => {
	return (
		<motion.div
			variants={fadeIn("up", 0.1)}
			initial="hidden"
			whileInView="show"
			viewport={viewport}
			style={{ marginBottom: "4rem" }}
		>
			{/* Header */}
			<div className="flex items-center gap-4 mb-8">
				<span className="accent-line" style={{ marginBottom: 0 }} />
				<p className="overline" style={{ marginBottom: 0 }}>
					Empresas que confiam na Kadima
				</p>
			</div>

			{/* Carousel */}
			<div
				style={{
					background: "var(--k-surface2)",
					border: "1px solid var(--k-border-dim)",
					borderRadius: "2px",
					padding: "1.5rem 2rem"
				}}
			>
				<Slider {...sliderSettings}>
					{clients.map((client, i) => (
						<div key={i}>
							<div
								style={{
									padding: "0 1rem",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									height: "80px"
								}}
							>
								<img
									src={client}
									alt={`Cliente ${i + 1}`}
									style={{
										maxWidth: "120px",
										maxHeight: "60px",
										objectFit: "contain",
										filter: "grayscale(100%) brightness(0.6)",
										transition: "filter 0.3s ease"
									}}
									onMouseEnter={e =>
										(e.currentTarget.style.filter = "grayscale(0%) brightness(1)")
									}
									onMouseLeave={e =>
										(e.currentTarget.style.filter =
											"grayscale(100%) brightness(0.6)")
									}
								/>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</motion.div>
	);
};

export default ClientCarousel;
