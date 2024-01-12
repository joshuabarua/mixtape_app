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
	'https://www.youtube.com/watch?v=76Mbnuwk2d4',
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
	'Snow Patrol - You Could Be Happy',
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
	'M83 - Solitude (Felsmann + Tiley Reinterpretation)',
	'Toro Y Moi - Rose Quarts',
	'Hers - Cool With You',
	'Mac Demarco - Dreaming',
	'Wolf Alice - Feeling Myself',
	'HAIM - Falling',
	'Zero 7 & Sophie Barker - Destiny (feat. Sia)',
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

const cssSpool = {};
const App = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTrackTitle, setCurrentTrackTitle] = useState();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState();

	const handlePlay = () => {
		setIsPlaying(false);
	};

	const handlePause = () => {
		setIsPlaying(true);
	};

	const nextTrack = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % playlistArr.length);
	};

	const prevTrack = () => {
		setCurrentIndex((prevIndex) => {
			if (prevIndex === 0) return playlistArr.length - 1;
			return prevIndex - 1;
		});
	};

	const formatTime = (seconds) => {
		const pad = (num) => (num < 10 ? `0${num}` : num);
		const minutes = Math.floor(seconds / 60);
		const secondsLeft = Math.floor(seconds % 60);
		return `${pad(minutes)}:${pad(secondsLeft)}`;
	};

	useEffect(() => {
		if (currentTime && currentTime.playedSeconds.toFixed(0) == duration - 1) {
			if (currentIndex == playlistArr.length - 1) {
				setCurrentIndex(0);
			}
			setCurrentIndex(currentIndex + 1);
		}
		setCurrentTrackTitle(songNames[currentIndex]);
	}, [currentTime, duration, playlistArr]);

	const spoolClass1 = isPlaying ? 'spool spool1 animation-playing' : 'spool spool1 animation-paused';
	const spoolClass2 = isPlaying ? ' spool spool2 animation-playing' : 'spool spool2 animation-paused';
	const teethSpin = isPlaying ? 'playing animation-playing' : ' animation-paused';

	return (
		<div className={'container'}>
			<TrackListing songsArray={songNames} />
			<div className="cassetteContent">
				<div className="cassetteContainer">
					<h1>FLUMEY AND THE SHRIMPS</h1>
					<div className="cassette">
						<div className="dog">
							<Player autoplay={true} play={isPlaying} loop src="/dog-lottie.json" style={{height: '100px', width: '100px'}}></Player>
						</div>
						<div className="rectangle">
							<div className="inner-rectangle">
								<div className="title">
									<h2 id="h2Text">B SIDES</h2>
								</div>

								<div className="title">
									<p id="pTagTitle">Mixtape 4 Flumey</p>
								</div>

								<div className="title3">
									<h3 id="songTitle">{currentTrackTitle}</h3>
								</div>

								<div className="ribon-container">
									<div className="box">
										<div className="tape-wheel">
											<div className={`teethBox ${teethSpin}`}>
												<div className="left circle">
													<div className="small__circle">
														<div className="block1 block__cass"></div>
														<div className="block2 block__cass"></div>
														<div className="block3 block__cass"></div>
														<div className="block4 block__cass"></div>
														<div className="block5 block__cass"></div>
														<div className="block6 block__cass"></div>
													</div>
												</div>
											</div>
										</div>
										<div className="tape">
											<div className="window">
												<div className={spoolClass1}></div>
												<div className={spoolClass2}></div>
											</div>
										</div>
										<div className="tape-wheel">
											<div className={`teethBox ${teethSpin}`}>
												<div className="right circle">
													<div className="small__circle">
														<div className="block1 block__cass"></div>
														<div className="block2 block__cass"></div>
														<div className="block3 block__cass"></div>
														<div className="block4 block__cass"></div>
														<div className="block5 block__cass"></div>
														<div className="block6 block__cass"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="cassette-body">
								<div className="squares"></div>
								<div className="squares two"></div>
							</div>
						</div>
					</div>
					<div className="infoControlContainer">
						<h2>
							{formatTime(currentTime && currentTime.playedSeconds.toFixed(0))} / {formatTime(duration)}
						</h2>
						<div className="playOptions">
							<button id="prevButton" onClick={prevTrack}>
								<img id="backArrow" src="/previous.png" alt="Previous" />
							</button>
							{isPlaying ? (
								<button id="playButton" onClick={handlePlay}>
									<img src="/pause.png" alt="Pause" />
								</button>
							) : (
								<button id="pauseButton" onClick={handlePause}>
									<img src="/play.png" alt="Play" />
								</button>
							)}

							<button id="nextButton" onClick={nextTrack}>
								<img src="/next.png" alt="Skip" />
							</button>
						</div>

						<div id="reactPlayer">
							<ReactPlayer
								url={playlistArr[currentIndex]}
								playing={isPlaying}
								width={'1px'}
								height={'1px'}
								controls={true}
								onDuration={(songDuration) => setDuration(songDuration)}
								onProgress={(elapsedTime) => setCurrentTime(elapsedTime)}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
