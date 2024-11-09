import CurrentVideo from "../CurrentVideo/CurrentVideo";
import VideoDetails from "../VideoDetails/VideoDetails";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import VideoList from "../VideoList/VideoList";
import "./Main.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Main({ avatar, videoId, videoList, url }) {
	let navigate = useNavigate();
	videoId = videoId ?? videoList[0].id;

	const newVideoList = videoList.filter((video) => video.id !== videoId);
	const [currentVideo, setCurrentVideo] = useState(null);

	useEffect(() => {
		async function getCurrentVideoDetails() {
			try {
				const response = await axios.get(`${url}/videos/${videoId}`);
				console.log(response.data);
				setCurrentVideo(response.data);
			} catch (error) {
				console.error(`Error getting video details: ${error}`);
			}
		}

		const video = videoList.find((video) => video.id === videoId);
		if (!video) {
			navigate("/unknown-path");
		} else {
			getCurrentVideoDetails();
		}
	}, [videoId]);

	if (!currentVideo) {
		return <div>Loading....</div>;
	}

	return (
		<main className="main">
			<CurrentVideo currentVideo={currentVideo} url={url} />
			<div className="main__content">
				<div className="main__current-video">
					<VideoDetails currentVideo={currentVideo} />
					<CommentForm currentVideo={currentVideo} avatar={avatar} />
					<CommentList currentVideo={currentVideo} />
				</div>
				<VideoList nextVideos={newVideoList} url={url} />
			</div>
		</main>
	);
}

export default Main;
