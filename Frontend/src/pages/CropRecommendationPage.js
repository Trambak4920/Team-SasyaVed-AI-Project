import React, { useState } from 'react';

const terrains = ['Mountain','Forest','Hill','Desert','Plateau','Plains'];
const temps = ['0-15°C','15-30°C','30-50°C','50°C+'];
const soils = ['Sandy','Silty','Clayey','Loamy','Alluvial'];
const rains = ['1200-1500mm','800-1200mm','300-800mm','<300mm'];

function CropRecommendationPage() {
  const [data, setData] = useState({ terrain: '', temperature: '', soil: '', fertilizer: 'Organic', rain: '', region: '' });
  const [result, setResult] = useState(null);

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const res = await fetch('http://127.0.0.1:5000/api/recommend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    setResult(json.recommendations);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        <label>Terrain type:</label>
        <select name="terrain" onChange={handleChange} required>
          <option value="">Select</option>
          {terrains.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <label>Temperature:</label>
        <select name="temperature" onChange={handleChange} required>
          <option value="">Select</option>
          {temps.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <label>Type of soil:</label>
        <select name="soil" onChange={handleChange} required>
          <option value="">Select</option>
          {soils.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <label>Type of fertilizer:</label>
        <div>
          <label><input type="radio" name="fertilizer" value="Organic" checked={data.fertilizer==='Organic'} onChange={handleChange} /> Organic</label>
          <label><input type="radio" name="fertilizer" value="Inorganic" checked={data.fertilizer==='Inorganic'} onChange={handleChange} /> Inorganic</label>
        </div>
        <label>Rainfall:</label>
        <select name="rain" onChange={handleChange} required>
          <option value="">Select</option>
          {rains.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
        <label>Region:</label>
        <input name="region" value={data.region} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      {result && <div className="result-box"><h3>Recommended Crops:</h3><p>{result}</p></div>}
    </div>
  );
}

export default CropRecommendationPage;