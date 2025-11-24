import React, { useState } from "react";

const BookTable = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    persons: "1 Person",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Booking
  const handleBooking = () => {
    const { date, time, name, phone } = formData;

    // Check if any field is empty
    if (!date || !time || !name || !phone) {
      alert("Please fill all fields before booking a table.");
      return;
    }

    // Success message
    alert("Table booked successfully!");
  };

  return (
    <section className="book-section">
      {/* Title */}
      <div className="book-title-wrapper">
        <h1 className="book-title">Book A Table</h1>
        <p className="book-subtext">
          Your perfect dining spot is just a click away. Let us serve you an unforgettable experience.
        </p>
      </div>

      {/* Form Card */}
      <div className="book-card">
        <div className="book-grid">
          {/* Date */}
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          {/* Time */}
          <div className="form-group">
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>

          {/* Name */}
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              placeholder="xxx-xxx-xxxx"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Persons */}
        <div className="form-group single">
          <label>Total Person</label>
          <select
            name="persons"
            value={formData.persons}
            onChange={handleChange}
          >
            <option>1 Person</option>
            <option>2 People</option>
            <option>3 People</option>
            <option>4 People</option>
          </select>
        </div>

        {/* Button */}
        <button className="book-btn" onClick={handleBooking}>
          Book A Table
        </button>
      </div>

      {/* MAP SECTION */}
      <div className="map-block"></div>
    </section>
  );
};

export default BookTable;
