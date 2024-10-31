import CurrentVideo from "../CurrentVideo/CurrentVideo";
import VideoDetails from "../VideoDetails/VideoDetails";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import VideoList from "../VideoList/VideoList";
import "./Main.scss";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../utils";
import { useEffect, useState } from "react";

function Main({ avatar, videoId, videoList }) {
	videoId = videoId ?? videoList[0].id;
	const newVideoList = videoList.filter((video) => video.id !== videoId);
	const [currentVideo, setCurrentVideo] = useState(null);

	useEffect(() => {
		async function getCurrentVideoDetails() {
			try {
				const response = await axios.get(
					`${BASE_URL}/videos/${videoId}?api_key=${API_KEY}`
				);
				setCurrentVideo(response.data);
			} catch (error) {
				console.error(error);
			}
		}

		getCurrentVideoDetails();
	}, [videoId]);

	if (!currentVideo) {
		return <div>Loading....</div>;
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
				<VideoList nextVideos={newVideoList} />
			</div>
		</main>
	);
}

export default Main;
