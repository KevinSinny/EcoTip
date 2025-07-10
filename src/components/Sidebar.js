import React from 'react';
import { FaLeaf, FaTrophy, FaChalkboardTeacher, FaUsers, FaTasks, FaHome, FaUserCircle } from 'react-icons/fa';
import './Sidebar.css'; // You'll define the CSS rules here

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* App title */}
      <div className="sidebar-header">
        <FaLeaf className="icon" />
        <span className="title">EcoTip</span>
      </div>

      {/* Menu options */}
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <FaHome className="icon" />
          <span>Dashboard</span>
        </li>
        <li className="sidebar-item">
          <FaTasks className="icon" />
          <span>Challenges</span>
        </li>
        <li className="sidebar-item">
          <FaTrophy className="icon" />
          <span>Leaderboard</span>
        </li>
        <li className="sidebar-item">
          <FaChalkboardTeacher className="icon" />
          <span>Learn</span>
        </li>
        <li className="sidebar-item">
          <FaUsers className="icon" />
          <span>Community</span>
        </li>
      </ul>

      {/* Profile section */}
      <div className="sidebar-profile">
        <FaUserCircle className="profile-icon" />
        <div className="profile-details">
          <div className="profile-name">Aman</div>
          <div className="profile-email">aman@example.com</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;