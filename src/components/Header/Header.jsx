import "./Header.scss";
import BrainFlixLogo from "../../assets/logo/BrainFlix-logo.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Header({ avatar }) {
	return (
		<header className="header">
			<Link to="/">
				<img
					src={BrainFlixLogo}
					className="header__logo"
					alt="BrainFlix logo"
				/>
			</Link>
			<div className="header-container">
				<div className="header__search">
					<input type="text" className="header__input" placeholder="Search" />
					<img
						src={avatar}
						className="header__avatar header__avatar--one"
						alt="Avatar image"
					/>
				</div>
				<Link to="upload">
					<Button type="upload" />
				</Link>
				<img
					src={avatar}
					className="header__avatar header__avatar--two"
					alt="Avatar image"
				/>
			</div>
		</header>
	);
}

export default Header;
