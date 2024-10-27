import "./VideoList.scss";
import NextVideo from "../NextVideo/NextVideo";

function VideoList({ nextVideos, handleClick }) {
	return (
		<section className="nextVideos">
			<h2 className="nextVideos__title">next videos</h2>
			{nextVideos.map((video) => (
				<NextVideo video={video} key={video.id} handleClick={handleClick} />
			))}
		</section>
	);
}

export default VideoList;
