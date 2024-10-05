import NavbarComp from "./components/navbar";
import "./App.css"
import HomePage from "./pages/HomePage";
import TrackPage from "./pages/TrackPage";
import WebDevPath from "./pages/WebDevPath";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavbarComp />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/tracks" element={<TrackPage />} />
        <Route path="/tracks/webdevpath" element={<WebDevPath />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;