import React, { useState } from 'react';

function DiseaseDetectionPage() {
  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState('');
  const [result, setResult] = useState(null);

  const handleFile = e => setImage(e.target.files[0]);
  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('description', desc);
    const token = localStorage.getItem('token');
    const res = await fetch('http://127.0.0.1:5000/api/detect', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      body: formData
    });
    const json = await res.json();
    setResult(json.diagnosis);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        <label>Upload your image here:</label>
        <input type="file" onChange={handleFile} accept="image/*" required />
        <label>Describe a little:</label>
        <textarea value={desc} onChange={e => setDesc(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {result && <div className="result-box"><h3>Diagnosis:</h3><p>{result}</p></div>}
    </div>
  );
}

export default DiseaseDetectionPage;