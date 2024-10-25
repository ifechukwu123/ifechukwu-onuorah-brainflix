import "./CommentList.scss";
import Comment from "../Comment/Comment";

function CommentList({ video }) {
	let commentsArray = video.comments;
	return (
		<section className="comments">
			{commentsArray.map((comm) => (
				<Comment comment={comm} key={comm.id} />
			))}
		</section>
	);
}

export default CommentList;
