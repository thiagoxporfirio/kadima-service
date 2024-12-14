import React from "react";
import { Link } from "react-scroll";
import { useHistory } from "react-router-dom";
import Logo from "../assets/kdm.png";

const Header = () => {
	const history = useHistory();

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
								<a
									href="/equipament"
									className="hover:text-accent transition duration-300 cursor-pointer"
								>
									Equipamentos
								</a>
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
