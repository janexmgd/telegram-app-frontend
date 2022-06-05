import React from 'react';
import { Helmet } from 'react-helmet';
import style from '../assets/styles/chat.module.css';
const Chat = () => {
  return (
    <>
      <Helmet>
        <title>Chat</title>
      </Helmet>
      <div className={style.body}>
        <div className={style.container}>
          <div className={style.content}>
            <div className={style.leftContent}></div>
            <div className={style.rightContent}>
              Please select a chat to start messaging
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
