import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className={`container`} id="container">
      <div className="form-container sign-in">
        <form>
          <img src="/logo-png.png" alt="logo" className="w-32 h-32" />
          <h1 className="text-3xl font-bold mb-4">Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot Your Password?</a>
          <Link href="/dashboard"><button>Sign In</button></Link>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-right">
            <h1 className="text-3xl font-bold">
              Welcome to Istanbul Electrical
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
