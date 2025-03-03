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
      <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        {/* Login form */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
    );
    
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

}

export default Login
