import "../css/Login.css"
export default function Login() {
    return (
    <div className="login-page">
    <div className="card">
        <h1>Log in</h1>
        <p>Log in to your account</p>
        <div className="inputs">
        <div>
            <label>Email:</label>
        <input type="email" placeholder="Enter your email address"/>
        </div>
        <div>
            <label>Password:</label>
<input type="password" placeholder="Enter your password"/>
        </div>
        </div>
        <div><p><button>Login</button> With</p></div>
        <div className="social">
            <button>Facebook</button>
            <button>Google</button>
            <button>Apple</button>
        </div>
        <div><p> Don't have an account? <button> Sign Up</button></p></div>
    </div>
    </div>
    );
}