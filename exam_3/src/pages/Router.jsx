import React from "react";
import { Routes, Route } from "react-router-dom";

//loyouts
import PrimaryLayout from "../layouts/PrimaryLayout";
import SecondaryLayout from "../layouts/SecondaryLayout";

//pages
import HomePage from "./HomePage";
import Characters from "./Characters";
import SingleCharacter from "./SingleCharacter";
import Comics from "./Comics";
import Movies from "./Movies";


const renderLayout = (Component, Layout = PrimaryLayout) => {
  return(
    <Layout>
      <Component/>
    </Layout>
  )
};

function Router() {
  return (
    <Routes>
      <Route path="/" element={renderLayout(HomePage)} />
      <Route path="/characters" element={renderLayout(Characters)} />
      <Route path="/characters/{characterId}" element={renderLayout(SingleCharacter)} />
      <Route path="/comics" element={renderLayout(Comics)} />
      <Route path="/movies" element={renderLayout(Movies, SecondaryLayout)} />
    </Routes>
  );
}

export default Router;
