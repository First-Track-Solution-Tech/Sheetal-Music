import React from 'react'
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
                
                <div className="w-full max-w-sm sm:max-w-md bg-[#181818] rounded-xl p-6 sm:p-8">
                  
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
                    Create your account
                  </h2>

                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-[#2a2a2a] text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full bg-[#2a2a2a] text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="w-full bg-[#2a2a2a] text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <button className="w-full mt-6 bg-gradient-to-r from-emerald-400 via-green-500 to-lime-400 hover:from-emerald-300 hover:via-green-400 hover:to-lime-300 text-black font-semibold py-3 rounded-full transition duration-300  hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]">
            Register
          </button>
          
          <p className="text-sm text-gray-400 mt-6 text-center">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-white hover:underline">
            Log in
          </Link>
        </p>
        </div>
          </div>
  )
}

export default Register