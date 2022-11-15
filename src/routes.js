import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/home/index";
import Header from "./components/header";
import MainLayout from "./hoc/mainLayout";
import Contact from "./components/contact";
import PostComponent from "./components/posts";

const AppRoutes = () => (
  <BrowserRouter>
    <Header />
    <MainLayout>
      <Routes>
        <Route path="/article/:id" element={<PostComponent/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/article/:id"   element={<Home />} /> */}
      </Routes>
    </MainLayout>
  </BrowserRouter>
);
export default AppRoutes;
