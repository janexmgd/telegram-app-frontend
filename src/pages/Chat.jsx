import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "../redux/actions/user";
import { BACKEND_URL } from "../helpers/env";
import { BulletList } from "react-content-loader";
import io from "socket.io-client";

import style from "../assets/styles/chat.module.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import backArrow from "../assets/images/arrow.svg";
import avatar from "../assets/images/avatar.webp";

// import component
import Profile from "../components/Profile";

const Chat = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [divChat, setdivChat] = useState(false);
  const [login, setLogin] = useState({});
  const [listChat, setListChat] = useState([]);
  const [profile, setProfile] = useState(false);

  // SOCKET
  const [socketio, setSocketio] = useState(null);

  // get all user
  const listUser = useSelector((state) => {
    return state.listUser;
  });
  useEffect(() => {
    const socket = io(BACKEND_URL);
    const user = JSON.parse(localStorage.getItem("user"));
    setLogin(user);
    // console.log(login);
    socket.on("send-message-response", (response) => {
      // setListChat([...listChat, response]);
      const receiver = JSON.parse(localStorage.getItem("receiver"));
      // console.log(receiver);
      // return console.log(response);
      if (
        receiver.name === response[0].sender ||
        receiver.name === response[0].receiver
      ) {
        setListChat(response);
      }
      // setListChat(response);
      // console.log(response);
    });
    // console.log(listChat);
    setSocketio(socket);
  }, []);
  useEffect(() => {
    dispatch(getListUser(token));
  }, []);
  const onSubmitMessage = (e) => {
    e.preventDefault();
    // return console.log(message);
    const user = JSON.parse(localStorage.getItem("user"));
    const receiver = localStorage.getItem("receiver");
    const data = {
      sender: user.id,
      receiver: activeReceiver.id,
      message,
    };
    // data untuk diri sendiri
    const payload = {
      sender: user.name,
      receiver: receiver.name,
      message,
    };
    setListChat([...listChat, payload]);
    socketio.emit("send-message", data);
    //reset message
    setMessage("");
  };
  const [activeReceiver, setActiveReceiver] = useState({});
  const selectReceiver = (item) => {
    setListChat([]);
    setActiveReceiver(item);
    localStorage.setItem("receiver", JSON.stringify(item));
    socketio.emit("join-room", login);
    const data = {
      sender: login.id,
      receiver: item.id,
    };
    console.log(data);
    console.log(login.id);
    socketio.emit("chat-history", data);
  };
  const openThis = () => {
    isOpen == true ? setIsOpen(false) : setIsOpen(true);
  };
  const openChat = () => {
    setdivChat(true);
  };
  const toMyProfile = () => {
    setProfile(true);
  };
  const toListChat = () => {
    setProfile(false);
  };
  return (
    <>
      <Helmet>
        <title>Chat</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"
        ></link>
      </Helmet>
      <div className={style.body}>
        <div className={style.container}>
          <div className={style.content}>
            {profile ? (
              <Profile
                changePage={() => {
                  toListChat();
                }}
              />
            ) : (
              <div className={style.leftContent}>
                <div className={style.leftTop}>
                  <div className={style.TopName}>Telegram</div>
                  <div className="d-flex justify-content-end col-6 align-items-end">
                    <Dropdown
                      isOpen={isOpen}
                      toggle={() => {
                        openThis();
                      }}
                    >
                      <DropdownToggle className="bg-white border-0">
                        <i
                          className="bi bi-three-dots-vertical"
                          style={{
                            color: "#7E98DF",
                            fontSize: "25px",
                          }}
                        ></i>
                      </DropdownToggle>
                      <DropdownMenu
                        end
                        color=""
                        style={{
                          color: "white",
                          backgroundColor: "#7E98DF",
                          width: "250px",
                          height: "400px",
                          borderRadius: "25px 10px 25px 25px",
                        }}
                      >
                        <DropdownItem className="text-white p-3">
                          <button
                            className="col-12 text-start text-white"
                            onClick={toMyProfile}
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                            }}
                          >
                            <i className="fa-solid fa-gear m-2"></i>Setting
                          </button>
                        </DropdownItem>
                        <DropdownItem className="text-white p-3">
                          <i className="fa-regular fa-user m-2"></i>{" "}
                          {login.name}
                        </DropdownItem>
                        <DropdownItem className="text-white p-3">
                          <i className="fa-solid fa-phone m-2"></i>Call
                        </DropdownItem>
                        <DropdownItem className="text-white p-3">
                          <i className="fa-regular fa-bookmark m-2"></i>
                          Save Message
                        </DropdownItem>
                        <DropdownItem className="text-white p-3">
                          <i className="bi bi-person-plus m-2"></i>
                          Invite Friends
                        </DropdownItem>
                        <DropdownItem className="text-white p-3">
                          <i className="fa-regular fa-circle-question m-2"></i>
                          Telegram FAQ
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
                <div className={style.leftMid}>
                  <form className={style.searchBox}>
                    <div className={style.iconSearch}>
                      <i className="fa fa-search"></i>
                    </div>
                    <input type="text" placeholder="search user" />
                  </form>
                  <div className={style.plusIcon}>
                    <i className="bi bi-plus"></i>
                  </div>
                  <input
                    type="submit"
                    style={{
                      display: "none",
                    }}
                  />
                </div>
                {/* for user list */}
                <div className={style.mainContent}>
                  {listUser.isLoading ? (
                    <div>
                      <BulletList />
                    </div>
                  ) : listUser.isError ? (
                    <div>Error</div>
                  ) : (
                    listUser.data.map((item, i) =>
                      item.id !== login.id ? (
                        <button
                          onClick={() => {
                            openChat();
                            selectReceiver(item);
                          }}
                          key={i}
                        >
                          <div className={style.userList}>
                            <img
                              src={`${BACKEND_URL}/uploads/users/${item.photo}`}
                              alt=""
                            />
                            <div className={style.userData}>
                              <div className={style.userName}>{item.name}</div>
                              <div className={style.newChat}>
                                Why did you do that?
                              </div>
                            </div>
                          </div>
                        </button>
                      ) : null
                    )
                  )}
                </div>
              </div>
            )}
            {divChat ? (
              <div className={style.rightContentChat}>
                <div className={style.headerChat}>
                  <div className={style.receiver}>
                    <img
                      src={`${BACKEND_URL}/uploads/users/${activeReceiver.photo}`}
                      alt=""
                    />
                    <div className={style.receiverData}>
                      <div className={style.receiverName}>
                        {activeReceiver.name}
                      </div>
                      <div className={style.receiverStatus}>Online</div>
                    </div>
                    <div className={style.detailReceiver}>
                      <i className="bi bi-grid"></i>
                    </div>
                  </div>
                </div>
                <div className={style.chatDiv}>
                  <div className={style.chatContent}>
                    {listChat.map((item, i) =>
                      item.receiverid != login.id ? (
                        <div className={style.messageOut} key={i}>
                          <div className={style.messageOutContainer}>
                            <div className={style.messageOutContent}>
                              {item.chat}
                            </div>
                          </div>
                          <div className={style.receiverPhoto}>
                            <img
                              src={`${BACKEND_URL}/uploads/users/${item.receiverphoto}`}
                              alt=""
                            />
                          </div>
                        </div>
                      ) : (
                        <div className={style.messageIn} key={i}>
                          <div className={style.senderPhoto}>
                            <img
                              src={`${BACKEND_URL}/uploads/users/${item.receiverphoto}`}
                              alt=""
                            />
                          </div>
                          <div className={style.messageInContainer}>
                            <div className={style.messageInContent}>
                              {item.chat}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className={style.sendMessageContainer}>
                  <form
                    className={style.sendMessageBox}
                    onSubmit={(e) => {
                      onSubmitMessage(e);
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Type Your Message"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />
                    <button className={style.iconSend}>
                      <i className="bi bi-send"></i>
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <div className={style.rightContent}>
                Please select a chat to start messaging
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
