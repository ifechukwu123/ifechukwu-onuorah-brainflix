import Header from "./components/Header/Header";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import avatar from "./assets/images/Mohan-muruge.jpg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

const { VITE_API_URL } = import.meta.env;

function App() {
	return (
		<BrowserRouter>
			<Header avatar={avatar} />
			<Routes>
				<Route
					path="/"
					element={<VideoDetailsPage avatar={avatar} url={VITE_API_URL} />}
				/>
				<Route
					path="videos/:videoId"
					element={<VideoDetailsPage avatar={avatar} url={VITE_API_URL} />}
				/>
				<Route path="upload" element={<VideoUploadPage url={VITE_API_URL} />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
