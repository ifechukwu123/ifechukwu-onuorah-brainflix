import "./VideoUploadPage.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import Button from "../../components/Button/Button";

function VideoUploadPage() {
	return (
		<main className="main">
			<h1 className="main__title">upload video</h1>
			<div className="main-content">
				<div className="main__thumbnail-container">
					<h2 className="main__thumbnail-title">video thumbnail</h2>
					<img
						className="main__thumbnail"
						src={thumbnail}
						alt="A zoomed-in shot of an runner on starting blocks holding a baton"
					/>
				</div>
				<form className="form">
					<label htmlFor="title" className="form__label">
						title your video
					</label>
					<input
						type="text"
						id="title"
						name="title"
						placeholder="Add a title to your video"
						className="form__title"
					/>
					<label htmlFor="description" className="form__label">
						add a video description
					</label>
					<textarea
						name="description"
						id="description"
						placeholder="Add a description to your video"
						className="form__description"
					></textarea>
					<div className="form__buttons">
						<Button type="publish" className="publish__button" />
						<Button type="cancel" className="cancel__button" />
					</div>
				</form>
			</div>
		</main>
	);
}

export default VideoUploadPage;
