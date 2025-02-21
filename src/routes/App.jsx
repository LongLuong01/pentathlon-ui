import React from "react";
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "../context/AuthContext";
import Login from "../pages/Login";
import Analyst from "../pages/Analyst"; // Đảm bảo đường dẫn đúng
import Athlete from "../pages/Athlete"; // Đảm bảo đường dẫn đúng
import Calendar from "../pages/Calendar"; // Đảm bảo đường dẫn đúng
import Dashboard from "../pages/Dashboard";
import Sidebar from "../components/Sidebar";

// Component bảo vệ trang admin
const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log("private route")
  return user ? (
    <div>
      <Sidebar />
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
        <Route path="/athlete" element={<PrivateRoute><Athlete /></PrivateRoute>} />
        <Route path="/analyst" element={<PrivateRoute><Analyst /></PrivateRoute>} />
        <Route path="/calendar" element={<PrivateRoute><Calendar /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
