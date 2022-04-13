import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./requests";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./components/About";
import SearchMovie from "./components/SearchMovie";
import Banner from "./components/Banner";
import Primetime from "./components/Primetime";
import Watch from "./components/Watch";
import Heroslide from "./components/Heroslide";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <SearchMovie />
                <Row
                  title="Now Playing"
                  fetchUrl={requests.fetchNowplaying}
                  isLargeRow={true}
                  nowPlaying={true}
                />
                <Row
                  title="Top 20"
                  fetchUrl={requests.fetchToprated}
                  isLargeRow={true}
                />
                <Primetime />
                <Heroslide />
                <Row title="Trending" fetchUrl={requests.fetchTrending} />
                <Row
                  title="Action"
                  fetchUrl={requests.fetchAction}
                  isLargeRow={true}
                />
                <Row title="Animation" fetchUrl={requests.fetchAnimation} />
                <Row title="Mystery" fetchUrl={requests.fetchMystery} />
                <Row
                  title="Science Fiction"
                  fetchUrl={requests.fetchScienceFiction}
                />
                <Row title="TV Movie" fetchUrl={requests.fetchTvMovie} />
                <Row title="Documentary" fetchUrl={requests.fetchDocumentary} />
                <Row title="War" fetchUrl={requests.fetchWar} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/watch/:id" element={<Watch />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
