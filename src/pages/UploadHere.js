import React, { useState } from 'react';

const euCountries = [
  'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic',
  'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary',
  'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta',
  'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia',
  'Spain', 'Sweden'
];

const categories = ['Disinformation', 'Counter disinformation'];

const topics = [
  'Sexual Minority', 'Politics', 'Environment', 'Religion', 'Immigration',
  'Public Security', 'Military', 'Economy & Jobs'
];

const subtitles = [
  'Conspiracy Theories',
  'Demonisation of groups',
  'Falsification of statements',
  'Disinformation about laws and policies',
  'Use of Out-of-Context Images',
  'Falsification of Documents and Fabricated Scandals',
  'Clickbait and Sensationalist Headlines',
  'Bots and Automated Campaigns',
  'Media Literacy and Fact-Checking',
  'Regulation of Social Media',
  'Laws Against Hate Speech',
  'Partnerships Between Leaders',
  'Public Awareness Campaigns',
  'Demonetization of Disinformers',
  'Rapid Responses from Organizations and Authorities',
  'Active Moderation and Artificial Intelligences',
  'Algorithm Transparency'
];

const UploadHere = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    country: '',
    topic: '',
    subtitle: '',
    description: '',
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData((prev) => ({ ...prev, image: files[0] || null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const newErrors = {};
    ['title', 'category', 'country', 'topic', 'subtitle', 'description'].forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setSubmitMessage('');
      return;
    }

    const newPost = {
      title: formData.title,
      category: formData.category,
      country: formData.country,
      topic: formData.topic,
      subtitle: formData.subtitle,
      description: formData.description,
      image: formData.image ? URL.createObjectURL(formData.image) : null,
      date: new Date().toISOString(),
    };

    // ✅ Save post to localStorage
    const existing = JSON.parse(localStorage.getItem('posts') || '[]');
    const updated = [newPost, ...existing];
    localStorage.setItem('posts', JSON.stringify(updated));

    // ✅ Reset form
    setSubmitMessage('Post submitted successfully!');
    setFormData({
      title: '',
      category: '',
      country: '',
      topic: '',
      subtitle: '',
      description: '',
      image: null,
    });
    setErrors({});
  };

  // Helper to render dropdowns
  const renderDropdown = (label, name, options) => (
    <div style={{ marginBottom: 20 }}>
      <label htmlFor={name} style={{ display: 'block', fontWeight: 'bold' }}>{label}:</label>
      <select
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required
        style={{ width: '100%', padding: 8, fontSize: 14 }}
      >
        <option value="">-- Select {label} --</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {errors[name] && <span style={{ color: 'red', fontSize: 12 }}>{errors[name]}</span>}
    </div>
  );

  return (
    <div style={{ maxWidth: 600, margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Insert Posts</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
        {/* Title */}
        <div style={{ marginBottom: 20 }}>
          <label htmlFor="title" style={{ display: 'block', fontWeight: 'bold' }}>Title:</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
            style={{ width: '100%', padding: 8, fontSize: 14 }}
            required
          />
          {errors.title && <span style={{ color: 'red', fontSize: 12 }}>{errors.title}</span>}
        </div>

        {/* Dropdowns */}
        {renderDropdown('Category', 'category', categories)}
        {renderDropdown('Country', 'country', euCountries)}
        {renderDropdown('Topic', 'topic', topics)}
        {renderDropdown('Subtitle', 'subtitle', subtitles)}

        {/* Description */}
        <div style={{ marginBottom: 20 }}>
          <label htmlFor="description" style={{ display: 'block', fontWeight: 'bold' }}>Description (Body):</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write your text here..."
            style={{ width: '100%', padding: 8, fontSize: 14 }}
            required
          />
          {errors.description && <span style={{ color: 'red', fontSize: 12 }}>{errors.description}</span>}
        </div>

        {/* Image upload */}
        <div style={{ marginBottom: 20 }}>
          <label htmlFor="image" style={{ display: 'block', fontWeight: 'bold' }}>Upload Image (optional):</label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        {/* Submit button */}
        <button type="submit" style={{ padding: '10px 20px', fontSize: 16, cursor: 'pointer' }}>
          Submit
        </button>

        {submitMessage && <p style={{ marginTop: 20, color: 'green' }}>{submitMessage}</p>}
      </form>
    </div>
  );
};

export default UploadHere;
