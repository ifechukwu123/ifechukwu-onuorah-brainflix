import "./VideoUploadPage.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VideoUploadPage() {
	let navigate = useNavigate();

	function handleOnSubmit(event) {
		event.preventDefault();

		if (isFormValid(event)) {
			event.target.title.value = "";
			event.target.description.value = "";

			toast.success("Video Uploaded Successfully", {
				position: "bottom-center",
				theme: "colored",
			});

			setTimeout(() => navigate("/"), 2000);
		} else {
			toast.error("Please fill out the form correctly!", {
				position: "bottom-center",
				theme: "colored",
			});
		}
	}

	function isFormValid(event) {
		if (
			(event.target.title.value.trim() === "") |
			(event.target.description.value.trim() === "")
		) {
			return false;
		}
		return true;
	}

	function handleOnInput(event) {
		if (event.target.value.trim() === "") {
			event.target.classList.add("form__field--invalid");
		} else {
			event.target.classList.remove("form__field--invalid");
		}
	}

	return (
		<main className="main-video">
			<h1 className="main-video__title">upload video</h1>
			<form className="form" onSubmit={(event) => handleOnSubmit(event)}>
				<div className="form__content">
					<div className="form__thumbnail-container">
						<h2 className="form__thumbnail-title">video thumbnail</h2>
						<img
							className="form__thumbnail"
							src={thumbnail}
							alt="A zoomed-in shot of an runner on starting blocks holding a baton"
						/>
					</div>
					<div className="form__input-container">
						<label htmlFor="title" className="form__label">
							title your video
						</label>
						<input
							type="text"
							id="title"
							name="title"
							placeholder="Add a title to your video"
							className="form__field form__title"
							required
							onInput={(event) => handleOnInput(event)}
						/>
						<label htmlFor="description" className="form__label">
							add a video description
						</label>
						<textarea
							name="description"
							id="description"
							placeholder="Add a description to your video"
							className="form__field form__description"
							required
							onInput={(event) => handleOnInput(event)}
						></textarea>
					</div>
				</div>
				<div className="form__buttons">
					<Button type="publish" className="publish__button" />
					<Link to="/">
						<Button type="cancel" className="cancel__button" />
					</Link>
				</div>
				<ToastContainer />
			</form>
		</main>
	);
}

export default VideoUploadPage;
