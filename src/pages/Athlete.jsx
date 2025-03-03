import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import athleteList from "../data/athleteList";

const Athlete = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [openRowId, setOpenRowId] = useState(null); // Lưu ID của hàng đang mở dropdown
  // const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [athletes, setAthletes] = useState(athleteList);
  const [showAddAthleteModal, setShowAddAthleteModal] = useState(false);

  const filteredAthletes = athletes.filter((athlete) =>
    athlete.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const closeModal = () => {
    setShowAddAthleteModal(false);
  };

  const handleStatsClick = (athleteID) => {
    // navigate("/analyst", { state: { athleteID } }); // Điều hướng sang trang /analyst
  };

  // Toggle dropdown của hàng cụ thể
  const toggleDropdown = (rowId) => {
    setOpenRowId(openRowId === rowId ? null : rowId); // Nếu đang mở thì đóng, nếu đang đóng thì mở
  };

  const sportsOptions = ["Bơi", "Chạy", "Bắn súng", "Đấu kiếm"];
  const ageGroupOptions = ["U16", "U19", "U20", "U23", "National"];


    // useEffect(() => {
    //     const userLogin = localStorage.getItem("user"); // Lấy token từ localStorage
    //     const token = JSON.parse(userLogin).token;
        
    //     // ktra token - dang nhap
    //     if (!token) {
    //         setError("Bạn chưa đăng nhập!");
    //         setLoading(false);
    //         return;
    //     }

    //     // get data qua API
    //     fetch("http://localhost:5000/api/athletes", {
    //         headers: {
    //             "Authorization": `Bearer ${token}`, // Đảm bảo gửi đúng token
    //             "Content-Type": "application/json"
    //         },
    //     })
    //     .then((res) => {
    //         if (!res.ok) {
    //             throw new Error(`Lỗi API: ${res.status} ${res.statusText}`);
    //         }
    //         return res.json();
    //     })
    //     .then((data) => {
    //         if (Array.isArray(data)) {
    //             setAthletes(data);
    //         } else {
    //             throw new Error("Dữ liệu API không hợp lệ");
    //         }
    //     })
    //     .catch((err) => {
    //         console.error("Lỗi khi lấy dữ liệu!", err);
    //         setError(err.message);
    //     })
    //     .finally(() => setLoading(false));
    // }, []);

    return (
      <div>
        {/* Header */}
        <div className="flex items-center justify-between gap-1 sm:gap-6 py-3.5 px-4 border-b border-solid border-gray-200 fixed z-20 top-0 max-lg:left-0 bg-white lg:fixed right-0 lg:w-[calc(100%-270px)]">
          <div className="relative flex">
            <div className="block max-lg:pl-6">
              <h6 className="text-sm sm:text-lg font-semibold text-gray-900 whitespace-nowrap mb-0.5">
                Welcome back,
                <span className="text-indigo-600 text-base sm:text-lg font-semibold">
                  Ronald!
                </span>
              </h6>
              <p className="text-xs font-medium text-gray-900">Home</p>
            </div>
          </div>
          <div className="max-sm:hidden flex flex-row items-center gap-1 sm:gap-4">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="relative w-max">
                <svg
                  className="absolute top-1.5 sm:top-3 right-3 z-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.5001 17.5L15.4167 15.4167M15.8334 9.16667C15.8334 5.48477 12.8486 2.5 9.16673 2.5C5.48483 2.5 2.50006 5.48477 2.50006 9.16667C2.50006 12.8486 5.48483 15.8333 9.16673 15.8333C11.0006 15.8333 12.6615 15.0929 13.8668 13.8947C15.0814 12.6872 15.8334 11.0147 15.8334 9.16667Z"
                    stroke="#6B7280"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <input
                  type="search"
                  name=""
                  id=""
                  className="w-8 sm:w-11 h-8 sm:h-11 outline-0 cursor-pointer bg-transparent relative z-10 transition-all duration-300 focus-within:border focus-within:border-gray-200 focus-within:w-80 focus-within:rounded-md focus-within:pl-3"
                />
              </div>
              <p className="text-gray-200 font-normal">|</p>
            </div>
            <button className="group py-2 px-2 md:pr-5 md:pl-3.5 flex items-center gap-1.5 font-medium text-sm text-gray-500 border border-solid border-gray-300 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900">
              <svg
                className="fill-gray-500 transition-all duration-300 group-hover:fill-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M12.75 3.375L12.75 4.025L12.75 3.375ZM5.24999 3.37502L5.24999 2.72502L5.24999 3.37502ZM6.03809 11.15C6.39707 11.15 6.68809 10.859 6.68809 10.5C6.68809 10.141 6.39707 9.85 6.03809 9.85V11.15ZM6.00059 9.85C5.6416 9.85 5.35059 10.141 5.35059 10.5C5.35059 10.859 5.6416 11.15 6.00059 11.15V9.85ZM6.03809 13.4C6.39707 13.4 6.68809 13.109 6.68809 12.75C6.68809 12.391 6.39707 12.1 6.03809 12.1V13.4ZM6.00059 12.1C5.6416 12.1 5.35059 12.391 5.35059 12.75C5.35059 13.109 5.6416 13.4 6.00059 13.4V12.1ZM9.03809 11.15C9.39707 11.15 9.68809 10.859 9.68809 10.5C9.68809 10.141 9.39707 9.85 9.03809 9.85V11.15ZM9.00059 9.85C8.6416 9.85 8.35059 10.141 8.35059 10.5C8.35059 10.859 8.6416 11.15 9.00059 11.15V9.85ZM9.03809 13.4C9.39707 13.4 9.68809 13.109 9.68809 12.75C9.68809 12.391 9.39707 12.1 9.03809 12.1V13.4ZM9.00059 12.1C8.6416 12.1 8.35059 12.391 8.35059 12.75C8.35059 13.109 8.6416 13.4 9.00059 13.4V12.1ZM12.0381 11.15C12.3971 11.15 12.6881 10.859 12.6881 10.5C12.6881 10.141 12.3971 9.85 12.0381 9.85V11.15ZM12.0006 9.85C11.6416 9.85 11.3506 10.141 11.3506 10.5C11.3506 10.859 11.6416 11.15 12.0006 11.15V9.85ZM12.0381 13.4C12.3971 13.4 12.6881 13.109 12.6881 12.75C12.6881 12.391 12.3971 12.1 12.0381 12.1V13.4ZM12.0006 12.1C11.6416 12.1 11.3506 12.391 11.3506 12.75C11.3506 13.109 11.6416 13.4 12.0006 13.4V12.1ZM6.65 2.25C6.65 1.89101 6.35898 1.6 6 1.6C5.64101 1.6 5.35 1.89101 5.35 2.25H6.65ZM5.35 4.5C5.35 4.85899 5.64101 5.15 6 5.15C6.35898 5.15 6.65 4.85899 6.65 4.5H5.35ZM12.65 2.25C12.65 1.89101 12.359 1.6 12 1.6C11.641 1.6 11.35 1.89101 11.35 2.25H12.65ZM11.35 4.5C11.35 4.85899 11.641 5.15 12 5.15C12.359 5.15 12.65 4.85899 12.65 4.5H11.35ZM5.25 4.02502L12.75 4.025L12.75 2.725L5.24999 2.72502L5.25 4.02502ZM15.1 6.375V12.75H16.4V6.375H15.1ZM12.75 15.1H5.25V16.4H12.75V15.1ZM2.9 12.75V6.37502H1.6V12.75H2.9ZM5.25 15.1C4.52452 15.1 4.0458 15.0986 3.6907 15.0509C3.35431 15.0057 3.22773 14.9298 3.14896 14.8511L2.22972 15.7703C2.59029 16.1309 3.03693 16.2747 3.51748 16.3393C3.97933 16.4014 4.56127 16.4 5.25 16.4V15.1ZM1.6 12.75C1.6 13.4388 1.59862 14.0207 1.66071 14.4825C1.72532 14.9631 1.86915 15.4097 2.22972 15.7703L3.14896 14.8511C3.07019 14.7723 2.99435 14.6457 2.94912 14.3093C2.90138 13.9542 2.9 13.4755 2.9 12.75H1.6ZM15.1 12.75C15.1 13.4755 15.0986 13.9542 15.0509 14.3093C15.0057 14.6457 14.9298 14.7723 14.851 14.8511L15.7703 15.7703C16.1308 15.4097 16.2747 14.9631 16.3393 14.4825C16.4014 14.0207 16.4 13.4388 16.4 12.75H15.1ZM12.75 16.4C13.4387 16.4 14.0207 16.4014 14.4825 16.3393C14.9631 16.2747 15.4097 16.1309 15.7703 15.7703L14.851 14.8511C14.7723 14.9298 14.6457 15.0057 14.3093 15.0509C13.9542 15.0986 13.4755 15.1 12.75 15.1V16.4ZM12.75 4.025C13.4755 4.025 13.9542 4.02638 14.3093 4.07412C14.6457 4.11935 14.7723 4.19519 14.851 4.27396L15.7703 3.35472C15.4097 2.99415 14.9631 2.85032 14.4825 2.78572C14.0207 2.72362 13.4387 2.725 12.75 2.725L12.75 4.025ZM16.4 6.375C16.4 5.68627 16.4014 5.10433 16.3393 4.64248C16.2747 4.16194 16.1308 3.71529 15.7703 3.35472L14.851 4.27396C14.9298 4.35273 15.0057 4.47931 15.0509 4.81571C15.0986 5.1708 15.1 5.64952 15.1 6.375H16.4ZM5.24999 2.72502C4.56126 2.72502 3.97933 2.72364 3.51748 2.78573C3.03693 2.85034 2.59029 2.99417 2.22972 3.35474L3.14896 4.27398C3.22773 4.19521 3.35431 4.11937 3.6907 4.07414C4.04579 4.0264 4.52451 4.02502 5.25 4.02502L5.24999 2.72502ZM2.9 6.37502C2.9 5.64954 2.90138 5.17081 2.94912 4.81572C2.99435 4.47933 3.07019 4.35275 3.14896 4.27398L2.22972 3.35474C1.86915 3.71531 1.72532 4.16195 1.66071 4.6425C1.59862 5.10435 1.6 5.68629 1.6 6.37502H2.9ZM2.25 8.15H15.75V6.85H2.25V8.15ZM6.03809 9.85H6.00059V11.15H6.03809V9.85ZM6.03809 12.1H6.00059V13.4H6.03809V12.1ZM9.03809 9.85H9.00059V11.15H9.03809V9.85ZM9.03809 12.1H9.00059V13.4H9.03809V12.1ZM12.0381 9.85H12.0006V11.15H12.0381V9.85ZM12.0381 12.1H12.0006V13.4H12.0381V12.1ZM5.35 2.25V4.5H6.65V2.25H5.35ZM11.35 2.25V4.5H12.65V2.25H11.35Z"
                  fill=""
                ></path>
              </svg>
              <span className="max-md:hidden">Training Schedule</span>
            </button>
            <button
              onClick={() => setShowAddAthleteModal(true)}
              className="hover:cursor-pointer group py-2 px-2 md:pr-5 md:pl-3.5 flex items-center whitespace-nowrap gap-1.5 font-medium text-sm text-white border border-solid border-indigo-600 bg-indigo-600 rounded-lg transition-all duration-300 hover:bg-indigo-800 hover:border-indigo-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M9 4.5V13.5M13.5 9H4.5"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                ></path>
              </svg>
              <span className="max-md:hidden">Add Athlete</span>
            </button>
          </div>
  
          {/** Add Athlete Modal */}
          {showAddAthleteModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-opacity-50" onClick={closeModal}>
              <div
                className="p-6 rounded-xl w-[500px] text-black h-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-medium mb-4 text-[#00a884]">
                    Add Athlete
                  </h2>
  
                  {/* Personal Information */}
                  <div className="mb-4 border-b pb-4">
                    {/** AVATAR */}
                    <div className="mt-4 flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer border-2 border-[#00a884] hover:bg-gray-300 transition">
                        <span className="text-[#00a884] text-xl">+</span>
                      </div>
                      <span className="text-sm text-gray-500 mt-2 font-medium">
                        Profile Picture
                      </span>
                    </div>
  
                    <h3 className="text-lg font-medium mb-2 text-[#00a884]">
                      Personal Information
                    </h3>
  
                    {/** FULLNAME */}
                    <div className="mb-3">
                      <label className="block text-gray-700 font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#00a884] focus:border-[#00a884]"
                        placeholder="Enter full name"
                      />
                    </div>
                    <div className="flex gap-4">
                      {/** GENDER */}
                      <div className="w-1/2">
                        <label className="block text-gray-700 font-medium">
                          Gender
                        </label>
                        <select className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#00a884] focus:border-[#00a884]">
                          <option>Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
  
                      {/** DATE OF BIRTH */}
                      <div className="w-1/2">
                        <label className="block text-gray-700 font-medium">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#00a884] focus:border-[#00a884]"
                        />
                      </div>
                    </div>
                  </div>
  
                  {/* Contact Information */}
                  <div className="mb-4">
                    <h3 className="text-lg font-medium mb-2 text-[#00a884]">
                      Contact Information
                    </h3>
  
                    {[
                      {
                        label: "Email",
                        type: "email",
                        placeholder: "Enter email",
                      },
                      {
                        label: "Phone Number",
                        type: "text",
                        placeholder: "Enter phone number",
                      },
                    ].map(({ label, type, placeholder }, index) => (
                      <div className="mb-3" key={index}>
                        <label className="block text-gray-700 font-medium">
                          {label}
                        </label>
                        <input
                          type={type}
                          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#00a884] focus:border-[#00a884]"
                          placeholder={placeholder}
                        />
                      </div>
                    ))}
  
                    <div className="mb-3">
                      <label className="block text-gray-700 font-medium">
                        Address
                      </label>
                      <textarea
                        className="w-full border border-gray-300 rounded-lg p-2 h-20 focus:outline-none focus:ring-2 focus:ring-[#00a884] focus:border-[#00a884]"
                        placeholder="Enter address"
                      ></textarea>
                    </div>
                  </div>
  
                  {/* Save Button */}
                  <button className="w-full bg-[#00a884] text-white py-2 rounded-lg font-medium hover:bg-green-600 transition">
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
  
          {/* Hidden button for mobile */}
          <div className="flex items-center gap-2 sm:hidden">
            <div className="relative w-max">
              <svg
                className="absolute top-1.5 sm:top-3 right-3 z-0"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.5001 17.5L15.4167 15.4167M15.8334 9.16667C15.8334 5.48477 12.8486 2.5 9.16673 2.5C5.48483 2.5 2.50006 5.48477 2.50006 9.16667C2.50006 12.8486 5.48483 15.8333 9.16673 15.8333C11.0006 15.8333 12.6615 15.0929 13.8668 13.8947C15.0814 12.6872 15.8334 11.0147 15.8334 9.16667Z"
                  stroke="#6B7280"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                ></path>
              </svg>
              <input
                type="search"
                name=""
                id=""
                className="w-8 sm:w-11 h-8 sm:h-11 outline-0 cursor-pointer bg-transparent relative z-10 transition-all duration-300 focus-within:border focus-within:border-gray-200 focus-within:w-44 focus-within:rounded-md focus-within:pl-3"
              />
            </div>
            <div className="dropdown relative inline-flex">
              <button
                type="button"
                data-target="dropdown-default"
                className="dropdown-toggle inline-flex justify-center items-center gap-2 p-0.5 text-sm text-white rounded-md cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0161 16.9896V17.0396M12.0161 11.976V12.026M12.0161 6.96228V7.01228"
                    stroke="#6B7280"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
              <div
                id="dropdown-default"
                className="dropdown-menu rounded-xl shadow-lg bg-white absolute right-2 top-full w-44 mt-2 open hidden"
                aria-labelledby="dropdown-default"
              >
                <ul className="py-2 flex flex-col gap-2.5 px-3">
                  <li className="flex items-center justify-start gap-1.5">
                    <button className="group py-2 px-2 md:pr-5  md:pl-3.5 flex items-center gap-1.5 font-medium text-sm text-gray-500 border border-solid border-gray-300 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900">
                      <svg
                        className="stroke-gray-500 transition-all duration-300 group-hover:stroke-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M11.3235 2.5H9.16667C6.02397 2.5 4.45262 2.5 3.47631 3.47631C2.5 4.45262 2.5 6.02397 2.5 9.16667V10.8333C2.5 13.976 2.5 15.5474 3.47631 16.5237C4.45262 17.5 6.02397 17.5 9.16667 17.5H10.8333C13.976 17.5 15.5474 17.5 16.5237 16.5237C17.5 15.5474 17.5 13.976 17.5 10.8333V9.55882M10 10H5.83333M12.5 13.3333H5.83333M17.5 4.58333C17.5 5.73393 16.5673 6.66667 15.4167 6.66667C14.2661 6.66667 13.3333 5.73393 13.3333 4.58333C13.3333 3.43274 14.2661 2.5 15.4167 2.5C16.5673 2.5 17.5 3.43274 17.5 4.58333Z"
                          stroke=""
                          strokeWidth="1.3"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </button>
                    <span className="text-sm font-medium text-gray-700">
                      Notification
                    </span>
                  </li>
                  <li className="flex items-center justify-start gap-1.5">
                    <button className="group py-2 px-2 md:pr-5 md:pl-3.5 flex items-center gap-1.5 font-medium text-sm text-gray-500 border border-solid border-gray-300 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900">
                      <svg
                        className="fill-gray-500 transition-all duration-300 group-hover:fill-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M12.75 3.375L12.75 4.025L12.75 3.375ZM5.24999 3.37502L5.24999 2.72502L5.24999 3.37502ZM6.03809 11.15C6.39707 11.15 6.68809 10.859 6.68809 10.5C6.68809 10.141 6.39707 9.85 6.03809 9.85V11.15ZM6.00059 9.85C5.6416 9.85 5.35059 10.141 5.35059 10.5C5.35059 10.859 5.6416 11.15 6.00059 11.15V9.85ZM6.03809 13.4C6.39707 13.4 6.68809 13.109 6.68809 12.75C6.68809 12.391 6.39707 12.1 6.03809 12.1V13.4ZM6.00059 12.1C5.6416 12.1 5.35059 12.391 5.35059 12.75C5.35059 13.109 5.6416 13.4 6.00059 13.4V12.1ZM9.03809 11.15C9.39707 11.15 9.68809 10.859 9.68809 10.5C9.68809 10.141 9.39707 9.85 9.03809 9.85V11.15ZM9.00059 9.85C8.6416 9.85 8.35059 10.141 8.35059 10.5C8.35059 10.859 8.6416 11.15 9.00059 11.15V9.85ZM9.03809 13.4C9.39707 13.4 9.68809 13.109 9.68809 12.75C9.68809 12.391 9.39707 12.1 9.03809 12.1V13.4ZM9.00059 12.1C8.6416 12.1 8.35059 12.391 8.35059 12.75C8.35059 13.109 8.6416 13.4 9.00059 13.4V12.1ZM12.0381 11.15C12.3971 11.15 12.6881 10.859 12.6881 10.5C12.6881 10.141 12.3971 9.85 12.0381 9.85V11.15ZM12.0006 9.85C11.6416 9.85 11.3506 10.141 11.3506 10.5C11.3506 10.859 11.6416 11.15 12.0006 11.15V9.85ZM12.0381 13.4C12.3971 13.4 12.6881 13.109 12.6881 12.75C12.6881 12.391 12.3971 12.1 12.0381 12.1V13.4ZM12.0006 12.1C11.6416 12.1 11.3506 12.391 11.3506 12.75C11.3506 13.109 11.6416 13.4 12.0006 13.4V12.1ZM6.65 2.25C6.65 1.89101 6.35898 1.6 6 1.6C5.64101 1.6 5.35 1.89101 5.35 2.25H6.65ZM5.35 4.5C5.35 4.85899 5.64101 5.15 6 5.15C6.35898 5.15 6.65 4.85899 6.65 4.5H5.35ZM12.65 2.25C12.65 1.89101 12.359 1.6 12 1.6C11.641 1.6 11.35 1.89101 11.35 2.25H12.65ZM11.35 4.5C11.35 4.85899 11.641 5.15 12 5.15C12.359 5.15 12.65 4.85899 12.65 4.5H11.35ZM5.25 4.02502L12.75 4.025L12.75 2.725L5.24999 2.72502L5.25 4.02502ZM15.1 6.375V12.75H16.4V6.375H15.1ZM12.75 15.1H5.25V16.4H12.75V15.1ZM2.9 12.75V6.37502H1.6V12.75H2.9ZM5.25 15.1C4.52452 15.1 4.0458 15.0986 3.6907 15.0509C3.35431 15.0057 3.22773 14.9298 3.14896 14.8511L2.22972 15.7703C2.59029 16.1309 3.03693 16.2747 3.51748 16.3393C3.97933 16.4014 4.56127 16.4 5.25 16.4V15.1ZM1.6 12.75C1.6 13.4388 1.59862 14.0207 1.66071 14.4825C1.72532 14.9631 1.86915 15.4097 2.22972 15.7703L3.14896 14.8511C3.07019 14.7723 2.99435 14.6457 2.94912 14.3093C2.90138 13.9542 2.9 13.4755 2.9 12.75H1.6ZM15.1 12.75C15.1 13.4755 15.0986 13.9542 15.0509 14.3093C15.0057 14.6457 14.9298 14.7723 14.851 14.8511L15.7703 15.7703C16.1308 15.4097 16.2747 14.9631 16.3393 14.4825C16.4014 14.0207 16.4 13.4388 16.4 12.75H15.1ZM12.75 16.4C13.4387 16.4 14.0207 16.4014 14.4825 16.3393C14.9631 16.2747 15.4097 16.1309 15.7703 15.7703L14.851 14.8511C14.7723 14.9298 14.6457 15.0057 14.3093 15.0509C13.9542 15.0986 13.4755 15.1 12.75 15.1V16.4ZM12.75 4.025C13.4755 4.025 13.9542 4.02638 14.3093 4.07412C14.6457 4.11935 14.7723 4.19519 14.851 4.27396L15.7703 3.35472C15.4097 2.99415 14.9631 2.85032 14.4825 2.78572C14.0207 2.72362 13.4387 2.725 12.75 2.725L12.75 4.025ZM16.4 6.375C16.4 5.68627 16.4014 5.10433 16.3393 4.64248C16.2747 4.16194 16.1308 3.71529 15.7703 3.35472L14.851 4.27396C14.9298 4.35273 15.0057 4.47931 15.0509 4.81571C15.0986 5.1708 15.1 5.64952 15.1 6.375H16.4ZM5.24999 2.72502C4.56126 2.72502 3.97933 2.72364 3.51748 2.78573C3.03693 2.85034 2.59029 2.99417 2.22972 3.35474L3.14896 4.27398C3.22773 4.19521 3.35431 4.11937 3.6907 4.07414C4.04579 4.0264 4.52451 4.02502 5.25 4.02502L5.24999 2.72502ZM2.9 6.37502C2.9 5.64954 2.90138 5.17081 2.94912 4.81572C2.99435 4.47933 3.07019 4.35275 3.14896 4.27398L2.22972 3.35474C1.86915 3.71531 1.72532 4.16195 1.66071 4.6425C1.59862 5.10435 1.6 5.68629 1.6 6.37502H2.9ZM2.25 8.15H15.75V6.85H2.25V8.15ZM6.03809 9.85H6.00059V11.15H6.03809V9.85ZM6.03809 12.1H6.00059V13.4H6.03809V12.1ZM9.03809 9.85H9.00059V11.15H9.03809V9.85ZM9.03809 12.1H9.00059V13.4H9.03809V12.1ZM12.0381 9.85H12.0006V11.15H12.0381V9.85ZM12.0381 12.1H12.0006V13.4H12.0381V12.1ZM5.35 2.25V4.5H6.65V2.25H5.35ZM11.35 2.25V4.5H12.65V2.25H11.35Z"
                          fill=""
                        ></path>
                      </svg>
                    </button>
                    <span className="text-sm font-medium text-gray-700">
                      Training Schedule
                    </span>
                  </li>
                  <li className="flex items-center justify-start gap-1.5">
                    <button className="group py-2 px-2 md:pr-5 md:pl-3.5 flex items-center whitespace-nowrap gap-1.5 font-medium text-sm text-white border border-solid border-indigo-600 bg-indigo-600 rounded-lg transition-all duration-300 hover:bg-indigo-700 hover:border-indigo-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M9 4.5V13.5M13.5 9H4.5"
                          stroke="white"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </button>
                    <span className="text-sm font-medium text-gray-700">
                      Add Athlete
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Main content */}
        <div className="w-full sm:px-4 px-4 py-6 pt-28 h-[calc(100vh-0px)] overflow-y-auto">
          <div className="grid grid-cols-12 gap-6 pt6">
            <div className="col-span-12 xl:col-span-12">
              <div className="flex flex-col gap-6 w-full">
                <div className="rounded-xl pb-4 border border-solid border-gray-200 overflow-auto">
                  <div className="flex items-center justify-between p-4">
                    <h5 className="text-base font-semibold text-gray-900">
                      Athletes List
                    </h5>
                    <form>
                      <div className="relative text-gray-500 focus-within:text-gray-900">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            className="stroke-current ml-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M12.25 12.25L10.7917 10.7917M11.0833 6.41667C11.0833 3.83934 8.994 1.75 6.41667 1.75C3.83934 1.75 1.75 3.83934 1.75 6.41667C1.75 8.994 3.83934 11.0833 6.41667 11.0833C7.70036 11.0833 8.86299 10.565 9.7067 9.72627C10.557 8.88101 11.0833 7.71031 11.0833 6.41667Z"
                              stroke="#111827"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="default-search"
                          className="block w-full max-w-52 pr-2.5 pl-8 py-2 text-xs font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none"
                          placeholder="Search here"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </form>
                  </div>
                  <table className="w-full rounded-xl">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="">
                          <div className="flex items-center py-3.5 pl-4">
                            <input
                              id="checkbox-for-all"
                              type="checkbox"
                              value=""
                              className="w-4 h-4 appearance-none border border-gray-300 rounded-sm mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                            />
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left whitespace-nowrap text-xs font-medium text-gray-900 capitalize"
                        >
                          Full Name &amp; Email
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left whitespace-nowrap text-xs font-medium text-gray-900 capitalize"
                        >
                          Gender
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left whitespace-nowrap text-xs font-medium text-gray-900 capitalize"
                        >
                          Date of birth
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left whitespace-nowrap text-xs font-medium text-gray-900 capitalize"
                        >
                          Mobile Number
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left whitespace-nowrap text-xs font-medium text-gray-900 capitalize"
                        >
                          Address
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left whitespace-nowrap text-xs font-medium text-gray-900 capitalize"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 w-20 text-left whitespace-nowrap text-xs font-medium text-gray-900 capitalize"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredAthletes.map((emp, index) => (
                        <tr
                          className="bg-white transition-all duration-500 hover:bg-gray-50"
                          key={index}
                        >
                          <td className="">
                            <div className="flex items-center py3.5 pl-4">
                              <input
                                id="checkbox-default"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 appearance-none border border-gray-300 rounded-sm mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                              />
                            </div>
                          </td>
                          <td className="pxy-3.5 pl-4 py-3">
                            <div className="w-48 flex items-center gap-3">
                              <img
                                src={emp.avatar || "../../public/download.jpg"}
                                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                alt={emp.name}
                              />
                              <div className="data">
                                <p className="font-medium text-xs text-gray-800">
                                  {emp.name}
                                </p>
                                <p className="font-normal text-xs text-gray-400">
                                  {emp.email}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 pl-4 whitespace-nowrap text-xs font-normal text-gray-800">
                            {emp.gender}
                          </td>
                          <td className="py-3.5 pl-4 whitespace-nowrap text-xs font-normal text-gray-800">
                            {emp.date_of_birth}
                          </td>
                          <td className="py-3.5 pl-4 whitespace-nowrap text-xs font-normal text-gray-800">
                            {emp.phone}
                          </td>
                          <td className="py-3.5 pl-4 whitespace-nowrap text-xs font-normal text-gray-800">
                            {emp.adress}
                          </td>
                          <td className="py-3.5 pl-4 whitespace-nowrap text-xs font-normal text-gray-800">
                            <span
                              className={`inline-flex items-center ${emp.statusColor} text-xs font-medium mr-2 pl-2 pr-2.5 rounded-full py-0.5`}
                            >
                              <span
                                className={"w-1 h-1 mr-1 rounded-full  flex"}
                              ></span>
                              {emp.status}
                            </span>
                          </td>
                          <td className="flex py-3.5 w-16 items-center gap-0.5">
                            <div className="dropdown relative inline-flex mx-auto">
                              <button
                                type="button"
                                onClick={() => toggleDropdown(emp.id)}
                                data-target="dropdown-action"
                                className="dropdown-toggle inline-flex justify-center items-center gap-2 p-0.5 text-sm text-white rounded-md cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-100"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M12.0161 16.9896V17.0396M12.0161 11.976V12.026M12.0161 6.96228V7.01228"
                                    stroke="#6B7280"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                  ></path>
                                </svg>
                              </button>
  
                              {/* Dropdown menu */}
                              <div
                                id={`dropdown-action-${emp.id}`}
                                className={`dropdown-menu rounded-xl shadow-lg bg-white absolute z-10 -right-8 top-full w-44 mt-2 ${
                                  openRowId === emp.id ? "block" : "hidden"
                                }`}
                                aria-labelledby="dropdown-default"
                              >
                                <ul className="py-2 flex flex-col gap-2.5 px-3">
                                  <li className="flex items-center justify-start gap-1.5">
                                    <button className="group py-2 px-2 flex items-center gap-1.5 font-medium text-sm text-gray-500 border border-solid border-gray-300 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900">
                                      <svg
                                        className="fill-gray-500 transition-all duration-300 group-hover:fill-gray-900"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clipPath="url(#clip0_2051_8844)">
                                          <path
                                            d="M8.01997 12.2708L7.4509 11.7085L8.01997 12.2708ZM15.7742 4.42279L16.3433 4.98506L15.7742 4.42279ZM18.6216 4.38623L18.0672 4.96293V4.96293L18.6216 4.38623ZM19.5573 5.28588L20.1118 4.70918V4.70918L19.5573 5.28588ZM19.5934 8.0947L20.1625 8.65697L19.5934 8.0947ZM11.8392 15.9427L11.2701 15.3804L11.8392 15.9427ZM10.7383 16.5141L10.6044 15.7254L10.7383 16.5141ZM9.6421 16.7002L9.77598 17.4889H9.77598L9.6421 16.7002ZM7.30876 14.4568L6.51735 14.3399H6.51735L7.30876 14.4568ZM7.46918 13.3711L8.26058 13.4881V13.4881L7.46918 13.3711ZM7.40218 16.6648L6.84773 17.2414L7.40218 16.6648ZM20.5821 6.67736L21.382 6.66709V6.66709L20.5821 6.67736ZM17.1851 3.41144L17.1749 2.61151H17.1749L17.1851 3.41144ZM21 21.8001C21.4418 21.8001 21.8 21.4419 21.8 21.0001C21.8 20.5583 21.4418 20.2001 21 20.2001V21.8001ZM3 20.2001C2.55817 20.2001 2.2 20.5583 2.2 21.0001C2.2 21.4419 2.55817 21.8001 3 21.8001V20.2001ZM8.58905 12.8331L16.3433 4.98506L15.2051 3.86052L7.4509 11.7085L8.58905 12.8331ZM18.0672 4.96293L19.0029 5.86258L20.1118 4.70918L19.1761 3.80953L18.0672 4.96293ZM19.0243 7.53243L11.2701 15.3804L12.4083 16.505L20.1625 8.65697L19.0243 7.53243ZM10.6044 15.7254L9.50822 15.9115L9.77598 17.4889L10.8721 17.3028L10.6044 15.7254ZM8.10016 14.5738L8.26058 13.4881L6.67777 13.2542L6.51735 14.3399L8.10016 14.5738ZM9.50822 15.9115C8.85898 16.0217 8.45869 16.0876 8.17213 16.0946C7.90314 16.1013 7.91532 16.0483 7.95663 16.0881L6.84773 17.2414C7.25649 17.6344 7.76448 17.7052 8.21151 17.6942C8.64096 17.6836 9.17691 17.5906 9.77598 17.4889L9.50822 15.9115ZM6.51735 14.3399C6.42983 14.9322 6.34885 15.4659 6.34917 15.8926C6.3495 16.3398 6.43631 16.8459 6.84773 17.2414L7.95663 16.0881C8.0006 16.1303 7.94936 16.1507 7.94917 15.8914C7.94896 15.6115 8.005 15.2179 8.10016 14.5738L6.51735 14.3399ZM19.0029 5.86258C19.3591 6.20504 19.5669 6.40717 19.6961 6.56993C19.8113 6.71488 19.7827 6.73057 19.7822 6.68763L21.382 6.66709C21.3762 6.21282 21.1751 5.85947 20.9491 5.57487C20.7372 5.30808 20.4352 5.02015 20.1118 4.70918L19.0029 5.86258ZM20.1625 8.65697C20.4778 8.3378 20.7723 8.04221 20.9773 7.77007C21.1959 7.47976 21.3879 7.12137 21.382 6.66709L19.7822 6.68763C19.7816 6.6447 19.8105 6.65965 19.6992 6.8075C19.5741 6.97353 19.3716 7.18093 19.0243 7.53243L20.1625 8.65697ZM16.3433 4.98506C16.6904 4.63372 16.8956 4.42847 17.061 4.30059C17.2078 4.18717 17.2288 4.21095 17.1954 4.21138L17.1749 2.61151C16.7245 2.61729 16.3714 2.81141 16.0825 3.03466C15.8124 3.24345 15.5206 3.5412 15.2051 3.86052L16.3433 4.98506ZM19.1761 3.80953C18.8525 3.49842 18.5531 3.20826 18.2777 3.00648C17.9832 2.79071 17.6253 2.60573 17.1749 2.61151L17.1954 4.21138C17.162 4.2118 17.1825 4.1875 17.332 4.29711C17.5007 4.4207 17.7111 4.62062 18.0672 4.96293L19.1761 3.80953ZM7.4509 11.7085C7.26027 11.9015 7.03517 12.1163 6.89452 12.3973L8.32527 13.1135C8.32013 13.1238 8.32046 13.1166 8.35908 13.0724C8.4046 13.0203 8.46927 12.9543 8.58905 12.8331L7.4509 11.7085ZM8.26058 13.4881C8.28535 13.3204 8.29904 13.2302 8.31321 13.1634C8.32514 13.1071 8.33051 13.103 8.32527 13.1135L6.89452 12.3973C6.75345 12.6791 6.71713 12.9878 6.67777 13.2542L8.26058 13.4881ZM11.2701 15.3804C11.1504 15.5016 11.0852 15.5671 11.0334 15.6134C10.9896 15.6526 10.9816 15.6539 10.9901 15.6495L11.7272 17.0696C12.0059 16.925 12.2169 16.6987 12.4083 16.505L11.2701 15.3804ZM10.8721 17.3028C11.1425 17.2569 11.4493 17.2138 11.7272 17.0696L10.9901 15.6495C10.9985 15.6451 10.9923 15.6512 10.9339 15.6648C10.8654 15.6807 10.7733 15.6967 10.6044 15.7254L10.8721 17.3028ZM18.8977 8.65659L15.3422 5.10104L14.2108 6.23241L17.7663 9.78796L18.8977 8.65659ZM21 20.2001H3V21.8001H21V20.2001Z"
                                            fill=""
                                          ></path>
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_2051_8844">
                                            <rect
                                              width="24"
                                              height="24"
                                              fill="white"
                                            ></rect>
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </button>
                                    <span className="text-sm font-medium text-gray-700">
                                      Edit
                                    </span>
                                  </li>
                                  <li className="flex items-center justify-start gap-1.5">
                                    <button
                                      onClick={() => handleStatsClick(emp.id)}
                                      className="group py-2 px-2 flex items-center gap-1.5 font-medium text-sm text-gray-500 border border-solid border-gray-300 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900"
                                    >
                                      <svg
                                        className="stroke-gray-500 transition-all duration-300 group-hover:stroke-gray-900"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M4.99988 7.01655L5.29937 14.8033C5.41239 17.7418 5.4689 19.211 6.40707 20.1138C7.34525 21.0165 8.81531 21.0165 11.7554 21.0165H12.2432C15.1841 21.0165 16.6546 21.0165 17.5927 20.1138C18.5309 19.211 18.5874 17.7418 18.7004 14.8033L18.9999 7.01655M9.99988 13.0165V16.0165M13.9999 13.0165V16.0165M20.4705 4.4499C18.6467 4.29032 17.7348 4.21052 16.8228 4.15271C13.6108 3.9491 10.389 3.9491 7.17694 4.15271C6.26493 4.21052 5.35305 4.29032 3.5293 4.4499M13.7646 3.96873C13.7646 3.96873 13.3991 2.99999 11.647 3C9.89478 3.00001 9.5293 3.96872 9.5293 3.96872"
                                          stroke=""
                                          strokeWidth="1.6"
                                          strokeLinecap="round"
                                        ></path>
                                      </svg>
                                    </button>
                                    <span className="text-sm font-medium text-gray-700">
                                      Stats
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );


    // return (
    //     <div className="p-6">
    //         <h2 className="text-xl font-bold mb-4">Danh sách vận động viên</h2>

    //         {loading && <p>Đang tải dữ liệu...</p>}
    //         {error && <p className="text-red-500">{error}</p>}

    //         {!loading && !error && athletes.length === 0 && (
    //             <p className="text-gray-500">Không có vận động viên nào.</p>
    //         )}

    //         <div className="grid grid-cols-3 gap-4">
    //             {athletes.map((athlete) => (
    //                 <div key={athlete.id} className="p-4 border rounded-lg shadow-md">
    //                     <img 
    //                         src={athlete.avatar} 
    //                         alt={athlete.fullname} 
    //                         className="w-24 h-24 rounded-full mx-auto mb-2" 
    //                     />
    //                     <h3 className="text-lg font-semibold">{athlete.fullname}</h3>
    //                     <p>Email: {athlete.email}</p>
    //                     <p>Điện thoại: {athlete.phone}</p>
    //                     <p>Giới tính: {athlete.gender === "male" ? "Nam" : "Nữ"}</p>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // );
};

export default Athlete;
