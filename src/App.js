import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import Equipament from "./components/Equipament";
import Divider from "./components/Divider";
import TopHeader from "./components/TopHeader";

const App = () => {
	return (
		<Router>
			<div className="bg-site bg-no-repeat bg-cover overflow-x-hidden z-0">
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/equipament" component={Equipament} />
				</Switch>
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
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [location]);

	return (
		<>
			<TopHeader />
			<Banner />
			{/* <Divider /> */}
			<About />
			<Services />
			{/* <Divider /> */}
			<Work />
			{/* <Divider /> */}
			<Contact />
		</>
	);
};

export default App;
