import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { HomePage } from "./pages/Home";
import { VotingPage } from "./pages/Voting";
import { BreedsPage } from "./pages/Breeds";
import { GalleryPage } from "./pages/Gallery";
import { CatPage } from "./pages/CatProfile";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/voting" element={<VotingPage />} />
        <Route path="/breeds" element={<BreedsPage />} />
        <Route path="/breeds/:id" element={<CatPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Route>
    </Routes>
  );
};
