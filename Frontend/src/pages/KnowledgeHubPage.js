import React, { useState } from 'react';

function KnowledgeHubPage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const res = await fetch('http://127.0.0.1:5000/api/knowledge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ prompt })
    });
    const json = await res.json();
    setResponse(json.answer);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box full-width">
        <label>How may I help you?</label>
        <input
          type="text"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
          required
        />
        <button type="submit">→</button>
      </form>
      {response && <div className="result-box"><p>{response}</p></div>}
    </div>
  );
}

export default KnowledgeHubPage;