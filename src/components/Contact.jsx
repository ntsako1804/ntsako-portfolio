import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // 1️⃣ Send message to me
    emailjs.sendForm(
      "service_3vftgdt",        
      "template_wp9blli",       
      form.current,
      "0ipgyLewgB_jzSsav"          
    )
    .then(() => {
      console.log("Message sent to you successfully!");

      // 2️⃣ Send auto-reply to the user
      emailjs.sendForm(
        "service_3vftgdt",       
        "template_y8hqpqs",     
        form.current,
        "0ipgyLewgB_jzSsav"
      )
      .then(() => {
        alert("Message sent successfully! ✅ Check your email for confirmation.");
        form.current.reset();
      })
      .catch((error) => console.error("Auto-reply error:", error));
    })
    .catch((error) => console.error("Message send error:", error));
  };

  return (
    <section id="contact" className="contact">
      <div className="glass">
        <h2>Contact Me</h2>
        <p>
          If you'd like to connect or have any questions, feel free to reach out to me!
        </p>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Enter your Name" required />
          <input type="email" name="email" placeholder="Enter your Email Address" required />
          <textarea name="message" placeholder="Enter your Message or Query" required />
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
