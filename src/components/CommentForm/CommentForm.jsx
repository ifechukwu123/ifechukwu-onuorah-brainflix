import "./CommentForm.scss";

function CommentForm({ currentVideo, avatar }) {
	return (
		<div className="comment__input">
			<span className="comment__number">
				{currentVideo.comments.length} Comments
			</span>
			<div className="comment__form-container">
				<img src={avatar} className="comment__avatar" />
				<form className="comment__form">
					<legend className="comment__form-title">Join the conversation</legend>
					<div className="comment__form-fields">
						<textarea
							name="comment__text"
							placeholder="Add a new comment"
							className="comment__text"
						></textarea>
						<button className="comment__button">comment</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CommentForm;
