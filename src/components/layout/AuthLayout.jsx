import React from "react";
import { Outlet } from "react-router-dom";


function AuthLayout({ children }) {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-left">
                    <div className="auth-left-inner">
                        <Outlet/>
                    </div>
                </div>

                <div className="auth-right">
                    <img src="/auth.avif" alt="Auth Illustration" />
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;
