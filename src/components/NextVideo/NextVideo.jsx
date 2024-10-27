import "./NextVideo.scss";

function NextVideo({ video, handleClick }) {
	return (
		<article
			className="nextVideo"
			onClick={() => {
				handleClick(video.id);
			}}
		>
			<img src={video.image} alt="" className="nextVideo__image" />
			<div className="nextVideo__info">
				<h3 className="nextVideo__title">{video.title}</h3>
				<span className="nextVideo__author">{video.channel}</span>
			</div>
		</article>
	);
}

export default NextVideo;
