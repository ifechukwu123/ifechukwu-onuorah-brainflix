import "./Button.scss";

function Button({ type }) {
	return (
		<button
			className={type === "comment" ? "comment__button" : "header__button"}
		>
			{type}
		</button>
	);
}

export default Button;
