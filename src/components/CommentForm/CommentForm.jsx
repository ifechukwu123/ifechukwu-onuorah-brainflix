import "./CommentForm.scss";
import Button from "../Button/Button";

function CommentForm({ currentVideo, avatar }) {
	function handleOnSubmit(event) {
		event.preventDefault();
		event.target.comment__text.value = "";
	}

	function handleOnInput(event) {
		if (event.target.value === "") {
			event.target.classList.add("comment__text--invalid");
		} else {
			event.target.classList.remove("comment__text--invalid");
		}
	}

	return (
		<div className="comment__input">
			<span className="comment__number">
				{currentVideo.comments.length} Comments
			</span>
			<div className="comment__form-container">
				<img src={avatar} className="comment__avatar" />
				<form
					className="comment__form"
					onSubmit={(event) => handleOnSubmit(event)}
				>
					<legend className="comment__form-title">Join the conversation</legend>
					<div className="comment__form-fields">
						<textarea
							name="comment__text"
							placeholder="Add a new comment"
							className="comment__text"
							required
							type="text"
							onInput={(event) => handleOnInput(event)}
						></textarea>
						<Button type="comment" className="comment__button" />
					</div>
				</form>
			</div>
		</div>
	);
}

export default CommentForm;
