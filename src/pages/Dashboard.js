// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css';

const Dashboard = () => {
  const weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Water (L)',
        data: [120, 110, 130, 100, 125, 95, 105],
        backgroundColor: '#4CAF50'
      },
      {
        label: 'Electricity (kWh)',
        data: [4.5, 5.2, 5.1, 4.0, 4.8, 4.9, 5.3],
        backgroundColor: '#FFB300'
      },
      {
        label: 'Plastic (kg)',
        data: [1.5, 1.6, 1.7, 1.0, 1.4, 1.3, 1.2],
        backgroundColor: '#26C6DA'
      }
    ]
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="eco-dashboard">
        <h1 className="title">Sustainability Dashboard</h1>
        <p className="subtitle">Welcome back, Aman! Here's your eco-progress today.</p>

        <div className="stats-grid">
          {/* cards go here */}
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Weekly Usage Overview</h3>
          <p className="chart-subtitle">Your consumption breakdown for the last 7 days.</p>
          <Bar data={weeklyData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
