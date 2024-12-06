import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
	return (
		<div className="bg-site bg-no-repeat bg-cover overflow-x-hidden z-0">
			<Header />
			<Banner />
			<About />
			<Services />
			<Work />
			<Contact />
			<WhatsAppButton />
		</div>
	);
};

export default App;
