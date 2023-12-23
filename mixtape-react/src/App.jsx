import {useState, useEffect} from 'react';
import './assets/css/styles.css';
import ReactPlayer from 'react-player';
import TrackListing from './TrackListing';
import {Player} from '@lottiefiles/react-lottie-player';

// eslint-disable-next-line no-unused-vars
const playlistUrl = 'https://www.youtube.com/playlist?list=PLqn9qPDmfV35JNrIyFX2D1NszFYY_2lgX';

// eslint-disable-next-line no-unused-vars
const playlistOne = {
	video2: {src: 'https://www.youtube.com/watch?v=qU9mHegkTc4', name: 'Arctic Monkeys - 505'},
	video1: {src: 'https://www.youtube.com/watch?v=V_Ydoe4Q-Gg', name: 'Radiohead - Weird Fishes'},
	video3: {src: 'https://www.youtube.com/watch?v=Iw1Fm61HBA8', name: 'Queens of the Stone Age - Go With The Flow'},
	video4: {src: 'https://www.youtube.com/watch?v=99IPnF9LGHo', name: 'Current Joys - Breaking the Waves'},
	video5: {src: 'https://www.youtube.com/watch?v=BF5JXUO9zlE', name: 'Jadu Heart - Freedom'},
	video6: {src: 'https://www.youtube.com/watch?v=NwEsz5wfYks', name: 'Metronomy - Whitsandbay'},
	video7: {src: 'https://www.youtube.com/watch?v=DQRmB9MowcY', name: 'Eileen - Nightcap'},
	video8: {src: 'https://www.youtube.com/watch?v=9CbtWVb8Omc', name: "Hers - If you know what's right"},
	video9: {src: 'https://www.youtube.com/watch?v=3xRxP6A5uUs', name: 'Crumb - Balloon'},
	video10: {src: 'https://www.youtube.com/watch?v=NMVH_3EuFhw', name: 'The Jungle Giants - On Your Way Down'},
	video11: {src: 'https://www.youtube.com/watch?v=xwP8VWogVDA', name: 'Crumb - Locket'},
	video12: {src: 'https://www.youtube.com/watch?v=fXfhJ_-0XvA', name: 'Night Cap - Glimpse'},
	video13: {src: 'https://www.youtube.com/watch?v=SY3XDjpBHgM', name: 'Delta Sleep - El Pastor'},
	video14: {src: 'https://www.youtube.com/watch?v=7zJTgRme3U8', name: 'Holy Fuck - Endless'},
	video15: {src: 'https://www.youtube.com/watch?v=_p2NvO6KrBs', name: 'M83 - Solitude (Felsmann + Tiley Reinterpretation'},
	video16: {src: 'https://www.youtube.com/watch?v=mEbFluJiyzA', name: 'Toro Y Moi - Rose Quarts'},
	video17: {src: 'https://www.youtube.com/watch?v=ZoYOJ_2F5Jg', name: 'Hers - Cool With You'},
	video18: {src: 'https://www.youtube.com/watch?v=E0Nk08t2mKE', name: 'Wolf Alice - Feeling Myself'},
	video19: {src: 'https://www.youtube.com/watch?v=_acBVglVBcY', name: 'HAIM - Falling'},
	video20: {src: 'https://www.youtube.com/watch?v=idtRhja2rAM', name: 'Zero 7 & Sophie Barker -Destiny (feat. Sia)'},
	video21: {src: 'https://www.youtube.com/watch?v=yfzsBA5dZdE', name: 'Mazzy Star - Fade Into You'},
	video22: {src: 'https://www.youtube.com/watch?v=zwf5MpcuKDM', name: 'Masego + FKJ - Tadow'},
	video23: {src: 'https://www.youtube.com/watch?v=VEfqozzL5uc', name: 'Kaiser Chiefs - Ruby'},
	video24: {src: 'https://www.youtube.com/watch?v=E6AGyabhWRg', name: 'Moreish Idols - Nocturnal Creatures'},
	video25: {src: 'https://www.youtube.com/watch?v=Y7c-gvxhhTg', name: 'Widowspeak - Everything is Simple'},
	video26: {src: 'https://www.youtube.com/watch?v=WvYR_gzFYjs', name: 'The Moss - Celebrate'},
	video27: {src: 'https://www.youtube.com/watch?v=yAG0uV_ZphQ', name: 'Peach Pit - Private Presley'},
	video28: {src: 'https://www.youtube.com/watch?v=R07kcK_1Hys', name: 'Tangled Hair - Time Flies'},
	video29: {src: 'https://www.youtube.com/watch?v=mS8xDo-qM8w', name: 'City and Colour - The  Girl'},
};

const playlistArr = [
	'https://www.youtube.com/watch?v=qU9mHegkTc4',
	'https://www.youtube.com/watch?v=V_Ydoe4Q-Gg',
	'https://www.youtube.com/watch?v=Iw1Fm61HBA8',
	'https://www.youtube.com/watch?v=99IPnF9LGHo',
	'https://www.youtube.com/watch?v=BF5JXUO9zlE',
	'https://www.youtube.com/watch?v=NwEsz5wfYks',
	'https://www.youtube.com/watch?v=DQRmB9MowcY',
	'https://www.youtube.com/watch?v=9CbtWVb8Omc',
	'https://www.youtube.com/watch?v=3xRxP6A5uUs',
	'https://www.youtube.com/watch?v=NMVH_3EuFhw',
	'https://www.youtube.com/watch?v=xwP8VWogVDA',
	'https://www.youtube.com/watch?v=fXfhJ_-0XvA',
	'https://www.youtube.com/watch?v=SY3XDjpBHgM',
	'https://www.youtube.com/watch?v=7zJTgRme3U8',
	'https://www.youtube.com/watch?v=_p2NvO6KrBs',
	'https://www.youtube.com/watch?v=mEbFluJiyzA',
	'https://www.youtube.com/watch?v=ZoYOJ_2F5Jg',
	'https://www.youtube.com/watch?v=93HC4kv2JzU',
	'https://www.youtube.com/watch?v=E0Nk08t2mKE',
	'https://www.youtube.com/watch?v=_acBVglVBcY',
	'https://www.youtube.com/watch?v=idtRhja2rAM',
	'https://www.youtube.com/watch?v=yfzsBA5dZdE',
	'https://www.youtube.com/watch?v=zwf5MpcuKDM',
	'https://www.youtube.com/watch?v=VEfqozzL5uc',
	'https://www.youtube.com/watch?v=E6AGyabhWRg',
	'https://www.youtube.com/watch?v=Y7c-gvxhhTg',
	'https://www.youtube.com/watch?v=WvYR_gzFYjs',
	'https://www.youtube.com/watch?v=yAG0uV_ZphQ',
	'https://www.youtube.com/watch?v=R07kcK_1Hys',
	'https://www.youtube.com/watch?v=gbfeG1Kl9kg',
	'https://www.youtube.com/watch?v=mS8xDo-qM8w',
	'https://www.youtube.com/watch?v=YT8rl2Sjhj8',
	'https://www.youtube.com/watch?v=YCs-5eC0Rro',
];

const songNames = [
	'Arctic Monkeys - 505',
	'Radiohead - Weird Fishes',
	'Queens of the Stone Age - Go With The Flow',
	'Current Joys - Breaking the Waves',
	'Jadu Heart - Freedom',
	'Metronomy - Whitsandbay',
	'Eileen - Nightcap',
	"Hers - If you know what's right",
	'Crumb - Balloon',
	'The Jungle Giants - On Your Way Down',
	'Crumb - Locket',
	'Night Cap - Glimpse',
	'Delta Sleep - El Pastor',
	'Holy Fuck - Endless',
	'M83 - Solitude (Felsmann + Tiley Reinterpretation',
	'Toro Y Moi - Rose Quarts',
	'Hers - Cool With You',
	'Mac Demarco - Dreaming',
	'Wolf Alice - Feeling Myself',
	'HAIM - Falling',
	'Zero 7 & Sophie Barker -Destiny (feat. Sia)',
	'Mazzy Star - Fade Into You',
	'Masego + FKJ - Tadow',
	'Kaiser Chiefs - Ruby',
	'Moreish Idols - Nocturnal Creatures',
	'Widowspeak - Everything is Simple',
	'The Moss - Celebrate',
	'Peach Pit - Private Presley',
	'Tangled Hair - Time Flies',
	'Crowded House - Pineapple Head',
	'City and Colour - The  Girl',
	'The Kooks - Tick Of Time',
	'The Kooks - Seaside',
];
const App = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTrackTitle, setCurrentTrackTitle] = useState();
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePlay = () => {
		setIsPlaying(false);
	};

	const handlePause = () => {
		setIsPlaying(true);
	};

	const nextTrack = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % playlistArr.length);
	};

	// Function to go to the previous track
	const prevTrack = () => {
		setCurrentIndex((prevIndex) => {
			if (prevIndex === 0) return playlistArr.length - 1;
			return prevIndex - 1;
		});
	};

	// Effect to handle when the current track changes
	useEffect(() => {
		setCurrentTrackTitle(songNames[currentIndex]);
	}, [currentIndex]);

	return (
		<div className={'container'}>
			<TrackListing songsArray={songNames} />
			<div className='mainContent'>
				<h1>FLUMEY AND THE SHRIMPS</h1>
				<h2>Made by your shrimp </h2>
				<div className='cassette'>
					<div className='dog'>
						<Player autoplay={true} play={isPlaying} loop src='assets/dog-lottie.json' style={{height: '100px', width: '100px'}}></Player>
					</div>
					<div className='rectangle'>
						<div className='inner-rectangle'>
							<div className='title'>
								<h2>B SIDES</h2>
							</div>

							<div className='title'>
								<p>Mixtape 4 Flumey</p>
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
				<div className='infoControlContainer'>
					<div className='nowPlaying'>
						<h2 id=''>Track:</h2>
						<h2 id=''> {currentTrackTitle}</h2>
					</div>
					<div className='playOptions'>
						<button id='prevButton' onClick={prevTrack}>
							<img id='backArrow' src='./assets/arrow-45.svg' alt='Previous' />
						</button>
						{isPlaying ? (
							<button id='playButton' onClick={handlePlay}>
								<img src='../assets/pause.svg' alt='Pause' />
							</button>
						) : (
							<button id='pauseButton' onClick={handlePause}>
								<img src='src/assets/play.svg' alt='Play' />
							</button>
						)}

						<button id='nextButton' onClick={nextTrack}>
							<img src='../src/assets/arrow-45.svg' alt='Skip' />
						</button>
					</div>

					<div className=''>
						<ReactPlayer url={playlistArr[currentIndex]} playing={isPlaying} width={'1px'} height={'1px'} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
