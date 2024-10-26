import "./VideoDetails.scss";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";

function VideoInfo({ video }) {
	const date = new Date(video.timestamp);
	const formattedDate = `${
		date.getMonth() + 1
	}/${date.getDate()}/${date.getFullYear()}`;

	return (
		<section className="currentVideo">
			<h1 className="currentVideo__title">{video.title}</h1>
			<div className="currentVideo__metadata">
				<div className="currentVideo__creation-data">
					<span className="currentVideo__author">By {video.channel}</span>
					<span className="currentVideo__date">{formattedDate}</span>
				</div>
				<div className="currentVideo__interaction-data">
					<div className="currentVideo__view-data">
						<img
							src={viewsIcon}
							className="currentVideo__icon currentVideo__icon--views"
						/>
						<span className="currentVideo__views">{video.views}</span>
					</div>
					<div className="currentVideo__like-data">
						<img
							src={likesIcon}
							className="currentVideo__icon currentVideo__icon--likes"
						/>
						<span className="currentVideo__likes">{video.likes}</span>
					</div>
				</div>
			</div>
			<p className="currentVideo__description">{video.description}</p>
		</section>
	);
}

export default VideoInfo;
