module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			display:   "'Barlow Condensed', sans-serif",
			body:      "'DM Sans', sans-serif",
			primary:   "'Barlow Condensed', sans-serif",
			secondary: "'DM Sans', sans-serif",
			tertiary:  "'Barlow Condensed', sans-serif"
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
				primary:      "#141414",
				surface:      "#1E1E1E",
				surface2:     "#252525",
				accent:       "#8B2020",
				"accent-mid": "#A52828",
				"accent-hi":  "#C0392B",
				muted:        "#9A9A9A",
				light:        "#F0EDE8",
			},
			backgroundImage: {
				site:     "none",
				services: "url('./assets/services.png')"
			},
			backdropBlur: {
				sm: "50px"
			},
			zIndex: {
				"0": "0", "10": "10", "20": "20",
				"30": "30", "40": "40", "50": "50", auto: "auto"
			}
		}
	},
	plugins: []
};
