import './stories.scss';

const Stories = () => {
	// sample object
	const Stories = [
		{
			id: 1,
			name: 'Mukasa Mwesigwa',
			img: 'https://images.pexels.com/photos/5097418/pexels-photo-5097418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		},
		{
			id: 2,
			name: 'Musa Mukaajanga',
			img: 'https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		},
		{
			id: 3,
			name: 'Waliggo Kuteesa',
			img: 'https://images.pexels.com/photos/2141201/pexels-photo-2141201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		},
		{
			id: 4,
			name: 'Lubambula Sagala',
			img: 'https://images.pexels.com/photos/696214/pexels-photo-696214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		},
	];
	return (
		<div className='stories'>
			{Stories.map((story) => (
				<div key={story.id} className='story'>
					<img src={story.img} alt='' center />
					{/* <p>{story.name}</p> */}
				</div>
			))}
		</div>
	);
};

export default Stories;
