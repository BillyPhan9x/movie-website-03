import React, { useState, useEffect } from "react";
import apiConfig from "../../api/apiConfig";
import { useParams } from "react-router-dom";

import Search from "../../components/content/Search";
import Footer from "../../components/footer/Footer";

import TrendingMovies from "../../components/content/movies/TrendingMovies";
import TopRatedMovies from "../../components/content/movies/TopRatedMovies";
import ActionMovies from "../../components/content/movies/ActionMovies";
import ComedyMovies from "../../components/content/movies/ComedyMovies";
import HorrorMovies from "../../components/content/movies/HorrorMovies";
import RomanceMovies from "../../components/content/movies/RomanceMovies";
import Documentaries from "../../components/content/movies/Documentaries";

import "../../styles.css";
import Banner from "../../components/header/Banner";

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  // loading
  useEffect(() => {
    const loadingTimeOut = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(loadingTimeOut);
  }, []);

  return (
    <div className="home-page-menu">
      <div className="header">
        <Banner />
        <Search
          api={apiConfig.apiKey}
          showSearch={showSearch}
          setShowSearch={setShowSearch}
        />
      </div>
      {/* jika tidak search dan tidak loading maka tampilin datanya */}
      {!showSearch && !loading ? (
        <div>
          <TrendingMovies />
          <TopRatedMovies />
          <ActionMovies />
          <ComedyMovies />
          <HorrorMovies />
          <RomanceMovies />
          <Documentaries />
        </div>
      ) : (
        <div className="loading-screen">
          <h2>Loading ...</h2>
        </div>
      )}

      <Footer />
    </div>
  );
}
