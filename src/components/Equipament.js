import React from "react";
import Footer from "./Footer";
import vlf from "../assets/vlf.png";
import dp from "../assets/dp.png";
import tangente from "../assets/tangente.jpeg";
import shirla from "../assets/shirla.webp";
import metrel from "../assets/metrel.png";
import van from "../assets/van.jpeg";
import carro from "../assets/carro.jpeg";
import munk from "../assets/munk.png";
import cat from "../assets/cat.webp";
import caminhaao from "../assets/caminhaao.jpeg";

const Equipament = () => {
	return (
		<>
			{/* Equipment Section */}
			<section className="section mb-16">
				<div className="container mx-auto">
					<h2 className="h2 text-accent">Equipamentos</h2>
					<p className="paragraph mb-8">Equipamentos de medição</p>

					<div className="equipamentos__cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="equipamentos__card border rounded-lg p-4 shadow-lg flex flex-col">
							<div className="equipamentos__card--image mb-4">
								<img
									src={tangente}
									alt="Tangente Delta"
									className="w-full h-auto object-cover rounded-md"
								/>
							</div>
							<div className="equipamentos__card--content flex-grow">
								<h3 className="text-xl font-semibold mb-2">
									TANGENTE DELTA - Análise do grau de degradação da isolação
								</h3>
								<p className="mb-4">
									O ensaio de Tangente Delta permite a análise do grau de
									degradação da isolação, este ensaio também indica
									irregularidades diversas, defeitos que produzem descargas
									parciais, infiltração de água, arborescência, entre outros.
									Onde, é possível verificar tendências e reduzir a incidência
									de falhas inesperadas. A norma IEEE 400.2-2013 estabelece os
									critérios para os ensaios em cabos isolados com VLF e Tangente
									de Delta.
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
									Analisador de qualidade de energia (VLF)
								</h3>
								<p className="mb-4">
									VLF (Very Low Frequency): Nos ensaios de Tensão Aplicada VLF,
									submetemos os cabos a tensões elétricas alternadas em 0,1 Hz
									por períodos pré-determinados. Seja na etapa de
									comissionamento ou durante a operação, é indispensável
									garantir os requisitos mínimos de desempenho dos cabos
									isolados de média tensão, fragilidades e defeitos em cabos
									isolados podem ocorrer durante o processo construtivo, na
									instalação e ou na confecção dos acessórios, devido ao
									envelhecimento natural ou até mesmo às peculiaridades de
									aplicação. Nesses ensaios, submetemos os isolamentos dos cabos
									a níveis pré-determinados de sobretensão de operação, por
									tempo definido, conforme o guia internacional IEEE 400.2-2013.
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
									As Descargas Parciais são pequenas descargas elétricas
									originadas em cavidades internas de um sistema isolante ou em
									sua superfície. Sua ocorrência caracteriza uma fragilidade na
									sustentação dielétrica do material isolante e sua evolução
									pode ocasionar falhas e danos irreversíveis ao equipamento
									elétrico. As descargas parciais ocorrem em locais de
									fragilidade no isolamento do cabo, por exemplo, em
									arborescências elétricas, emendas, terminações e até mesmo por
									falhas no processo de fabricação.
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
									O Shirla é um equipamento portátil especializado para testes
									de revestimento de cabos e localização precisa de falhas. Com
									sua tecnologia avançada, permite identificar e localizar
									defeitos no revestimento de cabos elétricos, garantindo a
									integridade e segurança das instalações.
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
									Equipamento versátil que permite a realização de todos os
									principais tipos de medição de terras em um único instrumento.
									Oferece sequências automáticas programáveis e uma ampla gama
									de tensões de teste de isolamento, variando de 50 V a 2500 V,
									garantindo medições precisas e confiáveis.
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
					</div>
				</div>
			</section>

			{/* Vehicles Section */}
			<section className="section py-16">
				<div className="container mx-auto">
					<h2 className="h2 text-accent mb-8">Veículos</h2>
					<p className="paragraph mb-8">Veículos disponíveis para o trabalho</p>
					<div className="veiculos__cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="equipamentos__card border rounded-lg p-4 shadow-lg flex flex-col bg-white">
							<div className="equipamentos__card--image mb-4 h-[250px]">
								<img
									src={van}
									alt="Van da Kadima"
									className="w-full h-full object-cover rounded-md"
								/>
							</div>
							<div className="equipamentos__card--content flex-grow">
								<h3 className="text-xl font-semibold mb-2">
									VAN DA KADIMA - Laboratório Móvel de Comissionamento
								</h3>
								<p className="mb-4">
									Nossa van laboratório é equipada com tecnologia de ponta para
									realizar serviços de comissionamento em campo. Oferece
									mobilidade e eficiência para testes e análises técnicas,
									permitindo atendimento ágil e preciso diretamente no local
									necessário.
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

						{/* Car Card */}
						<div className="equipamentos__card border rounded-lg p-4 shadow-lg flex flex-col bg-white">
							<div className="equipamentos__card--image mb-4 h-[250px]">
								<img
									src={carro}
									alt="Carro da Kadima"
									className="w-full h-full object-cover rounded-md"
								/>
							</div>
							<div className="equipamentos__card--content flex-grow">
								<h3 className="text-xl font-semibold mb-2">
									CARRO OPERACIONAL
								</h3>
								<p className="mb-4">
									Veículo operacional para deslocamento rápido e eficiente da
									equipe técnica, proporcionando agilidade no atendimento aos
									clientes e transporte de equipamentos de menor porte para
									serviços específicos.
								</p>
							</div>
							<a
								href="https://api.whatsapp.com/send?phone=5542999944224&amp;text=Ol%C3%A1%2C+encontrei+seu+site+na+busca+do+Google+e+gostaria+de+mais+informa%C3%A7%C3%B5es.+&amp;type=phone_number&amp;app_absent=0"
								title="Saiba mais sobre nosso Carro Operacional"
								className="btn btn-lg mt-auto flex text-center justify-center items-center"
							>
								Saiba mais
							</a>
						</div>

						{/* Munk Card */}
						<div className="equipamentos__card border rounded-lg p-4 shadow-lg flex flex-col bg-white">
							<div className="equipamentos__card--image mb-4 h-[250px]">
								<img
									src={munk}
									alt="Caminhão Munk"
									className="w-full h-full object-cover rounded-md"
								/>
							</div>
							<div className="equipamentos__card--content flex-grow">
								<h3 className="text-xl font-semibold mb-2">CAMINHÃO MUNK</h3>
								<p className="mb-4">
									Caminhão equipado com guindaste tipo Munk para operações que
									necessitam de elevação e movimentação de cargas. Ideal para
									instalações, manutenções e transporte de equipamentos pesados
									em campo.
								</p>
							</div>
							<a
								href="https://api.whatsapp.com/send?phone=5542999944224&amp;text=Ol%C3%A1%2C+encontrei+seu+site+na+busca+do+Google+e+gostaria+de+mais+informa%C3%A7%C3%B5es.+&amp;type=phone_number&amp;app_absent=0"
								title="Saiba mais sobre nosso Caminhão Munk"
								className="btn btn-lg mt-auto flex text-center justify-center items-center"
							>
								Saiba mais
							</a>
						</div>

						{/* CAT Card */}
						<div className="equipamentos__card border rounded-lg p-4 shadow-lg flex flex-col bg-white">
							<div className="equipamentos__card--image mb-4 h-[250px]">
								<img
									src={cat}
									alt="Retroescavadeira CAT"
									className="w-full h-full object-cover rounded-md"
								/>
							</div>
							<div className="equipamentos__card--content flex-grow">
								<h3 className="text-xl font-semibold mb-2">
									RETROESCAVADEIRA CAT
								</h3>
								<p className="mb-4">
									Retroescavadeira CAT para serviços de escavação e movimentação
									de terra. Equipamento versátil e robusto, ideal para obras de
									infraestrutura e preparação de terrenos para instalações
									elétricas.
								</p>
							</div>
							<a
								href="https://api.whatsapp.com/send?phone=5542999944224&amp;text=Ol%C3%A1%2C+encontrei+seu+site+na+busca+do+Google+e+gostaria+de+mais+informa%C3%A7%C3%B5es.+&amp;type=phone_number&amp;app_absent=0"
								title="Saiba mais sobre nossa Retroescavadeira"
								className="btn btn-lg mt-auto flex text-center justify-center items-center"
							>
								Saiba mais
							</a>
						</div>

						{/* Caminhão Card */}
						<div className="equipamentos__card border rounded-lg p-4 shadow-lg flex flex-col bg-white">
							<div className="equipamentos__card--image mb-4 h-[250px]">
								<img
									src={caminhaao}
									alt="Caminhão com Cesto Elevatório"
									className="w-full h-full object-cover rounded-md"
								/>
							</div>
							<div className="equipamentos__card--content flex-grow">
								<h3 className="text-xl font-semibold mb-2">
									CAMINHÃO COM CESTO ELEVATÓRIO
								</h3>
								<p className="mb-4">
									Caminhão equipado com cesto elevatório que proporciona acesso
									seguro e eficiente para trabalhos em altura. Ideal para
									manutenção de iluminação pública, redes elétricas e serviços
									que necessitam alcance vertical com segurança.
								</p>
							</div>
							<a
								href="https://api.whatsapp.com/send?phone=5542999944224&amp;text=Ol%C3%A1%2C+encontrei+seu+site+na+busca+do+Google+e+gostaria+de+mais+informa%C3%A7%C3%B5es.+&amp;type=phone_number&amp;app_absent=0"
								title="Saiba mais sobre nosso Caminhão com Cesto Elevatório"
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
