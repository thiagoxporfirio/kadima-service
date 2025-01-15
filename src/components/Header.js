import React, { useState } from "react";
import { Link } from "react-scroll";
import { useHistory, useLocation } from "react-router-dom";
import Logo from "../assets/kdm.png";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const history = useHistory();
	const location = useLocation();

	const handleSectionClick = section => {
		if (location.pathname !== "/") {
			history.push("/", { section });
		}
		setIsMenuOpen(false);
	};

	const menuItems = [
		{
			title: "Home",
			action: () => {
				history.push("/");
				setIsMenuOpen(false);
			}
		},
		{ title: "Quem somos", section: "about" },
		{ title: "Serviços", section: "services" },
		{
			title: "Equipamentos",
			action: () => {
				history.push("/equipament");
				setIsMenuOpen(false);
			}
		},
		{ title: "Contato", section: "contact" }
	];

	return (
		<header className="py-4 relative">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center">
					<a href="#" onClick={() => history.push("/")}>
						<img src={Logo} alt="Kadima Service Logo" className="w-[130px]" />
					</a>

					{/* Mobile Menu Button */}
					<button
						className="lg:hidden text-2xl"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? "✕" : "☰"}
					</button>

					{/* Desktop Navigation */}
					<nav className="hidden lg:block">
						<ul className="flex space-x-6 text-xl font-medium">
							{menuItems.map((item, index) => (
								<li key={index}>
									{item.section && location.pathname === "/" ? (
										<Link
											to={item.section}
											activeClass="active"
											smooth={true}
											spy={true}
											className="hover:text-accent transition duration-300 cursor-pointer"
										>
											{item.title}
										</Link>
									) : (
										<a
											href="#"
											onClick={
												item.action || (() => handleSectionClick(item.section))
											}
											className="hover:text-accent transition duration-300 cursor-pointer"
										>
											{item.title}
										</a>
									)}
								</li>
							))}
						</ul>
					</nav>

					{/* Mobile Navigation */}
					{isMenuOpen && (
						<div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
							<div className="bg-white w-[80%] max-w-sm h-full p-6">
								<div className="flex justify-end mb-6">
									<button
										onClick={() => setIsMenuOpen(false)}
										className="text-2xl"
									>
										✕
									</button>
								</div>
								<ul className="space-y-4">
									{menuItems.map((item, index) => (
										<li key={index}>
											{item.section && location.pathname === "/" ? (
												<Link
													to={item.section}
													activeClass="active"
													smooth={true}
													spy={true}
													className="block py-2 hover:text-accent transition duration-300"
													onClick={() => setIsMenuOpen(false)}
												>
													{item.title}
												</Link>
											) : (
												<a
													href="#"
													onClick={
														item.action ||
														(() => handleSectionClick(item.section))
													}
													className="block py-2 hover:text-accent transition duration-300"
												>
													{item.title}
												</a>
											)}
										</li>
									))}
								</ul>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
