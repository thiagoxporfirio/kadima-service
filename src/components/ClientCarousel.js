import React from "react";
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

const ClientCarousel = () => {
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	const clients = [
		client1, client2, client3, client4, client5, client6, 
		client7, client8, client9, client10, client11, client12
	];

	return (
		<section className="py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-center mb-8">Nossos Clientes</h2>
				<Slider {...sliderSettings}>
					{clients.map((client, index) => (
						<div key={index} className="px-4 flex justify-center items-center">
							<img
								src={client}
								alt={`Client ${index + 1}`}
								className="w-[150px] h-[150px] object-contain"
							/>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default ClientCarousel;
