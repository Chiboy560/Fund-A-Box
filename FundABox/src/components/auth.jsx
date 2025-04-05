import React, { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth"; // ✅ use this one
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Auth = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password); // ✅ correct function
      console.log("User signed in!");
      onLogin?.();
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("Signed in with Google");
      onLogin?.();
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign In</h2>
        <input
          className="mb-4 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="mb-4 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPass(e.target.value)}
        />
        <button
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200"
          onClick={signIn}
        >
          Sign In
        </button>

        <button
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200 mt-2"
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Auth;
