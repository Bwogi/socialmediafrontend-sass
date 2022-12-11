import './post.scss';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
	return (
		<div className='post'>
			<div className='user'>
				<div className='userInfo'>
					<img src={post.img} alt='' />
					<div className='details'>
						<Link to={`/profile/${post.userId}`}>
							<span>{post.name}</span>
						</Link>
					</div>
				</div>
				<MoreHorizIcon className='icon' />
			</div>
			<div className='content'></div>
			<div className='interactions'></div>
		</div>
	);
};

export default Post;
