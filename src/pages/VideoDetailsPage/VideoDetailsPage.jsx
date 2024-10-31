import Main from "../../components/Main/Main";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../../utils";
import axios from "axios";

function VideoDetailsPage({ avatar }) {
	let { videoId } = useParams();
	const [videoList, setVideoList] = useState(null);

	async function getVideos() {
		try {
			const response = await axios.get(`${BASE_URL}/videos?api_key=${API_KEY}`);
			setVideoList(response.data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getVideos();
	}, []);

	if (!videoList) {
		return <div>Video data is loading...</div>;
	}

	return <Main avatar={avatar} videoId={videoId} videoList={videoList} />;
}

export default VideoDetailsPage;
