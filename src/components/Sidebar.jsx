import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      svgPath: (
        <span>
          <svg
            className="stroke-gray-500 transition-all duration-500 group-hover:stroke-indigo-600"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M12.5 14.0902L7.5 14.0902M2.5 9.09545V14.0902C2.5 15.6976 2.5 16.5013 2.98816 17.0006C3.47631 17.5 4.26198 17.5 5.83333 17.5H14.1667C15.738 17.5 16.5237 17.5 17.0118 17.0006C17.5 16.5013 17.5 15.6976 17.5 14.0902V10.9203C17.5 9.1337 17.5 8.24039 17.1056 7.48651C16.7112 6.73262 15.9846 6.2371 14.5313 5.24606L11.849 3.41681C10.9528 2.8056 10.5046 2.5 10 2.5C9.49537 2.5 9.04725 2.80561 8.151 3.41681L3.98433 6.25832C3.25772 6.75384 2.89442 7.0016 2.69721 7.37854C2.5 7.75548 2.5 8.20214 2.5 9.09545Z"
              stroke=""
              strokeWidth="1.6"
              strokeLinecap="round"
            ></path>
          </svg>
        </span>
      ),
    },
    {
      name: "Athlete",
      path: "/athlete",
      svgPath: (
        <svg
          className="stroke-gray-500 transition-all duration-500 group-hover:stroke-indigo-600"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M16.6667 17.5V16.7857C16.6667 15.9004 16.6667 15.4578 16.5831 15.0916C16.2982 13.8433 15.3234 12.8685 14.0751 12.5836C13.7089 12.5 13.2663 12.5 12.381 12.5H8.33333C6.7802 12.5 6.00363 12.5 5.39106 12.7537C4.5743 13.092 3.92538 13.741 3.58707 14.5577C3.33333 15.1703 3.33333 15.9469 3.33333 17.5M13.3333 5.83333C13.3333 7.67428 11.8409 9.16667 10 9.16667C8.15905 9.16667 6.66667 7.67428 6.66667 5.83333C6.66667 3.99238 8.15905 2.5 10 2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333Z"
            stroke=""
            strokeWidth="1.6"
            strokeLinecap="round"
          ></path>
        </svg>
      ),
    },
    {
      name: "Analyst",
      path: "/analyst",
      svgPath: (
        <span>
          <svg
            className="stroke-gray-500 transition-all duration-500 group-hover:stroke-indigo-600"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M13.892 7.83239L10.3009 11.4235C9.74538 11.979 9.4676 12.2568 9.12242 12.2568C8.77724 12.2568 8.49947 11.979 7.94391 11.4235L6.66667 10.1462M9.16667 17.5H10.8333C13.976 17.5 15.5474 17.5 16.5237 16.5237C17.5 15.5474 17.5 13.976 17.5 10.8333V9.16667C17.5 6.02397 17.5 4.45262 16.5237 3.47631C15.5474 2.5 13.976 2.5 10.8333 2.5H9.16667C6.02397 2.5 4.45262 2.5 3.47631 3.47631C2.5 4.45262 2.5 6.02397 2.5 9.16667V10.8333C2.5 13.976 2.5 15.5474 3.47631 16.5237C4.45262 17.5 6.02397 17.5 9.16667 17.5Z"
              stroke=""
              strokeWidth="1.6"
              strokeLinecap="round"
            ></path>
          </svg>
        </span>
      ),
    },
    {
      name: "Calendar",
      path: "/calendar",
      svgPath: (
        <span>
          <svg
            className="fill-gray-500 transition-all duration-500 group-hover:fill-indigo-600"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M14.1667 3.75001L14.1667 4.55001L14.1667 3.75001ZM5.83333 3.75002L5.83333 2.95002L5.83333 3.75002ZM6.70898 12.4667C7.15081 12.4667 7.50898 12.1085 7.50898 11.6667C7.50898 11.2248 7.15081 10.8667 6.70898 10.8667V12.4667ZM6.66732 10.8667C6.22549 10.8667 5.86732 11.2248 5.86732 11.6667C5.86732 12.1085 6.22549 12.4667 6.66732 12.4667V10.8667ZM6.70898 14.9667C7.15081 14.9667 7.50898 14.6085 7.50898 14.1667C7.50898 13.7248 7.15081 13.3667 6.70898 13.3667V14.9667ZM6.66732 13.3667C6.22549 13.3667 5.86732 13.7248 5.86732 14.1667C5.86732 14.6085 6.22549 14.9667 6.66732 14.9667V13.3667ZM10.0423 12.4667C10.4841 12.4667 10.8423 12.1085 10.8423 11.6667C10.8423 11.2248 10.4841 10.8667 10.0423 10.8667V12.4667ZM10.0007 10.8667C9.55882 10.8667 9.20065 11.2248 9.20065 11.6667C9.20065 12.1085 9.55882 12.4667 10.0007 12.4667V10.8667ZM10.0423 14.9667C10.4841 14.9667 10.8423 14.6085 10.8423 14.1667C10.8423 13.7248 10.4841 13.3667 10.0423 13.3667V14.9667ZM10.0007 13.3667C9.55882 13.3667 9.20065 13.7248 9.20065 14.1667C9.20065 14.6085 9.55882 14.9667 10.0007 14.9667V13.3667ZM13.3757 12.4667C13.8175 12.4667 14.1757 12.1085 14.1757 11.6667C14.1757 11.2248 13.8175 10.8667 13.3757 10.8667V12.4667ZM13.334 10.8667C12.8922 10.8667 12.534 11.2248 12.534 11.6667C12.534 12.1085 12.8922 12.4667 13.334 12.4667V10.8667ZM13.3757 14.9667C13.8175 14.9667 14.1757 14.6085 14.1757 14.1667C14.1757 13.7248 13.8175 13.3667 13.3757 13.3667V14.9667ZM13.334 13.3667C12.8922 13.3667 12.534 13.7248 12.534 14.1667C12.534 14.6085 12.8922 14.9667 13.334 14.9667V13.3667ZM7.46667 2.5C7.46667 2.05817 7.10849 1.7 6.66667 1.7C6.22484 1.7 5.86667 2.05817 5.86667 2.5H7.46667ZM5.86667 5C5.86667 5.44183 6.22484 5.8 6.66667 5.8C7.10849 5.8 7.46667 5.44183 7.46667 5H5.86667ZM14.1333 2.5C14.1333 2.05817 13.7752 1.7 13.3333 1.7C12.8915 1.7 12.5333 2.05817 12.5333 2.5H14.1333ZM12.5333 5C12.5333 5.44183 12.8915 5.8 13.3333 5.8C13.7752 5.8 14.1333 5.44183 14.1333 5H12.5333ZM5.83333 4.55002L14.1667 4.55001L14.1667 2.95001L5.83333 2.95002L5.83333 4.55002ZM16.7 7.08334V14.1667H18.3V7.08334H16.7ZM14.1667 16.7H5.83333V18.3H14.1667V16.7ZM3.3 14.1667V7.08335H1.7V14.1667H3.3ZM5.83333 16.7C5.02504 16.7 4.4993 16.6983 4.11115 16.6461C3.746 16.597 3.6245 16.5168 3.55384 16.4462L2.42247 17.5776C2.83996 17.995 3.35538 18.1589 3.89795 18.2319C4.4175 18.3017 5.07027 18.3 5.83333 18.3V16.7ZM1.7 14.1667C1.7 14.9298 1.6983 15.5825 1.76815 16.1021C1.8411 16.6446 2.00498 17.1601 2.42247 17.5776L3.55384 16.4462C3.48318 16.3755 3.40298 16.254 3.35389 15.8889C3.3017 15.5007 3.3 14.975 3.3 14.1667H1.7ZM16.7 14.1667C16.7 14.975 16.6983 15.5007 16.6461 15.8889C16.597 16.254 16.5168 16.3755 16.4462 16.4462L17.5775 17.5776C17.995 17.1601 18.1589 16.6446 18.2318 16.1021C18.3017 15.5825 18.3 14.9298 18.3 14.1667H16.7ZM14.1667 18.3C14.9297 18.3 15.5825 18.3017 16.1021 18.2319C16.6446 18.1589 17.16 17.995 17.5775 17.5776L16.4462 16.4462C16.3755 16.5168 16.254 16.597 15.8889 16.6461C15.5007 16.6983 14.975 16.7 14.1667 16.7V18.3ZM14.1667 4.55001C14.975 4.55 15.5007 4.5517 15.8889 4.60389C16.254 4.65298 16.3755 4.73318 16.4462 4.80384L17.5775 3.67247C17.16 3.25498 16.6446 3.0911 16.102 3.01816C15.5825 2.9483 14.9297 2.95 14.1667 2.95001L14.1667 4.55001ZM18.3 7.08334C18.3 6.32028 18.3017 5.66751 18.2318 5.14795C18.1589 4.60538 17.995 4.08996 17.5775 3.67247L16.4462 4.80384C16.5168 4.87451 16.597 4.996 16.6461 5.36115C16.6983 5.74931 16.7 6.27505 16.7 7.08334H18.3ZM5.83333 2.95002C5.07027 2.95002 4.4175 2.94832 3.89794 3.01818C3.35538 3.09112 2.83996 3.255 2.42247 3.67249L3.55384 4.80386C3.6245 4.7332 3.746 4.653 4.11114 4.60391C4.4993 4.55172 5.02504 4.55002 5.83333 4.55002L5.83333 2.95002ZM3.3 7.08335C3.3 6.27506 3.3017 5.74933 3.35389 5.36117C3.40298 4.99602 3.48318 4.87453 3.55384 4.80386L2.42247 3.67249C2.00498 4.08999 1.8411 4.6054 1.76815 5.14797C1.6983 5.66752 1.7 6.3203 1.7 7.08335H3.3ZM2.5 9.13333H17.5V7.53333H2.5V9.13333ZM6.70898 10.8667H6.66732V12.4667H6.70898V10.8667ZM6.70898 13.3667H6.66732V14.9667H6.70898V13.3667ZM10.0423 10.8667H10.0007V12.4667H10.0423V10.8667ZM10.0423 13.3667H10.0007V14.9667H10.0423V13.3667ZM13.3757 10.8667H13.334V12.4667H13.3757V10.8667ZM13.3757 13.3667H13.334V14.9667H13.3757V13.3667ZM5.86667 2.5V5H7.46667V2.5H5.86667ZM12.5333 2.5V5H14.1333V2.5H12.5333Z"
              fill=""
            ></path>
          </svg>
        </span>
      ),
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="border-r border-solid border-gray-200 fixed inset-y-0 z-50 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-auto transition-all transform bg-white shadow-lg lg:z-[1000] max-sm:w-full lg:fixed lg:shadow-none">
      {/* Sidebar header */}
      <div className="flex items-center justify-between flex-shrink-0 px-4">
        <div className="border-b w-full border-solid border-gray-200 py-6 flex items-center justify-between relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="size-6 max-lg:hidden lg:hidden"
          >
            <path d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" />
          </svg>
          Pentathlon Sport
          <button className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="size-4"
            >
              <path d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" />
            </svg>
          </button>
        </div>
      </div>
      {/* Sidebar link */}
      <nav className="flex-1 overflow-hidden overflow-y-auto pt-6 text-gray-400 ">
        <h5 className="py-1.5 pl-3 text-xs font-medium text-gray-400 uppercase">
          MENU
        </h5>
        <ul className="p-2 overflow-hidden flex flex-col gap-1">
          {menuItems.map((item) => (
            <Link to={item.path} key={item.path}>
              <li
                className="flex items-center gap-3 text-gray-500 text-sm font-medium py-2 px-3 rounded-lg transition-all duration-500 hover:bg-gray-200 active:bg-gray-50 hover:text-gray-900"
                
              >
                <span>{item.svgPath}</span>
                <span>{item.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      {/* Sidebar footer */}
      <div className="flex-shrink-0">
        <div className="py-5 px-4 flex justify-between items-center border-t border-solid border-gray-200">
          <div className="user flex items-center gap-2.5">
            <div className="avatar ">
              <img
                className="w-12 h-12 rounded-full flex items-center justify-center"
                src="../../public/download.jpg"
                alt=""
              />
            </div>
            <div className="name-email">
              <p className="font-semibold text-xs text-gray-900 mb-0.5">
                Ronald Richards
              </p>
              <p className="font-medium text-xs text-gray-500">@ronaldrich</p>
            </div>
          </div>
          <button className="rounded-full p-0.5 bg-white transition-all duration-500 hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M7.50295 4.99634L12.5032 9.99654L7.5 14.9997"
                stroke="#6B7280"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );

  // return (
  //   <nav className="bg-blue-500 p-4 flex justify-between items-center">
  //     <h1 className="text-white text-xl font-bold">Quản lý VĐV</h1>
  //     {user && (
  //       <button onClick={handleLogout} className="bg-red-500 px-4 py-2 text-white rounded-lg">
  //         Đăng xuất
  //       </button>
  //     )}
  //   </nav>
  // );
};

export default Sidebar;



