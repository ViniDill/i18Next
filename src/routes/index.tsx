import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOne from "../pages/pageOne";
import PageTwo from "../pages/pageTwo";
import PageThree from "../pages/pageThree";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageOne />} />
      <Route path="/page-two" element={<PageTwo />} />
      <Route path="/page-three" element={<PageThree />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
