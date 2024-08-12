const config = {
	content: [
	  "./src/**/*.{html,js,svelte,ts}",
	  "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	],
 
	plugins: [
	  require('flowbite/plugin'),
	  require('flowbite-typography')
	],
 
	darkMode: 'class',
	
	theme: {
	  extend: {
		 colors: {
			// flowbite-svelte
			primary: { 50: '#FFF5F2', 100: '#FFF1EE', 200: '#FFE4DE', 300: '#bfdbf7', 400: '#FFBCAD', 500: '#FE795D', 600: '#1f7a8c', 700: '#EB4F27', 800: '#053c5e', 900: '#db222a'},
		 }
	  },
		  fontFamily: {
			 'body': [
		  'Inter', 
		  'ui-sans-serif', 
		  'system-ui', 
		  '-apple-system', 
		  'system-ui', 
		  'Segoe UI', 
		  'Roboto', 
		  'Helvetica Neue', 
		  'Arial', 
		  'Noto Sans', 
		  'sans-serif', 
		  'Apple Color Emoji', 
		  'Segoe UI Emoji', 
		  'Segoe UI Symbol', 
		  'Noto Color Emoji'
		],
			 'sans': [
		  'Inter', 
		  'ui-sans-serif', 
		  'system-ui', 
		  '-apple-system', 
		  'system-ui', 
		  'Segoe UI', 
		  'Roboto', 
		  'Helvetica Neue', 
		  'Arial', 
		  'Noto Sans', 
		  'sans-serif', 
		  'Apple Color Emoji', 
		  'Segoe UI Emoji', 
		  'Segoe UI Symbol', 
		  'Noto Color Emoji'
		]
		  }
		}
 };
 
 module.exports = config;