import "./VideoList.scss";
import NextVideo from "../NextVideo/NextVideo";

function VideoList({ videos, handleClick }) {
	return (
		<section>
			<h2>next videos</h2>
			{videos.map((video) => (
				<NextVideo video={video} key={video.id} handleClick={handleClick} />
			))}
		</section>
	);
}

export default VideoList;
