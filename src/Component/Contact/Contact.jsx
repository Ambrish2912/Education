import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  // Email API
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8fd78905-d4e2-4bfa-83b7-80f4c9f9746a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  // End Email Api

  return (
    <div className="Contact">
      <div className="Contact-col">
        <h3>
          Send us a massage <img src={msg_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
          nesciunt facere reiciendis incidunt aut ipsum sequi suscipit placeat!
          Id vero obcaecati eum quasi at maiores fugit quia nostrum nesciunt
          deleniti?
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            atmiyavidyamandir@avm.edu.in
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +91 (0)9825321226
          </li>
          <li>
            <img src={location_icon} alt="" />
            Atmiya Vidya Mandir At & Po. Kolibharthana, Kamrej – Shampura Road,
            Ta. Kamrej, Dist. Surat,
            <br />
            Gujarat 394180 INDIA
          </li>
        </ul>
      </div>
      <div className="Contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your massage"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
