import React from 'react';
import style from '../assets/styles/register.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Register = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className={style.body}>
        <div className={style.container}>
          <div className={style.card}>
            <div className={style.main}>
              <div className={style.greeting}>Register</div>
              <div
                className="mt-3"
                style={{ color: '#232323', fontSize: '18px' }}
              >
                Let’s create your account!
              </div>
              <form onSubmit="" className={style.form}>
                <div className="d-flex flex-column">
                  <label className="text-muted" htmlFor="nama">
                    Name
                  </label>
                  <input
                    type="text"
                    className={style.input}
                    id="name"
                    placeholder="Masukkan Nama Panjang"
                    onChange=""
                  />
                </div>
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
                <div className="d-flex mt-5">
                  <button type="submit" className={style.button}>
                    Register
                  </button>
                </div>
              </form>
              <div className="mt-3 mb-3 text-center text-muted">
                Register with
              </div>
              <Link to="#">
                <button className={style.googleButton}>
                  <i className="fa-brands fa-google"></i>
                  <span className="ms-2">Google</span>
                </button>
              </Link>
              <div className="mt-3 text-center">
                <span>Already have an account? </span>
                <Link to="/login" className="text-decoration-none">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
