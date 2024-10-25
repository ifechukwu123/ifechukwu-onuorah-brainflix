import "./NextVideo.scss";

function NextVideo({ video, handleClick }) {
	return (
		<article
			className="video"
			onClick={() => {
				handleClick(video.id);
			}}
		>
			<img src={video.image} alt="" className="video__image" />
			<div className="video__info">
				<h3 className="video__title">{video.title}</h3>
				<span className="video__author">{video.channel}</span>
			</div>
		</article>
	);
}

export default NextVideo;
