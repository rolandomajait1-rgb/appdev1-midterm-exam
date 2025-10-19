
import React, { useState } from "react";
import "./LoginRegisterModal.css";

function LoginRegisterModal({ onClose }) {
  const [view, setView] = useState("main"); // main | login | register

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>{view === "register" ? "REGISTER" : view === "login" ? "LOGIN" : "LOG IN"}</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {/* MAIN LOGIN VIEW */}
        {view === "main" && (
          <div className="modal-content">
            <button className="social-btn fb">
              <i className="fab fa-facebook-f"></i> Connect with Facebook
            </button>
            <button className="social-btn google">
              <i className="fab fa-google"></i> Connect with Google
            </button>
            <p className="divider-text">Or Use Your Email Address</p>
            <div className="btn-group">
              <button className="primary-btn" onClick={() => setView("login")}>
                Login
              </button>
              <button className="primary-btn" onClick={() => setView("register")}>
                Sign up
              </button>
            </div>
          </div>
        )}

        {/* EMAIL LOGIN FORM */}
        {view === "login" && (
          <div className="modal-content">
            <label>Email / Username</label>
            <input type="text" placeholder="Enter your email or username" />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <div className="checkbox">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me on this computer</label>
            </div>
            <div className="btn-group">
              <button className="secondary-btn" onClick={() => setView("main")}>
                « Back
              </button>
              <button className="primary-btn">Login</button>
            </div>
          </div>
        )}

        {/* REGISTER FORM */}
        {view === "register" && (
          <div className="modal-content">
            <label>Full Name</label>
            <input type="text" placeholder="Your full name" />
            <label>Email Address</label>
            <input type="email" placeholder="Your email address" />
            <label>Password</label>
            <input type="password" placeholder="Create a password" />
            <div className="checkbox">
              <input type="checkbox" id="updates" />
              <label htmlFor="updates">Send me occasional email updates</label>
            </div>
            <div className="btn-group">
              <button className="secondary-btn" onClick={() => setView("main")}>
                « Back
              </button>
              <button className="primary-btn">Register</button>
            </div>
          </div>
        )}
      </div>n
    </div>
  );
}

export default LoginRegisterModal;
