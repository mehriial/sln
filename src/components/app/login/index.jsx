import React from "react";
import { Link } from "react-router-dom";
import Input from "../../common/Input";
import Button from "../../common/Button";
import { PiAppleLogo, PiGoogleLogo } from "react-icons/pi";

function Login() {
  return (
    <div className="login-container">
      <div className="login-header">
        <h2 className="login-title">Xoş gəlmisiniz!</h2>
        <p className="login-subtitle">
          Hesabınıza daxil olun və davam edin
        </p>
      </div>

      <form className="login-form">
        <Input type="email" placeholder="Email" name="email" className="login-input" />
        <Input type="password" placeholder="Şifrə" name="password" className="login-input" />

        <div className="flex justify-between">
          <Link to="/auth/forgot" className="login-link-forgot">
            Şifrəni unutmusunuz?
          </Link>
        </div>

        <div className="login-divider">vəya</div>

        <div className="login-socials">
          <Button type="button" variant="outline" className="login-social-btn">
            <PiGoogleLogo size={20} /> Google
          </Button>
          <Button type="button" variant="outline" className="login-social-btn">
            <PiAppleLogo size={20} /> Apple
          </Button>
        </div>

        <Button type="submit" className="login-submit">
          Daxil ol
        </Button>
      </form>

      <p className="login-register">
        Hesabınız yoxdur?{" "}
        <Link to="/auth/register" className="login-register-link">
          Qeydiyyatdan keçin
        </Link>
      </p>
    </div>
  );
}

export default Login;
