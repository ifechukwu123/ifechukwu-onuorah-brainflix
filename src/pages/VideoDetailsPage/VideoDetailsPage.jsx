import Main from "../../components/Main/Main";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function VideoDetailsPage({ avatar, url }) {
	let { videoId } = useParams();
	const [videoList, setVideoList] = useState([]);

	useEffect(() => {
		async function getVideos() {
			try {
				const response = await axios.get(`${url}/videos`);
				setVideoList(response.data);
			} catch (error) {
				console.error(`Error retrieving videos: ${error}`);
			}
		}

		getVideos();
	}, []);

	if (videoList.length == 0) {
		return <div>Video data is loading...</div>;
	}

	return (
		<Main avatar={avatar} videoId={videoId} videoList={videoList} url={url} />
	);
}

export default VideoDetailsPage;
