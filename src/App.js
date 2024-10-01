import NavbarComp from "./components/navbar";
import "./App.css"
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavbarComp />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;