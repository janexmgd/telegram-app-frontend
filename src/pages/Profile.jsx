import React from "react";
import { Helmet } from "react-helmet";

import style from "../assets/styles/profile.module.css";
import backArrow from "../assets/images/arrow.svg";
import avatar from "../assets/images/avatar.webp";

const Profile = () => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"
        ></link>
      </Helmet>
      <div className={style.body}>
        <div className={style.container}>
          <div className={style.content}>
            <div className={style.leftContent}>
              {/* navigation */}
              <div className={style.leftTop}>
                <div className="col-1 d-flex justify-content-start align-items-start">
                  <button
                    style={{
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <img
                      src={backArrow}
                      style={{
                        width: "35px",
                        height: "35px",
                      }}
                    />
                  </button>
                </div>
                <div
                  className="col-11 text-center"
                  style={{
                    paddingRight: "35px",
                    fontSize: "24px",
                    color: "#7E98DF",
                  }}
                >
                  Username
                </div>
              </div>
              {/* information user */}
              <div className={style.leftMid}>
                <img
                  src={avatar}
                  alt="avatarUser"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "25px",
                  }}
                />
                <span
                  className="text-black pt-3"
                  style={{
                    fontSize: "22px",
                  }}
                >
                  Gloria Mckinney
                </span>
                <span className="text-muted">@wdlam</span>
              </div>
              {/* account info*/}
              <div className={style.leftCenter}>
                <div
                  className="text-black pt-3"
                  style={{
                    fontSize: "19px",
                  }}
                >
                  Account
                </div>
                {/* no hp */}
                <span className="text-black pt-4">+375(29)9638433</span>
                <span
                  className="d-flex justify-content-start align-items-start"
                  style={{ color: "#7E98DF" }}
                >
                  Phone number
                </span>

                {/* bio */}
                <div className="text-black pt-2" style={{ fontSize: "16px" }}>
                  I’m Senior Frontend Developer from Microsoft
                </div>
                <span
                  className="d-flex justify-content-start align-items-start"
                  style={{ color: "#7E98DF" }}
                >
                  Bio
                </span>
              </div>

              {/* setting */}
              <div className={style.leftBot}>
                <div
                  className="text-black pt-3"
                  style={{
                    fontSize: "19px",
                  }}
                >
                  Settings
                </div>
                <button
                  className="d-flex mt-4"
                  style={{
                    color: "#7E98DF",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <i
                    className="bi bi-bell d-flex justify-content-start align-items-start mt-auto mb-auto col-3"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <div
                    className="d-flex justify-content-start align-items-start mt-auto mb-auto col-6"
                    style={{ fontSize: "15px" }}
                  >
                    Notification and Sounds
                  </div>
                  <i
                    className="bi bi-chevron-right d-flex justify-content-end align-items-end mt-auto mb-auto col-3"
                    style={{ fontSize: "20px" }}
                  ></i>
                </button>
                <button
                  className="d-flex mt-3"
                  style={{
                    color: "#7E98DF",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <i
                    className="bi bi-lock d-flex justify-content-start align-items-start mt-auto mb-auto col-3"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <div
                    className="d-flex justify-content-start align-items-start mt-auto mb-auto col-6"
                    style={{ fontSize: "15px" }}
                  >
                    Privacy and Security
                  </div>
                  <i
                    className="bi bi-chevron-right d-flex justify-content-end align-items-end mt-auto mb-auto col-3"
                    style={{ fontSize: "20px" }}
                  ></i>
                </button>
                <button
                  className="d-flex mt-3"
                  style={{
                    color: "#7E98DF",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <i
                    className="bi bi-graph-up d-flex justify-content-start align-items-start mt-auto mb-auto col-3"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <div
                    className="d-flex justify-content-start align-items-start mt-auto mb-auto col-6"
                    style={{ fontSize: "15px" }}
                  >
                    Data and Storage
                  </div>
                  <i
                    className="bi bi-chevron-right d-flex justify-content-end align-items-end mt-auto mb-auto col-3"
                    style={{ fontSize: "20px" }}
                  ></i>
                </button>
                <button
                  className="d-flex mt-3"
                  style={{
                    color: "#7E98DF",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <i
                    className="bi bi-chat-left d-flex justify-content-start align-items-start mt-auto mb-auto col-3"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <div
                    className="d-flex justify-content-start align-items-start mt-auto mb-auto col-6"
                    style={{ fontSize: "15px" }}
                  >
                    Chat settings
                  </div>
                  <i
                    className="bi bi-chevron-right d-flex justify-content-end align-items-end mt-auto mb-auto col-3"
                    style={{ fontSize: "20px" }}
                  ></i>
                </button>
                <button
                  className="d-flex mt-3"
                  style={{
                    color: "#7E98DF",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <i
                    className="bi bi-display d-flex justify-content-start align-items-start mt-auto mb-auto col-3"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <div
                    className="d-flex justify-content-start align-items-start mt-auto mb-auto col-6"
                    style={{ fontSize: "15px" }}
                  >
                    Devices
                  </div>
                  <i
                    className="bi bi-chevron-right d-flex justify-content-end align-items-end mt-auto mb-auto col-3"
                    style={{ fontSize: "20px" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
