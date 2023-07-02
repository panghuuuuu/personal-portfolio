import { React, useState } from "react";
import "../stylesheets/contact.css";
import { BsGithub } from "react-icons/bs";
import { AiFillGitlab } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import Picture from "../assets/skills.png";
import axios from "axios";

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
  const handleSubmit = () => {
    const formData = {
      firstName,
      lastName,
      email,
      message,
    };

    axios
      .post("/api/contact", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="textarea">
          <div className="intro">
            <h1> Contact Me </h1>
            <h4>
              {" "}
              Hey there! Don't hesitate to hit me up if you have any
              opportunities in mind. And if you just want to chat randomly, feel
              free to do so too!{" "}
            </h4>
          </div>
          <div className="form">
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
              <form onSubmit={handleSubmit}>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
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
