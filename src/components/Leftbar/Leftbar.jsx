import './leftbar.scss';
import { FcVoicePresentation } from 'react-icons/fc';
import { FcCollaboration } from 'react-icons/fc';
import { FcShop } from 'react-icons/fc';
import { FcFilmReel } from 'react-icons/fc';
import { FcOvertime } from 'react-icons/fc';
const Leftbar = () => {
	return (
		<div className='leftbar'>
			<div className='container'>
				<div className='menu'>
					<div className='user'>
						<img
							src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
							alt=''
						/>
						<span>John Doe</span>
					</div>
					<div className='item'>
						<FcVoicePresentation className='icon' />
						<span>Friends</span>
					</div>
					<div className='item'>
						<FcCollaboration className='icon' />
						<span>Groups</span>
					</div>
					<div className='item'>
						<FcShop className='icon' />
						<span>Marketplace</span>
					</div>
					<div className='item'>
						<FcFilmReel className='icon' />
						<span>Watch</span>
					</div>
					<div className='item'>
						<FcOvertime className='icon' />
						<span>Memories</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Leftbar;
