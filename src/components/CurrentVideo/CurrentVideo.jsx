import "./CurrentVideo.scss";

function CurrentVideo({ video }) {
	return (
		<video
			controls
			src={video.video}
			poster={video.image}
			className="currentVideo__video"
		></video>
	);
}

export default CurrentVideo;
