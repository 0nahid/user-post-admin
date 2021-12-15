import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AuthProvider from "./Context/AuthProvider";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import PostDetails from "./Pages/PostDetails";
import PrivateRoute from "./Pages/PrivateRoute";
export default function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        {/* <PrivateRoute path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts/:postId" element={<PostDetails />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}
