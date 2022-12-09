import { createContext, useEffect, useState } from 'react';

// create the Context from 'react' and its Provider
// Context
export const AuthContext = createContext();
// Provider
export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem('user')) || null
	);
	const login = () => {
		setCurrentUser({
			id: 1,
			name: 'Mary Doe',
			profilePic:
				'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		});
	};

	//
	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(currentUser));
	}, [currentUser]);

	return (
		<AuthContext.Provider value={{ currentUser, login }}>
			{children}
		</AuthContext.Provider>
	);
};
