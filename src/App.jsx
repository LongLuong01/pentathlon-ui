import React from "react";
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Login from "./pages/Login";
import AthleteList from "./components/AthleteList"; // Đảm bảo đường dẫn đúng
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

// Component bảo vệ trang admin
const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log("private route")
  return user ? (
    <div>
      <Navbar />
      {children}
    </div>
  ) : (
    <Navigate to="/login" />
  );
  // return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
