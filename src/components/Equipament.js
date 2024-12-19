import React from "react";
import Footer from "./Footer";
import delta from "../assets/delta.png";
import vlf from "../assets/vlf.png";
import dp from "../assets/dp.png";

const Equipament = () => {
	return (
		<>
			<section className="section">
				<div className="container mx-auto">
					<h2 className="h2 text-accent">Equipamentos</h2>
					<p className="paragraph">Equipamentos de medição</p>

					<div className="equipamentos__cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="equipamentos__card border rounded-lg p-4 shadow-lg flex flex-col">
							<div className="equipamentos__card--image mb-4">
								<img
									src={delta}
									alt="Tangente Delta"
									className="w-full h-auto object-cover rounded-md"
								/>
							</div>
							<div className="equipamentos__card--content flex-grow">
								<h3 className="text-xl font-semibold mb-2">
									TANGENTE DELTA - Localizador de falha em cabos
								</h3>
								<p className="mb-4">
									O Tangente Delta é um avançado localizador de defeitos em
									cabos que oferece uma solução eficiente e confiável para
									identificar problemas em redes de distribuição de energia
									elétrica. Projetado para ser utilizado tanto em redes
									subterrâneas, ele é amplamente empregado por empresas de
									energia, prestadores de serviços e profissionais da área de
									manutenção elétrica.
								</p>
							</div>
							<a
								href="https://api.whatsapp.com/send?phone=5542999944224&amp;text=Ol%C3%A1%2C+encontrei+seu+site+na+busca+do+Google+e+gostaria+de+mais+informa%C3%A7%C3%B5es.+&amp;type=phone_number&amp;app_absent=0"
								title="Saiba mais sobre Tangente Delta"
								className="btn btn-lg mt-auto flex text-center justify-center items-center"
							>
								Saiba mais
							</a>
						</div>

						<div className="equipamentos__card border rounded-lg p-4 shadow-lg flex flex-col">
							<div className="equipamentos__card--image mb-4">
								<img
									src={vlf}
									alt="Viola - VLF"
									className="w-full h-auto object-cover rounded-md"
								/>
							</div>
							<div className="equipamentos__card--content flex-grow">
								<h3 className="text-xl font-semibold mb-2">
									VIOLA - Analisador de qualidade de energia (VLF)
								</h3>
								<p className="mb-4">
									O Viola com tecnologia VLF (Very Low Frequency) é um
									analisador de qualidade de energia que permite medir e
									analisar parâmetros elétricos como tensão, corrente, potência,
									harmônicos e fator de potência. Ideal para profissionais que
									lidam com manutenção em redes elétricas.
								</p>
							</div>
							<a
								href="https://api.whatsapp.com/send?phone=5542999944224&amp;text=Ol%C3%A1%2C+encontrei+seu+site+na+busca+do+Google+e+gostaria+de+mais+informa%C3%A7%C3%B5es.+&amp;type=phone_number&amp;app_absent=0"
								title="Saiba mais sobre Viola - VLF"
								className="btn btn-lg mt-auto flex text-center justify-center items-center"
							>
								Saiba mais
							</a>
						</div>

						<div className="equipamentos__card border rounded-lg p-4 shadow-lg flex flex-col">
							<div className="equipamentos__card--image mb-4">
								<img
									src={dp}
									alt="Descarga Parcial e RIV"
									className="w-full h-auto object-cover rounded-md"
								/>
							</div>
							<div className="equipamentos__card--content flex-grow">
								<h3 className="text-xl font-semibold mb-2">
									DESCARGA PARCIAL (DP) e TENSÃO DE RADIOINTERFERÊNCIA (RIV)
								</h3>
								<p className="mb-4">
									Equipamento para medição de descarga parcial (DP) e análise de
									tensão de radiointerferência (RIV), essencial para detectar e
									avaliar defeitos em sistemas elétricos de alta tensão,
									garantindo confiabilidade e segurança nas operações.
								</p>
							</div>
							<a
								href="https://api.whatsapp.com/send?phone=5542999944224&amp;text=Ol%C3%A1%2C+encontrei+seu+site+na+busca+do+Google+e+gostaria+de+mais+informa%C3%A7%C3%B5es.+&amp;type=phone_number&amp;app_absent=0"
								title="Saiba mais sobre Descarga Parcial"
								className="btn btn-lg mt-auto flex text-center justify-center items-center"
							>
								Saiba mais
							</a>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default Equipament;
