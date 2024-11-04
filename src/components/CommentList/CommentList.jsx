import "./CommentList.scss";
import Comment from "../Comment/Comment";

function CommentList({ currentVideo }) {
	let commentsArray = currentVideo.comments;
	return (
		<ul className="comments">
			{commentsArray.map((comm) => (
				<li className="comments__item" key={comm.id}>
					<Comment comment={comm} />
				</li>
			))}
		</ul>
	);
}

export default CommentList;
