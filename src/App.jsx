import React from "react";
import { Toaster } from "react-hot-toast";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <div className="w-ful min-h-screen h-auto font-roboto   bg-primary-200">
      <Toaster />

      <AppRouter />
    </div>
  );
};

export default App;
