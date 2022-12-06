import './login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className='login'>
			<div className='card'>
				<div className='left'>
					<h1>Hello World.</h1>
					<p></p>
					<span>Dont you have an account?</span>
					<button>
						<Link to='/register'>Register</Link>
					</button>
				</div>
				<div className='right'>
					<h1>Login</h1>
					<form>
						<input type='text' placeholder='Username' />
						<input type='password' placeholder='Password' />
						<button>Login</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
