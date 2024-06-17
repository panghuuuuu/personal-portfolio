import React, { useState } from "react";
import "../stylesheets/contact.css";
import { BsGithub } from "react-icons/bs";
import { AiFillGitlab } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import Picture from "../assets/skills.png";
import emailjs from "@emailjs/browser";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((result) => {
        console.log(result.text);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
      });
  };

  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="textarea">
          <div className="intro">
            <h1>Contact Me</h1>
            <h4>
              Hey there! Don't hesitate to hit me up if you have any
              opportunities in mind. And if you just want to chat randomly, feel
              free to do so too!
            </h4>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="name">
                <div className="label">
                  <p>First Name</p>
                </div>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  placeholder="John"
                  onChange={handleInputChange}
                  required
                />
                <div className="label">
                  <p>Last Name</p>
                </div>
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
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="contact__socials">
          <div className="contact_img">
            <img src={Picture} alt="Ysabella Panghulan"></img>
            <div className="contact__links">
              <a
                href="https://github.com/panghuuuuu"
                rel="noreferrer"
                target="_blank"
              >
                <BsGithub />
              </a>
              <a
                href="https://gitlab.com/panghuuuuu"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillGitlab />
              </a>
              <a
                href="mailto:ysabellapanghulan@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <HiMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
