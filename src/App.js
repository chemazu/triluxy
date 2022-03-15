import "./App.scss";
import Home from "./view/Home/Home";
import Search from "./view/Search";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HotelDetail from "./view/HotelDetail";
import Register from "./view/Register";
import Login from "./view/Login";
import Booking from "./view/Booking";
import { SearchContext } from "./context/SearchContext";
import { useState } from "react";
import ImportContent from "./resource";
import useSearch from "./hooks/search-hook";

function App() {
  const [searchQuery, setSearchQuery] = useState({ location: "" });
  const {data} = ImportContent()
  const { result, length } = useSearch(searchQuery, data);

  return (
    <div className="App">
      <Header />
      <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search result={result}/>} />
          <Route path="/hotel" element={<HotelDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
