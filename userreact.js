import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function UserForm() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: Perform form validation
    fetch('/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, dob, email, phone }),
    })
      .then(response => response.json())
      .then(data => {
        // TODO: Handle successful form submission
        console.log(data);
      })
      .catch(error => {
        // TODO: Handle form submission error
        console.error(error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Date of Birth:
        <DatePicker selected={dob} onChange={date => setDob(date)} dateFormat="dd/MM/yyyy" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="tel" value={phone} onChange={event => setPhone(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}