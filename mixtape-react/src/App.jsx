import {useState} from 'react';
import './assets/css/styles.css';
// import 'https://cdn.plyr.io/3.6.8/plyr.css';

// eslint-disable-next-line no-unused-vars
const playlist = {
	video1: {src: 'https://www.youtube.com/watch?v=V_Ydoe4Q-Gg', name: 'Radiohead - Weird Fishes'},
	video2: {src: 'https://www.youtube.com/watch?v=qU9mHegkTc4', name: 'Arctic Monkeys - 505'},
	video3: {src: 'https://www.youtube.com/watch?v=Iw1Fm61HBA8', name: 'Queens of the Stone Age - Go With The Flow'},
	video4: {src: 'https://www.youtube.com/watch?v=Iw1Fm61HBA8', name: 'Current Joys - Breaking the Waves'},
	video5: {src: 'https://www.youtube.com/watch?v=V_Ydoe4Q-Gg', name: 'Radiohead - Weird Fishes'},
	video6: {src: 'https://www.youtube.com/watch?v=qU9mHegkTc4', name: 'Arctic Monkeys - 505'},
	video7: {src: 'https://www.youtube.com/watch?v=Iw1Fm61HBA8', name: 'Queens of the Stone Age - Go With The Flow'},
	video8: {src: 'https://www.youtube.com/watch?v=Iw1Fm61HBA8', name: 'Queens of the Stone Age - Go With The Flow'},
	video9: {src: 'https://www.youtube.com/watch?v=V_Ydoe4Q-Gg', name: 'Radiohead - Weird Fishes'},
	video10: {src: 'https://www.youtube.com/watch?v=qU9mHegkTc4', name: 'Arctic Monkeys - 505'},
	video11: {src: 'https://www.youtube.com/watch?v=Iw1Fm61HBA8', name: 'Queens of the Stone Age - Go With The Flow'},
	video12: {src: 'https://www.youtube.com/watch?v=Iw1Fm61HBA8', name: 'Queens of the Stone Age - Go With The Flow'},
	video13: {src: 'https://www.youtube.com/watch?v=V_Ydoe4Q-Gg', name: 'Radiohead - Weird Fishes'},
	video14: {src: 'https://www.youtube.com/watch?v=qU9mHegkTc4', name: 'Arctic Monkeys - 505'},
	video15: {src: 'https://www.youtube.com/watch?v=Iw1Fm61HBA8', name: 'Queens of the Stone Age - Go With The Flow'},
	video16: {src: 'https://www.youtube.com/watch?v=Iw1Fm61HBA8', name: 'Queens of the Stone Age - Go With The Flow'},
	video17: {src: 'https://www.youtube.com/watch?v=V_Ydoe4Q-Gg', name: 'Radiohead - Weird Fishes'},
	video18: {src: 'https://www.youtube.com/watch?v=qU9mHegkTc4', name: 'Arctic Monkeys - 505'},
	video19: {src: 'https://www.youtube.com/watch?v=Iw1Fm61HBA8', name: 'Queens of the Stone Age - Go With The Flow'},
	video20: {src: 'https://www.youtube.com/watch?v=Iw1Fm61HBA8', name: 'Queens of the Stone Age - Go With The Flow'},
};

const App = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTrackTitle, setCurrentTrackTitle] = useState();

	// useEffect(() => {
	// 	// Load Plyr JS after component mounts
	// 	const script = document.createElement('script');
	// 	script.src = 'https://cdn.plyr.io/3.6.8/plyr.js';
	// 	script.async = true;
	// 	document.body.appendChild(script);

	// 	return () => {
	// 		document.body.removeChild(script);
	// 	};
	// }, []);

	const handlePlay = () => {
		setIsPlaying(false);
		setCurrentTrackTitle('Track Name');
	};

	const handlePause = () => {
		setIsPlaying(true);
		setCurrentTrackTitle('No track playing');
	};

	return (
		<div className='mainContent'>
			<h1>Mix tape</h1>
			<div className='cassette'>
				<div className='rectangle'>
					<div className='inner-rectangle'>
						<div className='title'>
							<p>4 Flumey</p>
						</div>
						<div className='title'>
							<h2>B</h2>
						</div>
						<div className='ribon-container'>
							<div className='box'>
								<div className='tape-wheel'>
									<div className={`teethBox ${isPlaying ? 'playing' : ''}`}>
										<div className='teeth'></div>
										<div className='teeth'></div>
										<div className='teeth'></div>
										<div className='teeth'></div>
									</div>
								</div>
								<div className='tape'>
									<div className={`tape-ribbon ${isPlaying ? 'play' : ''}`}></div>
									<div className={`tape-ribbon-two ${isPlaying ? 'play' : ''}`}></div>
								</div>
								<div className='tape-wheel'>
									<div className={`teethBox ${isPlaying ? ' playing' : ''}`}>
										<div className='teeth'></div>
										<div className='teeth'></div>
										<div className='teeth'></div>
										<div className='teeth'></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='cassette-body'>
						<div className='squares'></div>
						<div className='squares two'></div>
					</div>
				</div>
			</div>
			<p id='currentTrackTitle'>Now Playing: {currentTrackTitle ? currentTrackTitle : 'No track playing'}</p>
			<div className='playOptions'>
				<button id='prevButton'>
					<img id='backArrow' src='../src/assets/arrow-45.svg' alt='Previous' />
				</button>
				{isPlaying ? (
					<button id='playButton' onClick={handlePlay}>
						<img src='../src/assets/pause.svg' alt='Pause Button' />
					</button>
				) : (
					<button id='pauseButton' onClick={handlePause}>
						<img src='../src/assets/play.svg' alt='Play Button' />
					</button>
				)}

				<button id='nextButton'>
					<img src='../src/assets/arrow-45.svg' alt='Skip' />
				</button>
			</div>
			<div className='plyr-div'>
				<div id='plyr-player'></div>
			</div>
		</div>
	);
};

export default App;
