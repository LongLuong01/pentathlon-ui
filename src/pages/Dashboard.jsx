import { useEffect, useState } from 'react'

const Dashboard = () => {
    const [athletes, setAthletes] = useState([])
    const [loading, setLoading] = useState(true)
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    // lay danh sach vdv tu server
    useEffect(() => {
        const userLogin = localStorage.getItem('user') // Lấy token từ localStorage
        const token = JSON.parse(userLogin).token

        if (!token) {
            setError('Bạn chưa đăng nhập!')
            setLoading(false)
            return
        }

        fetch('http://localhost:5000/api/athletes', {
            headers: {
                Authorization: `Bearer ${token}`, // Đảm bảo gửi đúng token
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Lỗi API: ${res.status} ${res.statusText}`)
                }
                return res.json()
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    setAthletes(data)
                } else {
                    throw new Error('Dữ liệu API không hợp lệ')
                }
            })
            .catch((err) => {
                console.error('Lỗi khi lấy dữ liệu!', err)
                setError(err.message)
            })
            .finally(() => setLoading(false))
    }, [])

    // Mở & đóng popup
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => {
        setIsModalOpen(false)
        setFullname('')
        setEmail('')
        setPhone('')
    }

    // thêm vđv mới
    const handleAddAthlete = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:5000/api/athletes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`, // Đảm bảo gửi đúng token
                },
                body: JSON.stringify({ fullname, email, phone }),
            })

            if (response.ok) {
                alert('Thêm vận động viên thành công!')
                const newAthlete = await response.json()
                setAthletes([...athletes, newAthlete]) // Cập nhật danh sách
                setFullname('')
                setEmail('')
                setPhone('')
            } else {
                alert('Lỗi khi thêm vận động viên!')
            }
        } catch (error) {
            console.error('Lỗi:', error)
        }
    }

    // Xóa vận động viên
    const handleDeleteAthlete = async (id) => {
        if (!window.confirm('Bạn có chắc muốn xóa vận động viên này?')) return

        try {
            const response = await fetch(
                `http://localhost:5000/api/athletes/${id}`,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`, // Đảm bảo gửi đúng token
                    },
                }
            )

            if (response.ok) {
                alert('Xóa thành công!')
                setAthletes(athletes.filter((athlete) => athlete.id !== id)) // Cập nhật danh sách
            } else {
                alert('Lỗi khi xóa vận động viên!')
            }
        } catch (error) {
            console.error('Lỗi:', error)
        }
    }

    return (
        <div className="p-6">
            <h2 className="mb-4 text-2xl font-bold">Quản lý vận động viên</h2>

            {/* Button mở popup thêm vận động viên */}
            <button
                onClick={openModal}
                className="mb-4 rounded bg-blue-500 px-4 py-2 text-white"
            >
                + Thêm VĐV
            </button>

            {/* Popup thêm vận động viên */}
            {/* Popup thêm VĐV */}
            {isModalOpen && (
                <div className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-gray-800">
                    <div className="w-96 scale-100 transform rounded-lg bg-white p-6 shadow-lg transition-all duration-500 hover:scale-105">
                        <h3 className="mb-4 text-lg font-semibold">
                            Thêm vận động viên
                        </h3>
                        <form onSubmit={handleAddAthlete}>
                            <input
                                type="text"
                                placeholder="Họ và tên"
                                className="mb-2 w-full border p-2 transition duration-300 focus:ring-2 focus:ring-blue-500"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="mb-2 w-full border p-2 transition duration-300 focus:ring-2 focus:ring-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Số điện thoại"
                                className="mb-4 w-full border p-2 transition duration-300 focus:ring-2 focus:ring-blue-500"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <div className="flex justify-between">
                                <button
                                    type="submit"
                                    className="rounded bg-green-500 px-4 py-2 text-white transition duration-300 hover:bg-green-600"
                                >
                                    Thêm
                                </button>
                                <button
                                    onClick={closeModal}
                                    className="rounded bg-red-500 px-4 py-2 text-white transition duration-300 hover:bg-red-600"
                                >
                                    Hủy
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Hiển thị danh sách vận động viên */}
            {loading ? (
                <p>Đang tải dữ liệu...</p>
            ) : (
                <table className="w-full border-collapse border border-gray-300 shadow-lg">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 p-3">
                                Họ và Tên
                            </th>
                            <th className="border border-gray-300 p-3">
                                Email
                            </th>
                            <th className="border border-gray-300 p-3">
                                Điện thoại
                            </th>
                            <th className="border border-gray-300 p-3">
                                Hành động
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {athletes.map((athlete) => (
                            <tr
                                key={athlete.id}
                                className="text-center hover:bg-gray-100"
                            >
                                <td className="border border-gray-300 p-3">
                                    {athlete.fullname}
                                </td>
                                <td className="border border-gray-300 p-3">
                                    {athlete.email}
                                </td>
                                <td className="border border-gray-300 p-3">
                                    {athlete.phone}
                                </td>
                                <td className="border border-gray-300 p-3">
                                    <button
                                        onClick={() => openModal(athlete)} // Mở modal chỉnh sửa khi click
                                        className="mx-2 rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-600"
                                    >
                                        Chỉnh sửa
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDeleteAthlete(athlete.id)
                                        }
                                        className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Dashboard
