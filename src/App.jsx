// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import React from "react";
import AthleteList from "./components/AthleteList"; // Đảm bảo đường dẫn đúng

function App() {
  return (
      // <h1 class="font-bold text-3xl underline">Hello world!</h1>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <AthleteList />
      </div>

  );
}

export default App;
