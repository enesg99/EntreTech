import NavbarComp from "./components/navbar";
import "./App.css"
import HomePage from "./pages/HomePage";
import TrackPage from "./pages/TrackPage";
import WebDevPath from "./pages/WebDevPath";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebDevBasics from "./pages/WebDev/WebDevBasics";
import WebDevHtml from "./pages/WebDev/WebDevHtml";
import WebDevCss from "./pages/WebDev/WebDevCss";
import WebDevJavascript from "./pages/WebDev/WebDevJavascript";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavbarComp />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/tracks" element={<TrackPage />} />
        <Route path="/tracks/webdevpath" element={<WebDevPath />} />
        <Route path="/tracks/webdevpath/basics" element={<WebDevBasics />} />
        <Route path="/tracks/webdevpath/html" element={<WebDevHtml />} />
        <Route path="/tracks/webdevpath/css" element={<WebDevCss />} />
        <Route path="/tracks/webdevpath/javascript" element={<WebDevJavascript />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;