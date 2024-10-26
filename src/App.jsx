import Header from "./components/Header/Header";
import "./App.scss";
import Main from "./components/Main/Main";
import avatar from "./assets/images/Mohan-muruge.jpg";

function App() {
	return (
		<>
			<Header avatar={avatar} />
			<Main avatar={avatar} />
		</>
	);
}

export default App;
