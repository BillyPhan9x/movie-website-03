import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";

import MoviesList from "./components/content/MovieList";
import Desc from "./components/detail/DetailMovies";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movies/" element={<MoviesList />} />
        <Route path="/movies/:id" element={<Desc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
