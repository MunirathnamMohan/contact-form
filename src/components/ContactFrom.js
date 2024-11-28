import React, { useState } from "react";
import "../index.css";

const ContactForm = () => {
  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    query_type: '',
    message: ''
  });

  const handleData = (type, event) => {
    const userInput = event.target.value;
    setData(prevState => ({
      ...prevState,
      [type]: userInput
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-con">
      <div className="card">
        <h1>Contact Us</h1>
        <div className="name-con">
          <div className="first-name">
            <label>First Name</label>
            <br />
            <input type="text" required value={data.first_name} onChange={(event) => handleData('first_name', event)} />
          </div>
          <div className="last-name">
            <label>Last Name</label>
            <br />
            <input type="text" required value={data.last_name} onChange={(event) => handleData('last_name', event)} />
          </div>
        </div>
        <div className="email">
          <label>Email Address</label>
          <br />
          <input type="email" required value={data.email} onChange={(event) => handleData('email', event)} />
        </div>
        <div>
          <label>Query Type</label>
          <div className="radio-con">
            <div className="first-radio">
              <input onChange={(event)=>handleData('query_type',event)} id="1" type="radio" name="choice" value='General Enquiry' />
              <label htmlFor="1">General Enquiry</label>
            </div>
            <div className="second-radio">
              <input onChange={(event)=>handleData('query_type',event)} id="2" type="radio" name="choice" value="Support Request" />
              <label htmlFor='2'>Support Request</label>
            </div>
          </div>
        </div>
        <div className="message">
          <label>Message</label>
          <textarea required cols="50" rows="5" value={data.message} onChange={(event) => handleData('message', event)}></textarea>
        </div>
        <div>
          <input required type="checkbox" id="check" value={data.message} onChange={(event) => handleData('message', event)} />
          <label htmlFor='check'>I consent to being contacted by the team</label>
        </div>
        <div className="btn-con">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;