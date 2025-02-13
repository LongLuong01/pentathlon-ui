import { useState, useEffect } from "react";

const AthleteList = () => {
    const [athletes, setAthletes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const userLogin = localStorage.getItem("user"); // Lấy token từ localStorage
        const token = JSON.parse(userLogin).token;
        
        if (!token) {
            setError("Bạn chưa đăng nhập!");
            setLoading(false);
            return;
        }

        fetch("http://localhost:5000/api/athletes", {
            headers: {
                "Authorization": `Bearer ${token}`, // Đảm bảo gửi đúng token
                "Content-Type": "application/json"
            },
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Lỗi API: ${res.status} ${res.statusText}`);
            }
            return res.json();
        })
        .then((data) => {
            if (Array.isArray(data)) {
                setAthletes(data);
            } else {
                throw new Error("Dữ liệu API không hợp lệ");
            }
        })
        .catch((err) => {
            console.error("Lỗi khi lấy dữ liệu!", err);
            setError(err.message);
        })
        .finally(() => setLoading(false));
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Danh sách vận động viên</h2>

            {loading && <p>Đang tải dữ liệu...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && athletes.length === 0 && (
                <p className="text-gray-500">Không có vận động viên nào.</p>
            )}

            <div className="grid grid-cols-3 gap-4">
                {athletes.map((athlete) => (
                    <div key={athlete.id} className="p-4 border rounded-lg shadow-md">
                        <img 
                            src={athlete.avatar} 
                            alt={athlete.fullname} 
                            className="w-24 h-24 rounded-full mx-auto mb-2" 
                        />
                        <h3 className="text-lg font-semibold">{athlete.fullname}</h3>
                        <p>Email: {athlete.email}</p>
                        <p>Điện thoại: {athlete.phone}</p>
                        <p>Giới tính: {athlete.gender === "male" ? "Nam" : "Nữ"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AthleteList;
