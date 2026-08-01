import "./Login.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import icon from "../assets/Logos.svg"
export default function Login() {
return (
    
<div className="relative min-h-screen bg-[#0B0B0B] login-page p-5 flex flex-col items-center  justify-center">
<div className="absolute w-160 h-160 rounded-full bg-[#A37108]/20 blur-[100px] top-5  left-160"></div>
<div className="card relative z-10 bg-[#17130D] rounded-4 p-8 flex flex-col gap-5 w-105 ">
    <div className="flex justify-center">
        <img
            src={icon}
            alt="Logo"
            className="w-[95px] h-[43px]"
        />
        </div>

<hr className="border-white"></hr>

<div >
    <div >
<label className="text-white">E-mail:</label>
    </div>
<input className="w-full h-10 rounded-md border border-zinc-500 bg-transparent px-3 text-white placeholder:text-zinc-500" type="email" placeholder="rawan@gmail.com"/>
</div>
<div>
<div>
<label className="text-white">Password:</label>
    </div>
<input className="w-full h-10 rounded-md border border-zinc-500 bg-transparent px-3 text-white placeholder:text-zinc-500" type="password" placeholder="**********"/>
</div>
<div>
<button className="w-full h-10 rounded-md bg-[#EFA102] text-white font-semibold">Login</button>
</div>
<div className="flex items-center gap-3">
          <hr className="flex-1 border-white" />
          <span className="text-white">or</span>
          <hr className="flex-1 border-white" />
        </div>

<div>
<button className="w-full h-10 rounded-md border border-zinc-500 text-white hover:border-[#EFA102] transition">
     <i className="fa-brands fa-google text-xl"></i>
    <span> Login with Google</span>

    </button>
</div>
<div>
<button className="w-full h-10 rounded-md border border-zinc-500 text-white hover:border-[#EFA102] transition">
     <i className="fa-brands fa-apple text-xl"></i>
    <span> Login with Apple</span>
    </button>
</div>

</div>
</div>
    



);
}