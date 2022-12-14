import React, { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';

import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	Navigate,
} from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage';
import Register from './pages/Register/Register';
import Navbar from './components/Navbar/Navbar';
import Leftbar from './components/Leftbar/Leftbar';
import Rightbar from './components/Rightbar/Rightbar';
import Profile from './pages/Profile/Profile';
import './style.scss';

const App = () => {
	// we are not logged in yet
	const { currentUser } = useContext(AuthContext);
	//dark mode
	const { darkMode } = useContext(DarkModeContext);
	// console.log(darkMode);

	const ProtectedRoute = ({ children }) => {
		// if there is no current user
		if (!currentUser) {
			return <Navigate to='/login' />;
		}
		return children;
	};

	const Layout = () => {
		return (
			<div className={`theme-${darkMode ? 'dark' : 'light'}`}>
				<Navbar />
				<div style={{ display: 'flex' }}>
					<Leftbar />
					<div style={{ flex: 6 }}>
						<Outlet />
					</div>
					<Rightbar />
				</div>
			</div>
		);
	};
	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<ProtectedRoute>
					<Layout />
				</ProtectedRoute>
			),
			errorElement: <ErrorPage />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/profile/:id',
					element: <Profile />,
				},
			],
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/register',
			element: <Register />,
		},
	]);
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
