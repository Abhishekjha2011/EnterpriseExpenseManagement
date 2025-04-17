import React from 'react';
import CalendarWithDeadlines from '../components/calendar/CalendarWithDeadlines';

const CalendarPage = () => {
  return (
    <>
      <div className="page-header">
        <h1>Calendar</h1>
        <p className="page-description">Manage your schedule and deadlines</p>
      </div>
      
      <div className="calendar-page-content">
        <div className="dashboard-sections">
          <div className="dashboard-card full-width-card">
            <div className="card-header">
              <h2>Calendar & Events</h2>
              <button className="card-action">⋮</button>
            </div>
            <div className="card-body">
              <CalendarWithDeadlines />
            </div>
          </div>
        </div>
        
        <div className="dashboard-sections two-column-layout">
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Upcoming Meetings</h2>
              <button className="card-action">⋮</button>
            </div>
            <div className="card-body">
              <div className="meetings-list">
                <div className="meeting-item">
                  <div className="meeting-time">10:00 AM - 11:00 AM</div>
                  <div className="meeting-info">
                    <h3>Budget Review</h3>
                    <p>Finance Department • Conference Room A</p>
                  </div>
                  <div className="meeting-actions">
                    <button className="icon-btn">📝</button>
                    <button className="icon-btn">🔔</button>
                  </div>
                </div>
                
                <div className="meeting-item">
                  <div className="meeting-time">2:00 PM - 3:30 PM</div>
                  <div className="meeting-info">
                    <h3>Quarterly Planning</h3>
                    <p>All Departments • Main Hall</p>
                  </div>
                  <div className="meeting-actions">
                    <button className="icon-btn">📝</button>
                    <button className="icon-btn">🔔</button>
                  </div>
                </div>
                
                <div className="meeting-item">
                  <div className="meeting-time">4:00 PM - 5:00 PM</div>
                  <div className="meeting-info">
                    <h3>Client Call: ABC Corp</h3>
                    <p>Sales Team • Virtual Meeting</p>
                  </div>
                  <div className="meeting-actions">
                    <button className="icon-btn">📝</button>
                    <button className="icon-btn">🔔</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Calendar Integrations</h2>
              <button className="card-action">⋮</button>
            </div>
            <div className="card-body">
              <div className="integrations-list">
                <div className="integration-item">
                  <div className="integration-info">
                    <h3>Google Calendar</h3>
                    <p>Sync your Google Calendar events</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider round"></span>
                  </label>
                </div>
                
                <div className="integration-item">
                  <div className="integration-info">
                    <h3>Microsoft Outlook</h3>
                    <p>Sync your Outlook calendar events</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </div>
                
                <div className="integration-item">
                  <div className="integration-info">
                    <h3>Apple Calendar</h3>
                    <p>Sync your Apple Calendar events</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" />
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

export default CalendarPage;
