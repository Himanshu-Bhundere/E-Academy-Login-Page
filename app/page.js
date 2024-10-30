"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGoogle, FaTwitter } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState({ type: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert({ type: "error", message: "Passwords do not match." });
    } else {
      setAlert({ type: "success", message: "Account created successfully!" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">E-Academy</h2>
        <p className="text-center text-gray-600 mb-8">
          Enter your credentials to create your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Create an account
          </button>
        </form>

        {alert.message && (
          <div
            className={`mt-4 p-2 text-center rounded-lg ${
              alert.type === "error" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
            }`}
          >
            {alert.message}
          </div>
        )}

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
          Already here?{" "}
          <Link href="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
}
