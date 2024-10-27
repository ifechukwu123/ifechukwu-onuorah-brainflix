import "./Header.scss";
import BrainFlixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import Button from "../Button/Button";

function Header({ avatar }) {
	return (
		<header className="header">
			<img src={BrainFlixLogo} className="header__logo" alt="BrainFlix logo" />
			<div className="header-container">
				<div className="header__search">
					<input type="text" className="header__input" placeholder="Search" />
					<img
						src={avatar}
						className="header__avatar header__avatar--one"
						alt="Avatar image"
					/>
				</div>
				<Button type="upload" />
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
