const TrackListing = ({songsArray}) => {
	return (
		<div className='trackList'>
			<div className='trackListTitle'>
				<h2>Track List</h2>
				<img src='/shrimp.png' alt='SHRRIIIMP' />
			</div>
			{songsArray.map((song, index) => (
				<div key={index}>
					<h3>
						{index + 1}. {song}
					</h3>
				</div>
			))}
		</div>
	);
};

export default TrackListing;
