import React from "react";
import { Routes, Route } from "react-router-dom";

//loyouts
import PrimaryLayout from "../layouts/PrimaryLayout";
import SecondaryLayout from "../layouts/SecondaryLayout";
import SimpleLayout from "../layouts/SipmleLayout";

//pages
import HomePage from "./HomePage";
import Authorization from "./Authorization";
import AllCharacters from "./characters/All-Characters";
import SingleCharacter from "./characters/Single-Character";
import AllComics from "./comics/All-Comics";
import SingleComics from "./comics/Single-Comics";
import AllSeries from "./series/All-Series";
import SingleSerie from "./series/Single-Serie";


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
      <Route path="/authorization" element={renderLayout( Authorization, SimpleLayout)} />
      <Route path="/characters" element={renderLayout(AllCharacters)} />
      <Route path="/characters/:id" element={renderLayout(SingleCharacter, SimpleLayout)} />
      <Route path="/comics" element={renderLayout(AllComics)} />
      <Route path="/comics/:id" element={renderLayout(SingleComics, SimpleLayout)} />
      <Route path="/series" element={renderLayout(AllSeries, SecondaryLayout)} />
      <Route path="/series/:id" element={renderLayout(SingleSerie, SecondaryLayout)} />
    </Routes>
  );
}

export default Router;
