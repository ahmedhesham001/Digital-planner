import "@fortawesome/fontawesome-free/css/all.min.css";
import Logo from "../assets/Light-Logo.svg"
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
    const handleLogin = () => navigate("/dashboard");
return (
    
<div className="relative min-h-screen bg-base-950 p-5 flex flex-col items-center  justify-center">
    <div className="absolute w-160 h-160 rounded-full bg-primary-500/20 blur-[100px] top-5  left-160"></div>
    <div className="card relative z-10 bg-base-900 rounded-lg p-8 flex flex-col gap-5 w-105 ">
        <div className="flex justify-center">
            <img
                src={Logo}
                alt="Logo"
                className="w-[95px] h-[43px]"
            />
            </div>

        <hr className="border-white"></hr>

        <div className="flex flex-col gap-2" >
            <div >
                <label className="text-white">E-mail:</label>
            </div>
            <input className="w-full h-10 rounded-md border border-zinc-500 bg-transparent px-3 text-white placeholder:text-zinc-500" type="email" placeholder="example@gmail.com"/>
        </div>
        <div className="flex flex-col gap-2">
            <div>
                <label className="text-white">Password:</label>
            </div>
            <input className="w-full h-10 rounded-md border border-zinc-500 bg-transparent px-3 text-white placeholder:text-zinc-500" type="password" placeholder="**********"/>
        </div>
        <div>
            <button className="w-full h-10 rounded-md bg-primary-500 text-white font-semibold cursor-pointer hover:bg-base-100 hover:text-primary-500 transition" onClick={handleLogin}>Login</button>
        </div>
        <div className="flex items-center gap-3">
            <hr className="flex-1 border-white" />
            <span className="text-white">or</span>
            <hr className="flex-1 border-white" />
        </div>

        <div>
            <button className="w-full h-10 rounded-md border border-zinc-500 text-white hover:border-primary-500 transition cursor-pointer">
                <i className="fa-brands fa-google text-xl"></i>
                <span> Login with Google</span>

            </button>
        </div>
        <div>
            <button className="w-full h-10 rounded-md border border-zinc-500 text-white hover:border-primary-500 transition cursor-pointer">
                <i className="fa-brands fa-apple text-xl"></i>
                <span> Login with Apple</span>
            </button>
        </div>
    </div>
</div>
    



);
}