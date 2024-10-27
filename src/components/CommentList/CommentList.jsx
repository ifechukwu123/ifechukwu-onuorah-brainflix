import "./CommentList.scss";
import Comment from "../Comment/Comment";

function CommentList({ currentVideo }) {
	let commentsArray = currentVideo.comments;
	return (
		<section className="comments">
			{commentsArray.map((comm) => (
				<Comment comment={comm} key={comm.id} />
			))}
		</section>
	);
}

export default CommentList;
