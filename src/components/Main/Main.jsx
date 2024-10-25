import CurrentVideo from "../CurrentVideo/CurrentVideo";
import VideoDetails from "../VideoDetails/VideoDetails";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import VideoList from "../VideoList/VideoList";
import "./Main.scss";
import data from "../../data/video-details.json";
import { useState } from "react";

function Main() {
	const [currentVideoId, setCurrentVideoId] = useState(data[0].id);

	const currentVideo = data.find((video) => video.id === currentVideoId);
	const videoList = data.filter((video) => video.id !== currentVideoId);

	function handleClick(id) {
		setCurrentVideoId(id);
	}

	return (
		<main className="main">
			<CurrentVideo video={currentVideo} />
			<div className="main__content">
				<div className="main__current-video">
					<VideoDetails video={currentVideo} />
					<CommentForm video={currentVideo} />
					<CommentList video={currentVideo} />
				</div>
				<VideoList videos={videoList} handleClick={handleClick} />
			</div>
		</main>
	);
}

export default Main;
