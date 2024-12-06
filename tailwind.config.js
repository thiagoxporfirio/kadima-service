module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			primary: "'Titillium Web', sans-serif",    // Modern, professional, technical feel
			secondary: "'Source Sans Pro', sans-serif", // Clean, readable
			tertiary: "'Roboto Condensed', sans-serif" // Great for numbers and technical data
		},
		container: {
			padding: {
				DEFAULT: "15px"
			}
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px"
		},
		extend: {
			colors: {
				primary: "#0a0a0a",
				accent: "#FF0000",        // Main red
				'accent-dark': '#CC0000', // Darker red
				'text-dark': '#000000',   // Black for text
			},
			backgroundImage: {
				site: "url('./assets/site-bg.jpg')",
				// about: "url('./assets/about.png')"
				services: "url('./assets/services.png')"
			},
			backdropBlur: {
				sm: '50px',
			},
			zIndex: {
				'0': '0',
				'10': '10',
				'20': '20',
				'30': '30',
				'40': '40',
				'50': '50',
				'auto': 'auto',
			},
		}
	},
	plugins: []
};
