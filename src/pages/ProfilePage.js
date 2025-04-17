import React from 'react';
import ProfileSection from '../components/profile/ProfileSection';

const ProfilePage = () => {
  return (
    <>
      <div className="page-header">
        <h1>Profile Management</h1>
        <p className="page-description">Manage your profile information and preferences</p>
      </div>
      
      <div className="profile-page-content">
        <div className="dashboard-card full-width-card">
          <div className="card-header">
            <h2>User Profile Details</h2>
            <button className="card-action">⋮</button>
          </div>
          <div className="card-body">
            <ProfileSection />
          </div>
        </div>
        
        <div className="dashboard-sections two-column-layout">
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Account Security</h2>
              <button className="card-action">⋮</button>
            </div>
            <div className="card-body">
              <div className="security-settings">
                <div className="setting-item">
                  <div className="setting-info">
                    <h3>Password</h3>
                    <p>Last changed 30 days ago</p>
                  </div>
                  <button className="action-btn">Change</button>
                </div>
                
                <div className="setting-item">
                  <div className="setting-info">
                    <h3>Two-Factor Authentication</h3>
                    <p>Enabled</p>
                  </div>
                  <button className="action-btn">Manage</button>
                </div>
                
                <div className="setting-item">
                  <div className="setting-info">
                    <h3>Login History</h3>
                    <p>5 devices connected</p>
                  </div>
                  <button className="action-btn">View</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Notification Preferences</h2>
              <button className="card-action">⋮</button>
            </div>
            <div className="card-body">
              <div className="notification-settings">
                <div className="setting-item">
                  <div className="setting-info">
                    <h3>Email Notifications</h3>
                    <p>Receive important updates via email</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider round"></span>
                  </label>
                </div>
                
                <div className="setting-item">
                  <div className="setting-info">
                    <h3>Expense Approvals</h3>
                    <p>Receive notifications for pending approvals</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider round"></span>
                  </label>
                </div>
                
                <div className="setting-item">
                  <div className="setting-info">
                    <h3>Calendar Reminders</h3>
                    <p>Get reminded about upcoming deadlines</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
