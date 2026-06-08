import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/new/logos-kadima-energia-que-impulsiona-v014.jpg";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer
			style={{
				background: "var(--k-surface)",
				borderTop: "1px solid var(--k-border)"
			}}
		>
			<div className="max-w-7xl mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-10">
					{/* Brand */}
					<div className="md:col-span-2">
						<img
							src={Logo}
							alt="Kadima Service"
							style={{ height: "110px", width: "auto", marginBottom: "1rem" }}
						/>
						<p
							style={{
								color: "var(--k-muted)",
								fontSize: "0.9rem",
								lineHeight: 1.7,
								maxWidth: "340px"
							}}
						>
							Excelência em engenharia elétrica, automação e telecomunicações.
							Mais de 15 anos impulsionando projetos no Brasil inteiro.
						</p>
						<div className="flex gap-4 mt-5">
							{[
								{
									href: "https://wa.me/5542999944224",
									icon: <FaWhatsapp />,
									label: "WhatsApp"
								},
								{
									href: "https://www.linkedin.com/company/kadima-service/",
									icon: <FaLinkedin />,
									label: "LinkedIn"
								},
								{
									href: "https://www.instagram.com/kadimaservice/",
									icon: <FaInstagram />,
									label: "Instagram"
								}
							].map((s, i) => (
								<a
									key={i}
									href={s.href}
									target="_blank"
									rel="noreferrer"
									aria-label={s.label}
									style={{
										width: "36px",
										height: "36px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										border: "1px solid var(--k-border-dim)",
										borderRadius: "2px",
										color: "var(--k-muted)",
										fontSize: "1rem",
										transition: "all 0.2s"
									}}
									onMouseEnter={e => {
										e.currentTarget.style.borderColor = "var(--k-crimson)";
										e.currentTarget.style.color = "var(--k-fire)";
									}}
									onMouseLeave={e => {
										e.currentTarget.style.borderColor = "var(--k-border-dim)";
										e.currentTarget.style.color = "var(--k-muted)";
									}}
								>
									{s.icon}
								</a>
							))}
						</div>
					</div>

					{/* Onde estamos */}
					<div>
						<h5
							style={{
								fontFamily: "'Barlow Condensed', sans-serif",
								fontWeight: 700,
								fontSize: "0.85rem",
								letterSpacing: "0.15em",
								textTransform: "uppercase",
								color: "var(--k-crimson)",
								marginBottom: "1rem"
							}}
						>
							Onde Estamos
						</h5>
						{[
							"Rua Simão Pedro de Lisboa, 105",
							"Jardim Primavera",
							"Barrinha — SP"
						].map((l, i) => (
							<p
								key={i}
								style={{
									color: "var(--k-muted)",
									fontSize: "0.875rem",
									margin: "0 0 4px"
								}}
							>
								{l}
							</p>
						))}
						<p
							style={{
								color: "var(--k-muted)",
								fontSize: "0.875rem",
								marginTop: "0.75rem"
							}}
						>
							Seg–Qui: 7h–17h
							<br />
							Sex: 7h–16h
						</p>
					</div>

					{/* Contato */}
					<div>
						<h5
							style={{
								fontFamily: "'Barlow Condensed', sans-serif",
								fontWeight: 700,
								fontSize: "0.85rem",
								letterSpacing: "0.15em",
								textTransform: "uppercase",
								color: "var(--k-crimson)",
								marginBottom: "1rem"
							}}
						>
							Contato
						</h5>
						{[
							{ href: "tel:+5542999944224", label: "+55 42 9994-4224" },
							{ href: "tel:+5534991530600", label: "+55 34 9915-3060" },
							{
								href: "mailto:kadima@kadima.eng.br",
								label: "kadima@kadima.eng.br"
							},
							{
								href: "mailto:vagas@kadima.eng.br",
								label: "vagas@kadima.eng.br"
							}
						].map((item, i) => (
							<a
								key={i}
								href={item.href}
								style={{
									display: "block",
									color: "var(--k-muted)",
									fontSize: "0.875rem",
									textDecoration: "none",
									marginBottom: "6px",
									transition: "color 0.2s"
								}}
								onMouseEnter={e =>
									(e.currentTarget.style.color = "var(--k-white)")
								}
								onMouseLeave={e =>
									(e.currentTarget.style.color = "var(--k-muted)")
								}
							>
								{item.label}
							</a>
						))}
					</div>
				</div>

				{/* Bottom bar */}
				<div
					style={{
						marginTop: "3rem",
						paddingTop: "1.5rem",
						borderTop: "1px solid var(--k-border-dim)",
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						justifyContent: "space-between",
						alignItems: "center",
						gap: "0.5rem"
					}}
				>
					<p
						style={{
							color: "var(--k-muted)",
							fontSize: "0.8rem",
							margin: 0
						}}
					>
						© {year} Kadima Service. Todos os direitos reservados.
					</p>
					<p
						style={{
							color: "rgba(154,154,154,0.4)",
							fontSize: "0.75rem",
							margin: 0
						}}
					>
						Energia que impulsiona
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
