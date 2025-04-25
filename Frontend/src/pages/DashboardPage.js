import React from 'react';
import { Link } from 'react-router-dom';

function DashboardPage() {
  return (
    <div className="dashboard">
      <Link to="/knowledge" className="dash-card">Knowledge Hub</Link>
      <Link to="/recommend" className="dash-card">Crop Recommendation</Link>
      <Link to="/detect" className="dash-card">Disease Detection</Link>
    </div>
  );
}

export default DashboardPage;