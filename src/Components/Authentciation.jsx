import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Authentication() {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // New state for loading

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      if (activeTab === "login") {
        const { email, password } = formData;
        const response = await axios.post(
          "https://nodejs-authentication-vwth.vercel.app/signin",
          { email, password }
        );
        localStorage.setItem("token", response.data.token);
        setFormData({ username: "", email: "", password: "", confirmPassword: "" });
        
        toast.success("Successfully signed in!");
      } else if (activeTab === "signup") {
        const { username, email, password, confirmPassword } = formData;
        if (password !== confirmPassword) {
          setError("Passwords do not match.");
          setLoading(false); // Stop loading if there's an error
          return;
        }
        const response = await axios.post(
          "https://nodejs-authentication-vwth.vercel.app/signup",
          { username, email, password }
        );
        localStorage.setItem("token", response.data.token);
        toast.success("Successfully signed up!");
        setFormData({ username: "", email: "", password: "", confirmPassword: "" });
      }
    } catch (err) {
      setError(err.response ? err.response.data.message : "Something went wrong");
      toast.error("Something went wrong!");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <Navbar />
      <div className="containerss">
        <div className="form-wrapper">
          {/* Tab Buttons */}
          <div className="tab-buttons">
            <button
              onClick={() => setActiveTab("login")}
              className={`tab-button ${activeTab === "login" ? "active" : ""}`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`tab-button ${activeTab === "signup" ? "active" : ""}`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          {activeTab === "login" && (
            <div className="form">
              <h2 className="form-title">Welcome back</h2>
              <form onSubmit={handleSubmit} className="form-fields">
                <div>
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="••••••••"
                  />
                </div>

                {error && <p className="error">{error}</p>}

                <button type="submit" className="submit-button" disabled={loading}>
                  {loading ? "Logging in..." : "Sign In"}
                </button>
              </form>
            </div>
          )}

          {activeTab === "signup" && (
            <div className="form">
              <h2 className="form-title">Create an account</h2>
              <form onSubmit={handleSubmit} className="form-fields">
                <div>
                  <label htmlFor="username" className="label">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="••••••••"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="••••••••"
                  />
                </div>

                {error && <p className="error">{error}</p>}

                <button type="submit" className="submit-button" disabled={loading}>
                  {loading ? "Creating account..." : "Create Account"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
