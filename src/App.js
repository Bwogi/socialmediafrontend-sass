import React from 'react';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Outlet,
} from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage';
import Register from './pages/Register/Register';
import Navbar from './components/Navbar/Navbar';
import Leftbar from './components/Leftbar/Leftbar';
import Rightbar from './components/Rightbar/Rightbar';
import Profile from './pages/Profile/Profile';

const App = () => {
	const Layout = () => {
		return (
			<div>
				<Navbar />
				<div style={{ display: 'flex' }}>
					<Leftbar />
					<Outlet />
					<Rightbar />
				</div>
			</div>
		);
	};
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
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
