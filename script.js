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

	// Add more videos as needed
};

const keys = Object.keys(playlist);
let currentTrack = 0;

const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');

const updateTrackTitle = () => {
	const currentKey = keys[currentTrack];
	// Extract the track name from the key
	document.getElementById('currentTrackTitle').textContent = `Now Playing: ${playlist[keys[currentTrack]].name}`;
};

const togglePlayPauseButtons = (isPlaying) => {
	if (isPlaying) {
		playButton.style.display = 'none';
		pauseButton.style.display = 'block';
	} else {
		playButton.style.display = 'block';
		pauseButton.style.display = 'none';
	}
};

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

const playNextTrack = () => {
	currentTrack = (currentTrack + 1) % keys.length;
	player.source = {
		type: 'video',
		sources: [
			{
				src: playlist[keys[currentTrack]].src,
				provider: 'youtube',
			},
		],
	};
	player.play();
	togglePlayingState(true);
	updateTrackTitle();
};

const play = () => {
	player.play();
	togglePlayingState(true);
	updateTrackTitle();
	togglePlayPauseButtons(true);
};

const pause = () => {
	player.pause();
	togglePlayingState(false);
	togglePlayPauseButtons(false);
};

playButton.addEventListener('click', play);
pauseButton.addEventListener('click', pause);
document.getElementById('nextButton').addEventListener('click', playNextTrack);
document.getElementById('prevButton').addEventListener('click', () => {
	currentTrack = (currentTrack - 1 + keys.length) % keys.length;
	play();
});
