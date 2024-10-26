import "./Avatar.scss";

function Avatar({ avatar }) {
	<img
		src={avatar}
		className="header__avatar header__avatar--two"
		alt="Avatar image"
	/>;
}
export default Avatar;
