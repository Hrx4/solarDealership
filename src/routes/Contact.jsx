import React, { useState } from 'react';
import backend from '../backendLink';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {   
    e.preventDefault();

    try {
      const res = await fetch(`${backend}/contacts/`, {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          message: formData.message
        }),
      });
      if (res.status === 200) {
        console.log("fine");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
    
    toast.success('Form submitted', {
      position: toast.POSITION.TOP_CENTER
  });
  };

  return (
    <>
    <div className="gallery-heading">
        <h1 className='galleryh1'>
        Get In Touch
        </h1>
    </div>

    <div className="contact">
        <h1 >
        LET’S TALK TOGETHER
        </h1>
        You already know what we do. Now all you have to do is get in touch with us. Give us a call, shoot us an email, or drop in for some wonderfully brewed coffee.
    </div>

    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <ToastContainer/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button className='apply-btn' type="submit">Submit</button>
    </form>


    <div className="contact-details">
        <h1>
        Get In Touch
        </h1>
        TATA POWER SOLAR LTD. Backbay Rec Station, 148, Lt. Gen. J.Bhonsle Marg Nariman Point, Mumbai - 400021 <br />
+91 9836612533 <br />
info@solardealership.co.in
    </div>
    </>
  );
};

export default Contact;
