import React from "react";
import LoginPage from "./pages/LoginPage";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import StateContext from "./context/StateContext";

import Home from "./pages/Home";
import { Footer } from "./components/";

const AppRouter = () => {
  const Private = ({ children }) => {
    const token = localStorage.getItem("token");
    if (token) {
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <Router>
      <StateContext>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/produtos" element={<ProductsPage />}></Route> */}

          <Route
            path="/login"
            element={
              <Private>
                <LoginPage />
              </Private>
            }
          ></Route>
        </Routes>
        <Footer />
      </StateContext>
    </Router>
  );
};

export default AppRouter;
