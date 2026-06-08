import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useHistory, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { headerSlideDown, drawerSlideIn } from "../variants";
import Logo from "../assets/new/logos-kadima-energia-que-impulsiona-v014-removebg-preview.png"

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const history = useHistory();
	const location = useLocation();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const handleSectionClick = section => {
		if (location.pathname !== "/") history.push("/", { section });
		setIsMenuOpen(false);
	};

	const menuItems = [
		{
			title: "Home",
			action: () => { history.push("/"); setIsMenuOpen(false); }
		},
		{ title: "Quem Somos", section: "about" },
		{ title: "Serviços", section: "services" },
		{
			title: "Equipamentos",
			action: () => { history.push("/equipament"); setIsMenuOpen(false); }
		},
		{ title: "Contato", section: "contact" }
	];

	return (
		<motion.header
			variants={headerSlideDown}
			initial="hidden"
			animate="show"
			style={{
				background: scrolled
					? "rgba(20, 20, 20, 0.97)"
					: "rgba(20, 20, 20, 0.85)",
				backdropFilter: "blur(12px)",
				borderBottom: scrolled
					? "1px solid var(--k-border)"
					: "1px solid transparent",
				transition: "all 0.35s ease",
				position: "sticky",
				top: 0,
				zIndex: 40
			}}
			className="py-3"
		>
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center">
					{/* Logo */}
					<button
						onClick={() => history.push("/")}
						style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
					>
						<img
							src={Logo}
							alt="Kadima Service"
							style={{ height: "110px", width: "auto", objectFit: "contain" }}
						/>
					</button>

					{/* Desktop nav */}
					<nav className="hidden lg:flex items-center gap-8">
						{menuItems.map((item, i) => (
							<span key={i}>
								{item.section && location.pathname === "/" ? (
									<Link
										to={item.section}
										smooth={true}
										spy={true}
										activeClass="active"
										className="nav-link cursor-pointer"
									>
										{item.title}
									</Link>
								) : (
									<button
										onClick={() =>
											item.action
												? item.action()
												: handleSectionClick(item.section)
										}
										className="nav-link"
										style={{ background: "none", border: "none", cursor: "pointer" }}
									>
										{item.title}
									</button>
								)}
							</span>
						))}
						<Link
							to="contact"
							smooth={true}
							className="btn btn-primary cursor-pointer"
							style={{ fontSize: "0.85rem", letterSpacing: "0.1em" }}
						>
							<span>Orçamento</span>
						</Link>
					</nav>

					{/* Mobile toggle */}
					<button
						className="lg:hidden flex flex-col gap-[5px] p-2"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Menu"
					>
						{[0, 1, 2].map(i => (
							<span
								key={i}
								style={{
									display: "block",
									width: isMenuOpen && i === 1 ? 0 : "24px",
									height: "2px",
									background: "var(--k-white)",
									transition: "all 0.3s ease",
									transform: isMenuOpen
										? i === 0 ? "translateY(7px) rotate(45deg)"
										: i === 2 ? "translateY(-7px) rotate(-45deg)"
										: "scaleX(0)"
										: "none"
								}}
							/>
						))}
					</button>
				</div>
			</div>

			{/* Mobile drawer */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						variants={drawerSlideIn}
						initial="hidden"
						animate="show"
						exit="exit"
						className="lg:hidden fixed inset-0 z-50"
						style={{ background: "rgba(10,10,10,0.7)", backdropFilter: "blur(4px)" }}
						onClick={() => setIsMenuOpen(false)}
					>
						<div
							style={{
								background: "var(--k-surface)",
								borderRight: "1px solid var(--k-border)"
							}}
							className="w-[80%] max-w-sm h-full p-8 flex flex-col"
							onClick={e => e.stopPropagation()}
						>
							<img
								src={Logo}
								alt="Kadima"
								style={{ height: "48px", width: "auto", marginBottom: "2.5rem" }}
							/>
							<ul className="space-y-1 flex-1">
								{menuItems.map((item, i) => (
									<li key={i}>
										{item.section && location.pathname === "/" ? (
											<Link
												to={item.section}
												smooth={true}
												spy={true}
												activeClass="active"
												className="nav-link block py-3 border-b"
												style={{ borderColor: "var(--k-border-dim)" }}
												onClick={() => setIsMenuOpen(false)}
											>
												{item.title}
											</Link>
										) : (
											<button
												onClick={() =>
													item.action
														? item.action()
														: handleSectionClick(item.section)
												}
												className="nav-link block py-3 border-b w-full text-left"
												style={{
													borderColor: "var(--k-border-dim)",
													background: "none",
													border: "none",
													borderBottom: "1px solid var(--k-border-dim)",
													cursor: "pointer",
													width: "100%"
												}}
											>
												{item.title}
											</button>
										)}
									</li>
								))}
							</ul>
							<div className="pt-6">
								<Link
									to="contact"
									smooth={true}
									className="btn btn-primary w-full text-center cursor-pointer"
									onClick={() => setIsMenuOpen(false)}
								>
									<span>Solicite um Orçamento</span>
								</Link>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default Header;
