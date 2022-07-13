import React, { useState } from 'react';
import style from '../assets/styles/register.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import swal from 'sweetalert2';
import { toastr } from '../utils/toastr';
import { OnRegister } from '../redux/actions/auth';
const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (form.name == '') {
      swal
        .fire({
          title: 'Error!',
          text: `name field can't be empty`,
          icon: 'error',
        })
        .then(() => {
          setLoading(false);
        });
      return;
    }

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
    OnRegister(form)
      .then((res) => {
        swal
          .fire({
            title: 'Success!',
            text: res.message,
            icon: 'success',
          })
          .then(() => {
            return navigate('/login');
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
              <form
                onSubmit={(e) => {
                  onSubmit(e);
                }}
                className={style.form}
              >
                <div className="d-flex flex-column">
                  <label className="text-muted" htmlFor="nama">
                    Name
                  </label>
                  <input
                    type="text"
                    className={style.input}
                    id="name"
                    placeholder="Masukkan Nama Panjang"
                    onChange={(e) => {
                      setForm({
                        ...form,
                        name: e.target.value,
                      });
                    }}
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
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
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
                <div className="d-flex mt-5">
                  {loading ? (
                    <button type="submit" className={style.button}>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Loading...
                    </button>
                  ) : (
                    <button type="submit" className={style.button}>
                      Register
                    </button>
                  )}
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
