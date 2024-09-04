import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/main.scss";
import Home from "./components/Home";
import Questions from "./components/Questions";
import Submissions from "./components/Submission";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<div className='quizApp'>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='questions/:quesId' element={<Questions />} />
						<Route path='submissions' element={<Submissions />} />
					</Routes>
				</BrowserRouter>
			</div>
		</QueryClientProvider>
	);
}

export default App;
