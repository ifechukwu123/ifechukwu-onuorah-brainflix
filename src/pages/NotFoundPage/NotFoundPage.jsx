import "./NotFoundPage.scss";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

function NotFoundPage() {
	return (
		<div className="notFound">
			<h1 className="notFound__title">404</h1>
			<p className="notFound__paragraph">
				Sorry, the page you requested was{" "}
				<span className="notFound__paragraph--highlighted">not found</span>.
			</p>
			<Link to="/">
				<Button type="back home" />
			</Link>
		</div>
	);
}

export default NotFoundPage;
