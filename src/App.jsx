import Header from "./components/Header/Header";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import avatar from "./assets/images/Mohan-muruge.jpg";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
	return (
		<BrowserRouter>
			<Header avatar={avatar} />
			<Routes>
				<Route path="/" element={<VideoDetailsPage avatar={avatar} />} />
				<Route path="home" element={<Navigate to="/" />} />
				<Route
					path="videos/:videoId"
					element={<VideoDetailsPage avatar={avatar} />}
				/>
				<Route path="upload" element={<VideoUploadPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
