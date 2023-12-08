import React from 'react';

const ContactChat = ({ imgContact, contactName, onClick }) => {
  return (
    <div className="contact__chat" onClick={onClick}>
      <img src={imgContact} alt="" className="contact__img" />
      <h2 className="contact__name">{contactName}</h2>
      <div className="circle__notification"></div>
    </div>
  );
};

export default ContactChat;
