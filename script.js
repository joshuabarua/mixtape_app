const playlist = {
	video1: 'https://www.youtube.com/watch?v=VIDEO_ID_1',
	video2: 'https://www.youtube.com/watch?v=VIDEO_ID_2',
	video3: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
	// Add more videos as needed
};

const keys = Object.keys(playlist);
let currentTrack = 0;
let player;

const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');

const togglePlayingState = (isPlaying) => {
	const teethBoxes = document.querySelectorAll('.teethBox, .teethBox2');
	const tapeRibbons = document.querySelectorAll('.tape-ribbon, .tape-ribbon-two');

	if (isPlaying) {
		teethBoxes.forEach((box) => box.classList.add('playing'));
		tapeRibbons.forEach((ribbon) => ribbon.classList.add('play'));
	} else {
		teethBoxes.forEach((box) => box.classList.remove('playing'));
		tapeRibbons.forEach((ribbon) => ribbon.classList.remove('play'));
	}
};

const initializePlayer = (trackIndex) => {
	const currentKey = keys[trackIndex];
	player = new Howl({
		src: [playlist[currentKey]],
		html5: true,
		onend: () => playNextTrack(),
	});
};

const playNextTrack = () => {
	currentTrack = (currentTrack + 1) % keys.length;
	player.stop();
	initializePlayer(currentTrack);
	player.play();
	togglePlayingState(true);
};

const play = () => {
	initializePlayer(currentTrack);
	player.play();
	togglePlayingState(true);
};

const pause = () => {
	player.pause();
	togglePlayingState(false);
};

playButton.addEventListener('click', play);
pauseButton.addEventListener('click', pause);
document.getElementById('nextButton').addEventListener('click', playNextTrack);
document.getElementById('prevButton').addEventListener('click', () => {
	currentTrack = (currentTrack - 1 + keys.length) % keys.length;
	play();
});
