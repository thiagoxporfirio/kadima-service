import React from "react";
import { Link } from "react-scroll";
import { useHistory, useLocation } from "react-router-dom";
import Logo from "../assets/kdm.png";

const Header = () => {
	const history = useHistory();
	const location = useLocation();

	const handleSectionClick = (section) => {
		if (location.pathname !== "/") {
			history.push("/", { section });
		}
	};

	return (
		<header className="py-4">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<a href="#" onClick={() => history.push("/")}>
						<img src={Logo} alt="Kadima Service Logo" className="w-[130px]" />
					</a>
					<nav>
						<ul className="flex space-x-6 text-xl font-medium">
							<li>
								<a
									href="#"
									onClick={() => history.push("/")}
									className="hover:text-accent transition duration-300 cursor-pointer"
								>
									Home
								</a>
							</li>
							<li>
								{location.pathname === "/" ? (
									<Link
										to="about"
										activeClass="active"
										smooth={true}
										spy={true}
										className="hover:text-accent transition duration-300 cursor-pointer"
									>
										Quem somos
									</Link>
								) : (
									<a
										href="#"
										onClick={() => handleSectionClick("about")}
										className="hover:text-accent transition duration-300 cursor-pointer"
									>
										Quem somos
									</a>
								)}
							</li>
							<li>
								{location.pathname === "/" ? (
									<Link
										to="services"
										activeClass="active"
										smooth={true}
										spy={true}
										className="hover:text-accent transition duration-300 cursor-pointer"
									>
										Serviços
									</Link>
								) : (
									<a
										href="#"
										onClick={() => handleSectionClick("services")}
										className="hover:text-accent transition duration-300 cursor-pointer"
									>
										Serviços
									</a>
								)}
							</li>
							<li>
								<a
									href="#"
									onClick={() => history.push("/equipament")}
									className="hover:text-accent transition duration-300 cursor-pointer"
								>
									Equipamentos
								</a>
							</li>
							<li>
								{location.pathname === "/" ? (
									<Link
										to="contact"
										activeClass="active"
										smooth={true}
										spy={true}
										className="hover:text-accent transition duration-300 cursor-pointer"
									>
										Contato
									</Link>
								) : (
									<a
										href="#"
										onClick={() => handleSectionClick("contact")}
										className="hover:text-accent transition duration-300 cursor-pointer"
									>
										Contato
									</a>
								)}
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
