import React from 'react';
import { Helmet } from 'react-helmet';
import style from '../assets/styles/login.module.css';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className={style.body}>
        <div className={style.container}>
          <div className={style.card}>
            <div className={style.main}>
              <div className={style.greeting}>Login</div>
              <div
                className="mt-3"
                style={{ color: '#232323', fontSize: '18px' }}
              >
                Hi, Welcome back!
              </div>
              <form onSubmit="" className={style.form}>
                <div className="d-flex flex-column mt-3">
                  <label className="text-muted" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className={style.input}
                    id="email"
                    placeholder="Masukkan alamat email"
                    onChange=""
                  />
                </div>
                <div className="d-flex flex-column mt-3">
                  <label className="text-muted" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    className={style.input}
                    id="password"
                    placeholder="Masukkan kata sandi"
                    onChange=""
                  />
                </div>
                <div className="d-flex flex-row-reverse mt-5 mb-3">
                  <Link className="text-decoration-none" to="#">
                    Forgot password?
                  </Link>
                </div>
                <div className="d-flex mt-5">
                  <button type="submit" className={style.button}>
                    Login
                  </button>
                </div>
              </form>
              <div className="mt-3 mb-3 text-center text-muted">Login with</div>
              <Link to="#">
                <button className={style.googleButton}>
                  <i className="fa-brands fa-google"></i>
                  <span className="ms-2">Google</span>
                </button>
              </Link>
              <div className="mt-3 text-center">
                <span>Dont have an account? </span>
                <Link to="/register" className="text-decoration-none">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
