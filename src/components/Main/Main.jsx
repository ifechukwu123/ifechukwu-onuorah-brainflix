import CurrentVideo from "../CurrentVideo/CurrentVideo";
import VideoDetails from "../VideoDetails/VideoDetails";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import VideoList from "../VideoList/VideoList";
import "./Main.scss";
import data from "../../data/video-details.json";
import { useState } from "react";

function Main({ avatar }) {
	const [currentVideo, setCurrentVideo] = useState(data[0]);
	const videoList = data.filter((video) => video.id !== currentVideo.id);

	function handleClick(obj) {
		setCurrentVideo(obj);
	}

	return (
		<main className="main">
			<CurrentVideo currentVideo={currentVideo} />
			<div className="main__content">
				<div className="main__current-video">
					<VideoDetails currentVideo={currentVideo} />
					<CommentForm currentVideo={currentVideo} avatar={avatar} />
					<CommentList currentVideo={currentVideo} />
				</div>
				<VideoList nextVideos={videoList} handleClick={handleClick} />
			</div>
		</main>
	);
}

export default Main;
