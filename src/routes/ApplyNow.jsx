import React, { useState } from 'react';
import backend from '../backendLink';
import { ToastContainer, toast } from 'react-toastify';
const ApplyNowForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    dealership: '',
    priceRange: '',
    state: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send the data to the server)

    try {
      const res = await fetch(`${backend}/apply/`, {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          dealership: formData.dealership,
          priceRange: formData.priceRange,
          state: formData.state,
          city: formData.city
        }),
      });
      // let resJson = await res.json();
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

<div className="ApplyNow">
        <h1 className='galleryh1'>
        Apply Now
        </h1>
    </div>

    <form className="apply-now-form" onSubmit={handleSubmit}>
      <ToastContainer/>
      <div className="form-group">
        <label htmlFor="fullName">Enter full name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone number:</label>
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
        <label htmlFor="priceRange">Choose your dealership:</label>
        <select
          id="dealership"
          name="dealership"
          value={formData.dealership}
          onChange={handleChange}
          required
        >
          <option value="">Select price range</option>
          <option value="15 Lakh">Dealer</option>
          <option value="20 Lakh">Distributer</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="priceRange">Price range:</label>
        <select
          id="priceRange"
          name="priceRange"
          value={formData.priceRange}
          onChange={handleChange}
          required
        >
          <option value="">Select price range</option>
          <option value="15 Lakh">15 to 20 Lakh</option>
          <option value="20 Lakh">20 to 30 Lakh</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City/District:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <button className='apply-btn' type="submit">Apply Now</button>
    </form>
    </>
  );
};

export default ApplyNowForm;
