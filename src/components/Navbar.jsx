import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">Quản lý VĐV</h1>
      {user && (
        <button onClick={handleLogout} className="bg-red-500 px-4 py-2 text-white rounded-lg">
          Đăng xuất
        </button>
      )}
    </nav>
  );
};

export default Navbar;



