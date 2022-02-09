import "./App.scss";
import Home from "./view/Home/Home";
import Search from "./view/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HotelDetail from "./view/HotelDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/search" element={<Search />} />
        <Route path="/hotel" element={<HotelDetail />} />
      </Routes>

      {/* <Header />
        <Route path="/" component={Home} />
        <Route path="/search" component={Search} /> */}
    </div>
  );
}

export default App;
