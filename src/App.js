import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import Equipament from "./components/Equipament";
import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";

const App = () => {
	return (
		<Router>
			<div style={{ background: "var(--k-dark)", overflowX: "hidden" }}>
				<TopHeader />
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/equipament" component={Equipament} />
				</Switch>
				<Footer />
				<WhatsAppButton />
			</div>
		</Router>
	);
};

const Home = () => {
	const location = useLocation();

	useEffect(() => {
		if (location.state?.section) {
			const element = document.getElementById(location.state.section);
			if (element) element.scrollIntoView({ behavior: "smooth" });
		}
	}, [location]);

	return (
		<>
			<Banner />
			<About />
			<Services />
			<Work />
			<Contact />
		</>
	);
};

export default App;
