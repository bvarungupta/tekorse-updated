import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import BlogPage from "./screens/BlogPage";
import reducer, { initialState } from "./context/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </StateProvider>
  </Router>
);
