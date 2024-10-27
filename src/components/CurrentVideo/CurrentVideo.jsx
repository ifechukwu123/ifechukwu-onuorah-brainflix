import "./CurrentVideo.scss";

function CurrentVideo({ currentVideo }) {
	return (
		<div className="currentVideo-container">
			<video
				controls
				poster={currentVideo.image}
				className="currentVideo__video"
			>
				<source src={currentVideo.video} />
				Watch the
				<a href={currentVideo.video}>video</a>
			</video>
		</div>
	);
}

export default CurrentVideo;
