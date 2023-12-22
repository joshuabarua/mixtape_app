const TrackListing = ({songsArray}) => {
	return (
		<div>
			<h2>Track Listing</h2>
			{songsArray.map((song, index) => (
				<div key={index}>
					{index + 1}. {song}
				</div>
			))}
		</div>
	);
};

export default TrackListing;
