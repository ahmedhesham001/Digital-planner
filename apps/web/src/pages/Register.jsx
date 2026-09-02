import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Logo from "../assets/Light-Logo.svg";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const handleLogin = () => navigate("/login");

    return (
        <div className="relative min-h-screen bg-base-950 flex items-center justify-center overflow-hidden px-5 py-10">
            <div className="absolute w-160 h-160 rounded-full bg-primary-500/20 blur-[120px] -top-40 left-1/2 -translate-x-1/2"></div>
            <div className="absolute w-80 h-80 rounded-full bg-primary-500/10 blur-[100px] bottom-0 -right-20"></div>
            <div className="relative z-10 w-full max-w-105">
                <div className="bg-base-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
                    <div className="flex justify-center mb-6">
                        <img src={Logo} alt="Logo" className="w-[110px] h-auto"/>
                    </div>
                    <div className="text-center mb-7">
                        <h1 className="text-2xl font-bold text-white">
                            Create an account
                        </h1>
                        <p className="text-zinc-400 text-sm mt-2">
                            Join us and start planning your tasks
                        </p>
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                        <hr className="flex-1 border-zinc-700" />
                        <span className="text-zinc-500 text-xs">
                            REGISTER
                        </span>
                        <hr className="flex-1 border-zinc-700" />
                    </div>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">
                                E-mail
                            </label>
                            <div className="relative">
                                <i className="fa-regular fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"></i>
                                <input
                                    type="email"
                                    placeholder="example@gmail.com"
                                    className="w-full h-11 rounded-lg border border-zinc-700 bg-transparent pl-10 pr-3 text-white outline-none transition focus:border-primary-500 placeholder:text-zinc-600"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <i className="fa-solid fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"></i>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full h-11 rounded-lg border border-zinc-700 bg-transparent pl-10 pr-3 text-white outline-none transition focus:border-primary-500 placeholder:text-zinc-600"
                                />
                            </div>  
                            <p className="text-xs text-zinc-500 mt-2">
                                Use at least 8 characters
                            </p>
                        </div>
                        <button
                            type="submit"
                            className="w-full h-11 rounded-lg bg-primary-500 text-white font-semibold hover:bg-base-100 hover:text-primary-500 
                            transition duration-200 cursor-pointer">Create Account </button>
                    </form>
                    <div className="flex items-center gap-3 my-6">
                        <hr className="flex-1 border-zinc-700" />
                        <span className="text-zinc-500 text-sm">
                            OR
                        </span>
                        <hr className="flex-1 border-zinc-700" />
                    </div>
                    <button
                        type="button"
                        className="w-full h-11 rounded-lg border border-zinc-700 text-white flex items-center justify-center gap-3 hover:border-primary-500 transition duration-200 cursor-pointer mb-3"
                    >
                        <i className="fa-brands fa-google text-lg"></i>
                        <span className="text-sm font-medium">
                            Continue with Google
                        </span>
                    </button>
                    <button
                        type="button"
                        className="w-full h-11 rounded-lg border border-zinc-700 text-white flex items-center justify-center gap-3 hover:border-primary-500 transition duration-200 cursor-pointer"
                    >
                        <i className="fa-brands fa-apple text-lg"></i>
                        <span className="text-sm font-medium">
                            Continue with Apple
                        </span>
                    </button>
                    <p className="text-center text-sm text-zinc-500 mt-7">
                        Already have an account?{" "}
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="text-primary-500 font-semibold hover:text-white transition cursor-pointer"
                        >
                            Login
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}