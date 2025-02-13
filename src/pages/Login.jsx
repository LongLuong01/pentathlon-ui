import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(
                'http://localhost:5000/api/auth/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                }
            );

            const data = await response.json()

            if (response.ok) {
                login({ token: data.token, email })
                navigate('/dashboard')
            } else {
                alert(data.message)
            }
        } catch (error) {
            console.error('Lỗi đăng nhập', error)
        }
    }

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
                <h2 className="mb-4 text-center text-2xl font-bold">
                    Đăng nhập
                </h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="mb-1 block">Email</label>
                        <input
                            type="email"
                            className="w-full rounded-lg border px-3 py-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="mb-1 block">Mật khẩu</label>
                        <input
                            type="password"
                            className="w-full rounded-lg border px-3 py-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-500 py-2 text-white"
                    >
                        Đăng nhập
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
