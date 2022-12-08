// we are creating a context API for our app. To use this context, we are gonna need a provider to wrap our application to use our auth and login functions in our components

import { createContext, useEffect, useState } from 'react';

// create the Context from 'react' and its Provider
// Context
export const AuthContext = createContext();
// Provider
export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		// to return a proper boolean value instead of a string, use JSON.parse()
		JSON.parse(localStorage.getItem('user')) || null
	); // check local storage for the value currentUser. If it doesnt exist, set to false.

	// if the user presses the login button. change the state to the opposite of the value in the currentUser variable
	const login = () => {
		// --
	};

	//
	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(currentUser)); // because its gonna be an object and you cant store an object in local storage.
	}, [currentUser]); // whenever the currentUser variable changes when the login button is pressed, update the new currentUser value in localstorage

	return (
		// send the currentUser variable and the login function to the context as an object {{}}
		<AuthContext.Provider value={{ currentUser, login }}>
			{children}
		</AuthContext.Provider>

		// then wrap the children with the AuthContextProvider in index.js to use both the currentUser and the login function in your entire application
		// in app.js, import useContext from react and AuthContext from the context folder
		// const {currentUser} = useContext(AuthContext); and console log currentUser to see the value of the currentUser variable
		// to use this in any component, copy the const const { login, currentUser } = useContext(AuthContext); and paste it into your component
		// whether its a button or another component, its onClick handler = {login} function as in <button onClick={login}></button>
		// application of currentUser and login function => {currentUser ? ( <AuthOutlinedIcon onClick={login} className='icon' /> ) : (<WbSunnyOutlinedIcon onClick={login} className='icon' />)}
	);
};
