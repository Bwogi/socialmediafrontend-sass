import './leftbar.scss';
import { FcVoicePresentation } from 'react-icons/fc';
import { FcConferenceCall } from 'react-icons/fc';
import { FcShop } from 'react-icons/fc';
import { FcVideoFile } from 'react-icons/fc';
import { FcOvertime } from 'react-icons/fc';
import { FcPlanner } from 'react-icons/fc';
import { FcFaq } from 'react-icons/fc';
import { FcGallery } from 'react-icons/fc';
import { FcFilm } from 'react-icons/fc';
import { FcCdLogo } from 'react-icons/fc';
import { FcMoneyTransfer } from 'react-icons/fc';
import { FcTimeline } from 'react-icons/fc';
import { FcApproval } from 'react-icons/fc';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';
const Leftbar = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<div className='leftbar'>
			<div className='container'>
				<div className='menu'>
					<div className='user'>
						<img src={currentUser.profilePic} alt='' />

						<span>{currentUser.name}</span>
					</div>
					<div className='item'>
						<FcVoicePresentation className='icon' />
						<span>Friends</span>
					</div>
					<div className='item'>
						<FcConferenceCall className='icon' />
						<span>Groups</span>
					</div>
					<div className='item'>
						<FcShop className='icon' />
						<span>Marketplace</span>
					</div>
					<div className='item'>
						<FcVideoFile className='icon' />
						<span>Watch</span>
					</div>
					<div className='item'>
						<FcOvertime className='icon' />
						<span>Memories</span>
					</div>
				</div>
				<hr className='hr' />
				<div className='menu'>
					<span>Your shortcuts</span>
					<div className='item'>
						<FcPlanner className='icon' />
						<span>Events</span>
					</div>
					<div className='item'>
						<FcCdLogo className='icon' />
						<span>Gaming</span>
					</div>
					<div className='item'>
						<FcGallery className='icon' />
						<span>Gallery</span>
					</div>
					<div className='item'>
						<FcFilm className='icon' />
						<span>Videos</span>
					</div>
					<div className='item'>
						<FcFaq className='icon' />
						<span>Messages</span>
					</div>
				</div>
				<hr className='hr' />
				<div className='menu'>
					<span>Others</span>
					<div className='item'>
						<FcMoneyTransfer className='icon' />
						<span>Fundraisers</span>
					</div>
					<div className='item'>
						<FcTimeline className='icon' />
						<span>Tutorials</span>
					</div>
					<div className='item'>
						<FcApproval className='icon' />
						<span>Courses</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Leftbar;
