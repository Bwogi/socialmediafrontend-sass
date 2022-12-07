import './rightbar.scss';

const Rightbar = () => {
	return (
		<div className='rightbar'>
			<div className='container'>
				<div className='menu'>
					<span className='title'>Suggestions for you</span>
					<div className='user'>
						<div className='userinfo'>
							<img
								src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
								alt=''
							/>
							<span>Jane Doe</span>
						</div>
						<div className='buttons'>
							<button className='follow'>follow</button>
							<button className='dismiss'>dismiss</button>
						</div>
					</div>
					<div className='user'>
						<div className='userinfo'>
							<img
								src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
								alt=''
							/>
							<span>Mary Doe</span>
						</div>
						<div className='buttons'>
							<button className='follow'>follow</button>
							<button className='dismiss'>dismiss</button>
						</div>
					</div>
				</div>
				<div className='menu'>
					<span className='title'>Latest Activities</span>
					<div className='activity'>
						<div className='userinfo'>
							<img
								src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
								alt=''
							/>
							<p>
								<span className='name'>Jane Doe</span> changed their cover
								picture
							</p>
						</div>
						<span className='time'>1 min ago</span>
					</div>
					<div className='activity'>
						<div className='userinfo'>
							<img
								src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
								alt=''
							/>
							<p>
								<span className='name'>Jane Doe</span> liked a post
							</p>
						</div>
						<span className='time'>1 min ago</span>
					</div>
					<div className='activity'>
						<div className='userinfo'>
							<img
								src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
								alt=''
							/>
							<p>
								<span className='name'>Jane Doe</span> liked a comment
							</p>
						</div>
						<span className='time'>1 min ago</span>
					</div>
					<div className='activity'>
						<div className='userinfo'>
							<img
								src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
								alt=''
							/>
							<p>
								<span className='name'>Mary Doe</span> posted
							</p>
						</div>
						<span className='time'>1 min ago</span>
					</div>
				</div>
				<div className='menu'>
					<span className='title'>Friends Online</span>

					<div className='friend-online'>
						<div className='userinfo'>
							<span className='online' />
							<img
								src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
								alt=''
							/>
							<p>
								<span className='name'>Jane Doe</span>
							</p>
						</div>
						<span className='time-online'>
							<span className='time'>1 min ago</span>
						</span>
					</div>
					<div className='friend-online'>
						<div className='userinfo'>
							<span className='online' />
							<img
								src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
								alt=''
							/>
							<p>
								<span className='name'>Mary Doe</span>
							</p>
						</div>
						<span className='time-online'>
							<span className='time'>18 min ago</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rightbar;
