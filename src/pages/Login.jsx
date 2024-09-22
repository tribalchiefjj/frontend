import React from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import "../assets/images/back.png"; // Import your CSS file here

function Login() {
    return (
        <div className="login-container"> {/* Add a class for styling */}
            <Form route="/api/token/" method="login" />
            {/* Add the Forgot Password link here */}
            <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
        </div>
    );
}

export default Login;

