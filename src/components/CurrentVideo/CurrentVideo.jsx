import "./CurrentVideo.scss";

function CurrentVideo({ currentVideo }) {
	return (
		<div className="currentVideo-container">
			<video
				controls
				src={currentVideo.video}
				poster={currentVideo.image}
				className="currentVideo__video"
			></video>
		</div>
	);
}

export default CurrentVideo;
