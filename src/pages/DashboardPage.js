import React from 'react';
import ProfileSection from '../components/profile/ProfileSection';
import CalendarWithDeadlines from '../components/calendar/CalendarWithDeadlines';

const DashboardPage = () => {
  return (
    <>
      {/* Stats Cards */}
      <div className="stats-cards">
        <div className="stat-card">
          <div className="stat-icon">💵</div>
          <div className="stat-info">
            <h3>Total Expenses</h3>
            <p className="stat-value">$24,521</p>
            <p className="stat-change positive">+12% from last month</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-info">
            <h3>Pending Approvals</h3>
            <p className="stat-value">8</p>
            <p className="stat-change negative">+3 since yesterday</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <div className="stat-info">
            <h3>Upcoming Deadlines</h3>
            <p className="stat-value">4</p>
            <p className="stat-change neutral">Same as last week</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-info">
            <h3>Department Budget</h3>
            <p className="stat-value">$156,300</p>
            <p className="stat-change positive">24% remaining</p>
          </div>
        </div>
      </div>

      {/* Main Dashboard Sections */}
      <div className="dashboard-sections">
        {/* Profile Section Card */}
        <div className="dashboard-card profile-card">
          <div className="card-header">
            <h2>User Profile</h2>
            <button className="card-action">⋮</button>
          </div>
          <div className="card-body">
            <ProfileSection />
          </div>
        </div>

        {/* Calendar Section Card */}
        <div className="dashboard-card calendar-card">
          <div className="card-header">
            <h2>Calendar & Deadlines</h2>
            <button className="card-action">⋮</button>
          </div>
          <div className="card-body">
            <CalendarWithDeadlines />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
