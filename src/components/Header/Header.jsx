import "./Header.scss";
import BrainFlixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function Header() {
	return (
		<header className="header">
			<img src={BrainFlixLogo} className="header__logo" />
			<div className="header-container">
				<div className="header__search">
					<input type="text" className="header__input" placeholder="Search" />
					<img src={avatar} className="header__avatar header__avatar--one" />
				</div>
				<button className="header__button">upload</button>
				<img src={avatar} className="header__avatar header__avatar--two" />
			</div>
		</header>
	);
}

export default Header;
