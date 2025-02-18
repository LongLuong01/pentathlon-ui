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

    // return (
    //     <div className="flex h-screen items-center justify-center bg-gray-100">
    //         <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
    //             <h2 className="mb-4 text-center text-2xl font-bold">
    //                 Đăng nhập
    //             </h2>
    //             <form onSubmit={handleLogin}>
    //                 <div className="mb-4">
    //                     <label className="mb-1 block">Email</label>
    //                     <input
    //                         type="email"
    //                         className="w-full rounded-lg border px-3 py-2"
    //                         value={email}
    //                         onChange={(e) => setEmail(e.target.value)}
    //                         required
    //                     />
    //                 </div>
    //                 <div className="mb-4">
    //                     <label className="mb-1 block">Mật khẩu</label>
    //                     <input
    //                         type="password"
    //                         className="w-full rounded-lg border px-3 py-2"
    //                         value={password}
    //                         onChange={(e) => setPassword(e.target.value)}
    //                         required
    //                     />
    //                 </div>
    //                 <button
    //                     type="submit"
    //                     className="w-full rounded-lg bg-blue-500 py-2 text-white"
    //                 >
    //                     Đăng nhập
    //                 </button>
    //             </form>
    //         </div>
    //     </div>
    // )

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4">
          <div className="flex w-full max-w-4xl overflow-hidden rounded-lg bg-gray-800 shadow-lg">
            {/* Left Side - Image */}
            <div className="hidden w-1/2 bg-cover lg:block" style={{ backgroundImage: "url('../public/login.jpeg')" }}></div>
            
            {/* Right Side - Form */}
            <div className="w-full p-8 lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-white text-center">Login</h2>
              
              <form className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300">Email</label>
                  <input type="email" placeholder="Enter your email" className="mt-1 w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white focus:border-purple-500 focus:outline-none" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300">Password</label>
                  <input type="password" placeholder="********" className="mt-1 w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white focus:border-purple-500 focus:outline-none" />
                </div>
                
                <button className="mt-4 w-full rounded-lg bg-purple-600 p-3 text-white font-semibold hover:bg-purple-700 transition">Log in</button>
              </form>
              
              <p className="mt-4 text-center text-sm text-gray-400">
                <a href="#" className="text-purple-500 hover:underline">Forgot your password?</a>
              </p>
            </div>
          </div>
        </div>
      );
}

export default Login
