import React from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/main.scss";

import * as routes from "./routes";
import { Home } from "./pages/homepage";
import { PostDetail } from "./pages/detail";

function App() {
  return (
    <Routes>
      <Route path={routes.HOMEPAGE} exact element={<Home />} />
      <Route path="/posts/:postId" element={<PostDetail />} />
    </Routes>
  );
}

export default App;
