import Post from '../Post/Post';
import './posts.scss';

const Posts = () => {
	// dummy posts
	const posts = [
		{
			id: 1,
			name: 'Ben Doe',
			userId: 1,
			profilePic:
				'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			img: 'https://images.pexels.com/photos/5097418/pexels-photo-5097418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
		{
			id: 2,
			name: 'Jane Doe',
			userId: 3,
			profilePic:
				'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			img: 'https://images.pexels.com/photos/2141201/pexels-photo-2141201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
	];

	return (
		<div className='posts'>
			{posts.map((post) => (
				<Post key={post.id} post={post} className='post' />
			))}
			<p>buttons</p>
		</div>
	);
};

export default Posts;
