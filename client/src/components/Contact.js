import React, { useState } from "react";
import { sendMessage } from "../ApiBaseMethods/index.js";


const Contact = () => {
   
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const inputValueChangeHandler = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  }

  const sendFormMessage = async (event) => {
    event.preventDefault();
    await sendMessage(formData)
    alert('message sent successfully');
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

  }

  return (
    <main>
      <section id="contact-form-section">
        <h2>Contact Form</h2>
        <div className="form-div">
          <form id="contact-form" onSubmit={sendFormMessage}>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={(e) => inputValueChangeHandler(e)} required />
            <label for="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={(e) => inputValueChangeHandler(e)} required />
            <label for="email">Subject</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={(e) => inputValueChangeHandler(e)} required />
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={(e) => inputValueChangeHandler(e)} required></textarea>
            {/* <input type="submit" value="Submit" /> */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
