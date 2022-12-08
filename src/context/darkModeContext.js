// we are creating a context API for our app. To use this context, we are gonna need a provider to wrap our application to use our darkMode and toggle fiunctions in our components

import { createContext, useEffect, useState } from 'react';

// create the context from react and its provider
// context
export const DarkModeContext = createContext();
// provider
export const DarkModeContextProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(
		// to return a proper boolean value instead of a string, use JSON.parse()
		JSON.parse(localStorage.getItem('darkMode')) || false
	); // check local storage for the value darkMode. If it doesnt exist, set to false.

	// if the user presses the toggle button. change the state to the opposite of the value in the darkMode variable
	const toggle = () => {
		setDarkMode(!darkMode);
	};

	//
	useEffect(() => {
		localStorage.setItem('darkMode', darkMode);
	}, [darkMode]); // whenever the darkMode variable changes when the toggle button is pressed, update the new darkMode value in localstorage

	return (
		// send the darkMode variable and the toggle function to the context as an object {{}}
		<DarkModeContext.Provider value={{ darkMode, toggle }}>
			{children}
		</DarkModeContext.Provider>

		// then wrap the children with the DarkModeContextProvider in index.js to use both the darkMode and the toggle function in your entire application
		// in app.js, import useContext from react and DarkModeContext from the context folder
		// const {darkMode} = useContext(DarkModeContext); and console log darkMode to see the value of the darkMode variable

		// to use this in any component, copy the const {darkMode} = useContext(DarkModeContext); and paste it into your component
		// change darkMode to the toggle function since its the one we need for our onClick handler

		// whether its a button or another component, its onClick handler = {toggle} function as in <button onClick={toggle}></button>
	);
};
