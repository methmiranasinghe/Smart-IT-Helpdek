import { Link } from "react-router-dom";
import { Mail, Lock,User } from "lucide-react";
import { FaGoogle,FaGithub ,FaLinkedinIn } from "react-icons/fa";

export default function Register() {
  return (
    <div className="min-h-screen bg-[#e9edf7] flex items-center justify-center px-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[650px]">

        {/* LEFT PANEL */}
        <div className="bg-gradient-to-br from-[#5a67d8] to-[#4c1d95] text-white flex flex-col justify-center items-center px-12 py-10 rounded-r-[120px]">
          <h1 className="text-5xl font-bold mb-6">Welcome Back!</h1>

          <p className="text-center text-white/90 text-lg leading-relaxed max-w-sm">
            Enter your personal details to use all of our site features
          </p>

          <button className="mt-12 border-2 border-white px-12 py-3 rounded-lg font-semibold tracking-wide hover:bg-white hover:text-purple-700 transition duration-300">
            SIGN IN
          </button>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex flex-col justify-center px-12 py-10">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
            Create Account
          </h2>

          {/* SOCIAL ICONS */}
                  <div className="flex justify-center gap-4 mb-5">
                 
          <button className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 transition">
                       <FaGoogle size={20} />
                     </button>
         
                     <button className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 transition">
                       <FaGithub size={20} />
                     </button>
         
                     <button className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 transition">
                       <FaLinkedinIn size={20} />
                     </button>
                   </div>

          <div className="text-center text-gray-400 text-sm mb-6">
            or use your email for registration
          </div>

          {/* FORM */}
          <form className="space-y-4">
            <div className="relative">
              <User
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-100 rounded-lg py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="relative">
              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-100 rounded-lg py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="relative">
              <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-gray-100 rounded-lg py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-4 rounded-lg font-bold tracking-wide hover:bg-purple-800 transition duration-300"
            >
              SIGN UP
            </button>
          </form>

          <p className="text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-purple-700 font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}