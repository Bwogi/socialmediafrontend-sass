import './register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className='register'>
			<div className='card'>
				<div className='left'>
					<h1>Welcome.</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing , autem sunt
						alias possimus natus cupiditate! Ipsum.
					</p>
					<span>Do you have an account?</span>
					<button>
						<Link to='/login'>Login</Link>
					</button>
				</div>
				<div className='right'>
					<h1>Register</h1>
					<form>
						<input type='text' placeholder='Name' />
						<input type='text' placeholder='Username' />
						<input type='email' placeholder='Email' />
						<input type='password' placeholder='Password' />
						<input type='password' placeholder='Confirm Password' />
						<button>Register</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
