import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Categories from "./components/Categories";
import Racks from "./components/Racks";
import Books from "./components/Books";
import RackDetail from "./components/RackDetail";
import Categorydetail from "./components/categorydetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/racks" element={<Racks />} />
        <Route path="/books" element={<Books />} />
        <Route path="/categories/:genreId" element={<Categorydetail />} />
        <Route path="/racks/:rackId" element={<RackDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
