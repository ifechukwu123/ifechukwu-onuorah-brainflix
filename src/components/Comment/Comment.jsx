import "./Comment.scss";

function Comment({ comment }) {
	let date = new Date(comment.timestamp);
	let formattedDate = `${
		date.getMonth() + 1
	}/${date.getDate()}/${date.getFullYear()}`;

	return (
		<article className="comment">
			<img src="" className="comment__avatar" />
			<div className="comment__card">
				<div className="comment__header">
					<span className="comment__name">{comment.name}</span>
					<span className="comment__date">{formattedDate}</span>
				</div>
				<p className="comment__text">{comment.comment}</p>
			</div>
		</article>
	);
}

export default Comment;
