import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import './pages/pages.css'; // Import pages CSS file

// Import Pages
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import CalendarPage from './pages/CalendarPage';
import ExpensesPage from './pages/ExpensesPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';

// Navigation Item Component
const NavItem = ({ icon, text, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to}>
        <span className="icon">{icon}</span>
        <span className="nav-text">{text}</span>
      </Link>
    </li>
  );
};

function MainApp() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>EEM Dashboard</h2>
          <button className="toggle-btn" onClick={toggleSidebar}>
            {sidebarOpen ? '←' : '→'}
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <NavItem icon="📊" text="Dashboard" to="/" />
            <NavItem icon="👤" text="Profile" to="/profile" />
            <NavItem icon="📅" text="Calendar" to="/calendar" />
            <NavItem icon="💰" text="Expenses" to="/expenses" />
            <NavItem icon="📊" text="Reports" to="/reports" />
            <NavItem icon="⚙️" text="Settings" to="/settings" />
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`main-content ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <h1>Enterprise Expense Management</h1>
          </div>
          <div className="header-right">
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <button className="search-btn">🔍</button>
            </div>
            <div className="header-actions">
              <button className="notification-btn">🔔</button>
              <button className="user-btn">👤</button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="dashboard-content">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/expenses" element={<ExpensesPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
        
        {/* Footer */}
        <footer className="dashboard-footer">
          <p> 2025 Enterprise Expense Management System</p>
          <div className="footer-links">
            <a href="#help">Help</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

export default App;
