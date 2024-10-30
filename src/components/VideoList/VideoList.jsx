import "./VideoList.scss";
import NextVideo from "../NextVideo/NextVideo";

function VideoList({ nextVideos, handleOnClick }) {
	return (
		<section className="nextVideos">
			<h2 className="nextVideos__title">next videos</h2>
			<ul className="nextVideos__list">
				{nextVideos.map((video) => (
					<li key={video.id}>
						<NextVideo video={video} handleOnClick={handleOnClick} />
					</li>
				))}
			</ul>
		</section>
	);
}

export default VideoList;
