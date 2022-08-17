import styles from "./App.module.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";

export const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1 className={styles.title}> 🍿Alpa Movies🍿</h1>
        </Link>
      </header>
      <main>
        {/* Routes se usa en vez de Switch */}
        <Routes>
          <Route exact path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
