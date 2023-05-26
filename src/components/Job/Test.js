import React, { useState } from 'react';

const cities = ['New York', 'San Francisco', 'London', 'Tokyo'];
const jobFields = ['Software Development', 'Data Science', 'Web Design', 'Marketing'];
const jobTitles = ['Software Engineer', 'Data Analyst', 'UI/UX Designer', 'Marketing Manager'];

const MyForm = () => {
  const [city, setCity] = useState('');
  const [jobField, setJobField] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [post, setPost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform the POST request with the form data
    console.log('City:', city);
    console.log('Job Field:', jobField);
    console.log('Job Title:', jobTitle);
    console.log('Post:', post);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>City:</label>
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Select a city</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Job Field:</label>
        <select value={jobField} onChange={(e) => setJobField(e.target.value)}>
          <option value="">Select a job field</option>
          {jobFields.map((field) => (
            <option key={field} value={field}>{field}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Job Title:</label>
        <select value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}>
          <option value="">Select a job title</option>
          {jobTitles.map((title) => (
            <option key={title} value={title}>{title}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Post:</label>
        <textarea value={post} onChange={(e) => setPost(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
