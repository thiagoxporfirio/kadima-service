import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/kdm.png";

const Header = () => {
	return (
		<header className="py-4">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<a href="#">
						<img src={Logo} alt="Kadima Service Logo" className="w-[130px]" />
					</a>
					<nav>
						<ul className="flex space-x-6 text-xl font-medium">
							<li>
								<Link
									to="home"
									activeClass="active"
									smooth={true}
									spy={true}
									className="hover:text-accent transition duration-300 cursor-pointer"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to="about"
									activeClass="active"
									smooth={true}
									spy={true}
									className="hover:text-accent transition duration-300 cursor-pointer"
								>
									Quem somos
								</Link>
							</li>
							<li>
								<Link
									to="services"
									activeClass="active"
									smooth={true}
									spy={true}
									className="hover:text-accent transition duration-300 cursor-pointer"
								>
									Serviços
								</Link>
							</li>
							<li>
								<Link
									to="equipment"
									activeClass="active"
									smooth={true}
									spy={true}
									className="hover:text-accent transition duration-300 cursor-pointer"
								>
									Equipamentos
								</Link>
							</li>
							<li>
								<Link
									to="contact"
									activeClass="active"
									smooth={true}
									spy={true}
									className="hover:text-accent transition duration-300 cursor-pointer"
								>
									Contato
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
