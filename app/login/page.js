"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { FiMail, FiEyeOff } from "react-icons/fi";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Log In</h2>
        <p className="text-center text-gray-600 mb-8">
          Enter your credentials to access your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 pl-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FiMail className="absolute left-3 top-10 text-gray-400" /> {}
          </div>

          <div className="relative">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 pl-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FiEyeOff className="absolute left-3 top-10 text-gray-400" /> {/* Password icon */}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2"
              />
              Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Log into Account
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">Or</div>

        <div className="space-y-2">
          <button className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100">
            <FaGoogle className="text-red-500 mr-2" />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100">
            <FaTwitter className="text-blue-500 mr-2" />
            Continue with Twitter
          </button>
        </div>

        <p className="text-center text-gray-600 mt-4">
          Are you new here? 
          <Link href="/" className="text-blue-500">Create Account</Link>
        </p>
      </div>
    </div>
  );
}
