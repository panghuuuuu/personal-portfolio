import { React, useState } from "react";
import "../stylesheets/contact.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import Picture from "../assets/homepic.png";
const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    switch (event.target.name) {
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "message":
        setMessage(event.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="form">
          <h1> Contact Me </h1>
          <h4>
            {" "}
            Hey there! Don't hesitate to hit me up if you have any opportunities
            in mind. And if you just want to chat randomly, feel free to do so
            too!{" "}
          </h4>
          <div className="name">
            <div className="label">
              <p>First Name</p>
            </div>
            <div className="label">
              <p>Last Name</p>
            </div>

            <input
              type="text"
              name="firstName"
              value={firstName}
              placeholder="John"
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              className="name"
              name="lastName"
              value={lastName}
              placeholder="Doe"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="label">
            <p>Email</p>
          </div>
          <input
            type="email"
            className="email"
            name="email"
            value={email}
            placeholder="johndoe@gmail.com"
            onChange={handleInputChange}
            required
          />
          <div className="label">
            <p>Message</p>
          </div>
          <textarea
            className="message"
            name="message"
            value={message}
            placeholder="Send me a message"
            onChange={handleInputChange}
            required
          />
          <div className="submit_btn">
            <div className="btn btn-primary">Submit</div>
          </div>
        </div>
        <div className="contact__socials">
          <img src={Picture} alt="Ysabell Panghulan"></img>
          <div className="contact__links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <BsGithub />
            </a>
            <a href="https://dribble.com" target="_blank" rel="noreferrer">
              <BsDribbble />
            </a>
            <a
              href="mailto:ysabellapanghulan@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <HiMail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
