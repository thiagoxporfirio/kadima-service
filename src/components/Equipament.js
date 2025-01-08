import React from "react";
import Footer from "./Footer";
import delta from "../assets/delta.png";
import vlf from "../assets/vlf.png";
import dp from "../assets/dp.png";
import shirla from "../assets/shirla.webp";
import metrel from "../assets/metrel.png";
import van from "../assets/van.jpeg"; // Add this import

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

						<div className="equipamentos__card border rounded-lg p-4 shadow-lg flex flex-col">
                            <div className="equipamentos__card--image mb-4">
                                <img
                                    src={shirla}
                                    alt="Shirla"
                                    className="w-full h-auto object-cover rounded-md"
                                />
                            </div>
                            <div className="equipamentos__card--content flex-grow">
                                <h3 className="text-xl font-semibold mb-2">
                                    SHIRLA - Teste de Revestimento de Cabos
                                </h3>
                                <p className="mb-4">
                                    O Shirla é um equipamento portátil especializado para testes de revestimento
                                    de cabos e localização precisa de falhas. Com sua tecnologia avançada,
                                    permite identificar e localizar defeitos no revestimento de cabos elétricos,
                                    garantindo a integridade e segurança das instalações.
                                </p>
                            </div>
                            <a
                                href="https://api.whatsapp.com/send?phone=5542999944224&amp;text=Ol%C3%A1%2C+encontrei+seu+site+na+busca+do+Google+e+gostaria+de+mais+informa%C3%A7%C3%B5es.+&amp;type=phone_number&amp;app_absent=0"
                                title="Saiba mais sobre Shirla"
                                className="btn btn-lg mt-auto flex text-center justify-center items-center"
                            >
                                Saiba mais
                            </a>
                        </div>

						<div className="equipamentos__card border rounded-lg p-4 shadow-lg flex flex-col">
                            <div className="equipamentos__card--image mb-4">
                                <img
                                    src={metrel}
                                    alt="Metrel"
                                    className="w-full h-auto object-cover rounded-md"
                                />
                            </div>
                            <div className="equipamentos__card--content flex-grow">
                                <h3 className="text-xl font-semibold mb-2">
                                    METREL - Medidor de Resistência de Terra
                                </h3>
                                <p className="mb-4">
                                    Equipamento versátil que permite a realização de todos os principais tipos de medição 
                                    de terras em um único instrumento. Oferece sequências automáticas programáveis e uma 
                                    ampla gama de tensões de teste de isolamento, variando de 50 V a 2500 V, garantindo 
                                    medições precisas e confiáveis.
                                </p>
                            </div>
                            <a
                                href="https://api.whatsapp.com/send?phone=5542999944224&amp;text=Ol%C3%A1%2C+encontrei+seu+site+na+busca+do+Google+e+gostaria+de+mais+informa%C3%A7%C3%B5es.+&amp;type=phone_number&amp;app_absent=0"
                                title="Saiba mais sobre Metrel"
                                className="btn btn-lg mt-auto flex text-center justify-center items-center"
                            >
                                Saiba mais
                            </a>
                        </div>

						<div className="equipamentos__card border rounded-lg p-4 shadow-lg flex flex-col">
                            <div className="equipamentos__card--image mb-4">
                                <img
                                    src={van}
                                    alt="Van da Kadima"
                                    className="w-full h-auto object-cover rounded-md"
                                />
                            </div>
                            <div className="equipamentos__card--content flex-grow">
                                <h3 className="text-xl font-semibold mb-2">
                                    VAN DA KADIMA - Laboratório Móvel de Comissionamento
                                </h3>
                                <p className="mb-4">
                                    Nossa van laboratório é equipada com tecnologia de ponta para realizar 
                                    serviços de comissionamento em campo. Oferece mobilidade e eficiência 
                                    para testes e análises técnicas, permitindo atendimento ágil e preciso 
                                    diretamente no local necessário.
                                </p>
                            </div>
                            <a
                                href="https://api.whatsapp.com/send?phone=5542999944224&amp;text=Ol%C3%A1%2C+encontrei+seu+site+na+busca+do+Google+e+gostaria+de+mais+informa%C3%A7%C3%B5es.+&amp;type=phone_number&amp;app_absent=0"
                                title="Saiba mais sobre Van da Kadima"
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
