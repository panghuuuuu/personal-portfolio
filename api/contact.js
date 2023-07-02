require("dotenv").config();
const email = process.env.EMAIL;
const pwd = process.env.PASSWORD;

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pwd,
  },
});

const contactHandler = async (req, res) => {
  if (req.method === "POST") {
    const formData = JSON.parse(req.body);

    const mailOptions = {
      from: formData.email,
      to: email,
      subject: "New Contact Form Submission",
      text: `
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Email: ${formData.email}
        Message: ${formData.message}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res.status(200).json({ message: "Form submitted successfully" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default contactHandler;
