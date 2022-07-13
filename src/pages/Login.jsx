import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import style from '../assets/styles/login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
import { toastr } from '../utils/toastr';

// import action redux
import { OnLogin } from '../redux/actions/auth';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (form.email == '') {
      swal
        .fire({
          title: 'Error!',
          text: `email field can't be empty`,
          icon: 'error',
        })
        .then(() => {
          setLoading(false);
        });
      return;
    }
    if (form.password == '') {
      swal
        .fire({
          title: 'Error!',
          text: `password field can't be empty`,
          icon: 'error',
        })
        .then(() => {
          setLoading(false);
        });
      return;
    }
    OnLogin(form)
      .then((res) => {
        swal
          .fire({
            title: 'Success!',
            text: res.message,
            icon: 'success',
          })
          .then(() => {
            return navigate('/');
          });
      })
      .catch((err) => {
        if (err.response.data.message == 'failed in validation') {
          const error = err.response.data.error;
          error.map((e) => {
            toastr(e, 'error');
          });
        } else {
          swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error',
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
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
              <form
                onSubmit={(e) => {
                  onSubmit(e);
                }}
                className={style.form}
              >
                <div className="d-flex flex-column mt-3">
                  <label className="text-muted" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className={style.input}
                    id="email"
                    placeholder="Masukkan alamat email"
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                    }}
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
                    onChange={(e) => {
                      setForm({ ...form, password: e.target.value });
                    }}
                  />
                </div>
                <div className="d-flex flex-row-reverse mt-5 mb-3">
                  <Link className="text-decoration-none" to="#">
                    Forgot password?
                  </Link>
                </div>
                <div className="d-flex mt-5">
                  {loading ? (
                    <button type="submit" className={style.button}>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                    </button>
                  ) : (
                    <button type="submit" className={style.button}>
                      Login
                    </button>
                  )}
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
