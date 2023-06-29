import React from "react";
import { Routes, Route } from "react-router-dom";

//loyouts
import PrimaryLayout from "../layouts/PrimaryLayout";
import SecondaryLayout from "../layouts/SecondaryLayout";
import SimpleLayout from "../layouts/SipmleLayout";

//pages
import HomePage from "./HomePage";
import Authorization from "./Authorization";
import Characters from "./characters/All-Characters";
import SingleCharacter from "./characters/Single-Character";
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
      <Route path="/authorization" element={renderLayout( Authorization, SimpleLayout)} />
      <Route path="/characters" element={renderLayout(Characters)} />
      <Route path="/characters/:id" element={renderLayout(SingleCharacter, SimpleLayout)} />
      <Route path="/comics" element={renderLayout(Comics)} />
      <Route path="/movies" element={renderLayout(Movies, SecondaryLayout)} />
    </Routes>
  );
}

export default Router;
