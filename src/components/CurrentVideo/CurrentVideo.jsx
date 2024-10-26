import "./CurrentVideo.scss";

function CurrentVideo({ video }) {
	return (
		<div className="currentVideo-container">
			<video
				controls
				src={video.video}
				poster={video.image}
				className="currentVideo__video"
			></video>
		</div>
	);
}

export default CurrentVideo;
