import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    company: '',
    role: 'Developer', // Set a default value
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/.netlify/functions/send-mail', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully');
      } else {
        alert('Error sending email');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Request a demo</h1>
      <p>If you are a professional, we offer a desktop admin platform to allow better and faster management of your whole business.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="role">Role in Company:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
          >
            <option value="Developer">Developer</option>
            <option value="QA Analyst">QA Analyst</option>
            <option value="Business Analyst">Business Analyst</option>
          </select>
        </div>
        <button type="submit">Request</button>
      </form>
    </>
  );
}

export default App;