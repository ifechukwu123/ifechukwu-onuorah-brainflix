import { Link } from "react-router-dom";
import "./NextVideo.scss";

function NextVideo({ video }) {
	return (
		<Link to={`/videos/${video.id}`} className="nextVideo">
			<article className="nextVideo-card">
				<img src={video.image} alt="" className="nextVideo__image" />
				<div className="nextVideo__info">
					<h3 className="nextVideo__title">{video.title}</h3>
					<span className="nextVideo__author">{video.channel}</span>
				</div>
			</article>
		</Link>
	);
}

export default NextVideo;
