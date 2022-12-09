import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
// import HomeOutlinedIcon from '@ mui/icons-material/HomeOutlined';
// import BrightnessMediumOutlinedIcon from '@mui/icons-material/BrightnessMediumOutlined';
import { FcHome } from 'react-icons/fc';
import { FcOrgUnit } from 'react-icons/fc';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
// import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';

import './navbar.scss';
import { AuthContext } from '../../context/authContext';

const Navbar = () => {
	const { toggle, darkMode } = useContext(DarkModeContext);
	const { currentUser } = useContext(AuthContext);

	return (
		<div className='navbar'>
			<div className='left'>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<div>
						<span className='connect'>Conn3ct</span>
						<span className='social'>-Social</span>
					</div>
				</Link>
				<FcHome className='icon' />
				{darkMode ? (
					<DarkModeOutlinedIcon onClick={toggle} className='icon' />
				) : (
					<WbSunnyOutlinedIcon onClick={toggle} className='icon' />
				)}
				<FcOrgUnit className='icon' />
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
					<span>{currentUser.name}</span>
					<img src={currentUser.profilePic} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
