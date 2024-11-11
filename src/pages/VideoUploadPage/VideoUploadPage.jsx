import "./VideoUploadPage.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";

function VideoUploadPage({ url }) {
	let navigate = useNavigate();
	const [input, setInput] = useState({ title: "", description: "" });

	async function sendVideoUpload(title, description) {
		try {
			await axios.post(`${url}/videos`, {
				title: title,
				description: description,
			});
		} catch (error) {
			console.error(`Unable to upload video: ${error}`);
		}
	}

	function handleOnSubmit(event) {
		event.preventDefault();

		if (isFormValid()) {
			sendVideoUpload(input.title, input.description);
			setInput({ title: "", description: "" });
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

	function isFormValid() {
		if (input.title.trim() === "" || input.description.trim() === "") {
			return false;
		}
		return true;
	}

	function handleOnChange(event) {
		const { name, value } = event.target;

		if (value.trim() === "") {
			event.target.classList.add("form__field--invalid");
		} else {
			event.target.classList.remove("form__field--invalid");
		}

		setInput({ ...input, [name]: value });
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
							value={input.title}
							onChange={handleOnChange}
						/>
						<label htmlFor="description" className="form__label">
							add a video description
						</label>
						<textarea
							name="description"
							id="description"
							placeholder="Add a description to your video"
							className="form__field form__description"
							value={input.description}
							onChange={handleOnChange}
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
