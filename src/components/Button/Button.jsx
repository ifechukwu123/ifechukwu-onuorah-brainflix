import "./Button.scss";

function Button({ type, className }) {
	return (
		<button
			className={className}
			type={type === "cancel" || type === "upload" ? "button" : "submit"}
		>
			{type}
		</button>
	);
}

export default Button;
