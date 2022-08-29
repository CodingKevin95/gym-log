import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CreatePost from "./pages/CreatePost"
import Posts from "./pages/Posts"
import Navbar from "./components/Navbar";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
    <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </React.StrictMode>
    </BrowserRouter>,
  document.getElementById("root")
);