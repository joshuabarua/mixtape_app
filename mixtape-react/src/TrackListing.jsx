const TrackListing = ({songsArray}) => {
	return (
		<div className='trackList'>
			<h2>Track List</h2>
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
