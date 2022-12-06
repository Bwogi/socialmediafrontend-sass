import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';

import './navbar.scss';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='left'>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<div>
						<span className='connect'>Conn3ct</span>
						<span className='social'>-Social</span>
					</div>
				</Link>
				<HomeOutlinedIcon />
				<DarkModeOutlinedIcon />
				<GridViewOutlinedIcon />
				<div className='search'>
					<SearchOutlinedIcon />
					<input type='text' placeholder='Search...' />
				</div>
			</div>
			<div className='right'>
				<Person2OutlinedIcon />
				<EmailOutlinedIcon />
				<NotificationsOutlinedIcon />
				<div className='user'>
					<span>John Doe</span>
					<img
						src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
