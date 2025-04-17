import React, { useState } from 'react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('english');
  const [dataSaving, setDataSaving] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const saveSettings = () => {
    // Simulate API call to save settings
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <>
      <div className="page-header">
        <h1>Settings</h1>
        <p className="page-description">Manage application preferences and settings</p>
      </div>
      
      <div className="settings-page-content">
        <div className="dashboard-card full-width-card">
          <div className="settings-container">
            <div className="settings-sidebar">
              <div className="settings-tabs">
                <button 
                  className={`settings-tab ${activeTab === 'account' ? 'active' : ''}`}
                  onClick={() => setActiveTab('account')}
                >
                  <span className="tab-icon">👤</span>
                  <span className="tab-text">Account</span>
                </button>
                <button 
                  className={`settings-tab ${activeTab === 'appearance' ? 'active' : ''}`}
                  onClick={() => setActiveTab('appearance')}
                >
                  <span className="tab-icon">🎨</span>
                  <span className="tab-text">Appearance</span>
                </button>
                <button 
                  className={`settings-tab ${activeTab === 'notifications' ? 'active' : ''}`}
                  onClick={() => setActiveTab('notifications')}
                >
                  <span className="tab-icon">🔔</span>
                  <span className="tab-text">Notifications</span>
                </button>
                <button 
                  className={`settings-tab ${activeTab === 'security' ? 'active' : ''}`}
                  onClick={() => setActiveTab('security')}
                >
                  <span className="tab-icon">🔒</span>
                  <span className="tab-text">Security</span>
                </button>
                <button 
                  className={`settings-tab ${activeTab === 'advanced' ? 'active' : ''}`}
                  onClick={() => setActiveTab('advanced')}
                >
                  <span className="tab-icon">⚙️</span>
                  <span className="tab-text">Advanced</span>
                </button>
              </div>
            </div>
            
            <div className="settings-content">
              {/* Account Settings */}
              {activeTab === 'account' && (
                <div className="settings-panel">
                  <h2>Account Settings</h2>
                  
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      className="form-input" 
                      defaultValue="user@example.com"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      defaultValue="John Smith"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Job Title</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      defaultValue="Finance Manager"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Department</label>
                    <select className="form-select">
                      <option value="finance">Finance</option>
                      <option value="hr">Human Resources</option>
                      <option value="marketing">Marketing</option>
                      <option value="sales">Sales</option>
                      <option value="it">IT</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Time Zone</label>
                    <select className="form-select">
                      <option value="utc-8">Pacific Time (UTC-8)</option>
                      <option value="utc-5">Eastern Time (UTC-5)</option>
                      <option value="utc">UTC</option>
                      <option value="utc+1">Central European Time (UTC+1)</option>
                      <option value="utc+5:30" selected>Indian Standard Time (UTC+5:30)</option>
                      <option value="utc+8">China Standard Time (UTC+8)</option>
                    </select>
                  </div>
                </div>
              )}
              
              {/* Appearance Settings */}
              {activeTab === 'appearance' && (
                <div className="settings-panel">
                  <h2>Appearance Settings</h2>
                  
                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Dark Mode</h3>
                      <p>Enable dark mode for a darker color scheme</p>
                    </div>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  
                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Language</h3>
                      <p>Choose your preferred language</p>
                    </div>
                    <select 
                      className="compact-select"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                    >
                      <option value="english">English</option>
                      <option value="spanish">Spanish</option>
                      <option value="french">French</option>
                      <option value="german">German</option>
                      <option value="hindi">Hindi</option>
                      <option value="chinese">Chinese</option>
                    </select>
                  </div>
                  
                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Font Size</h3>
                      <p>Adjust the text size for better readability</p>
                    </div>
                    <div className="font-size-controls">
                      <button className="font-size-btn">A-</button>
                      <span className="font-size-value">Normal</span>
                      <button className="font-size-btn">A+</button>
                    </div>
                  </div>
                  
                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Theme Color</h3>
                      <p>Choose your preferred accent color</p>
                    </div>
                    <div className="color-picker">
                      <span className="color-option blue active"></span>
                      <span className="color-option purple"></span>
                      <span className="color-option green"></span>
                      <span className="color-option orange"></span>
                      <span className="color-option red"></span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Notifications Settings */}
              {activeTab === 'notifications' && (
                <div className="settings-panel">
                  <h2>Notification Settings</h2>
                  
                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Notifications</h3>
                      <p>Enable or disable all notifications</p>
                    </div>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={notifications}
                        onChange={() => setNotifications(!notifications)}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  
                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Email Notifications</h3>
                      <p>Receive notifications via email</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  
                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Desktop Notifications</h3>
                      <p>Show notifications on your desktop</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  
                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Notification Sounds</h3>
                      <p>Play sounds for notifications</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  
                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Expense Approvals</h3>
                      <p>Get notified about expense approval requests</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  
                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Budget Alerts</h3>
                      <p>Get notified when budget thresholds are reached</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              )}
              
              {/* Security Settings */}
              {activeTab === 'security' && (
                <div className="settings-panel">
                  <h2>Security Settings</h2>
                  
                  <div className="form-group">
                    <label className="form-label">Current Password</label>
                    <input 
                      type="password" 
                      className="form-input" 
                      placeholder="Enter current password"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">New Password</label>
                    <input 
                      type="password" 
                      className="form-input" 
                      placeholder="Enter new password"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Confirm New Password</label>
                    <input 
                      type="password" 
                      className="form-input" 
                      placeholder="Confirm new password"
                    />
                  </div>
                  
                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Two-Factor Authentication</h3>
                      <p>Require a security code in addition to your password</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  
                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Login Notifications</h3>
                      <p>Get notified when someone logs into your account</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  
                  <div className="security-cards">
                    <div className="security-card">
                      <div className="security-icon">🛡️</div>
                      <h3>Active Sessions</h3>
                      <p>3 active sessions</p>
                      <button className="security-btn">Manage</button>
                    </div>
                    
                    <div className="security-card">
                      <div className="security-icon">🗑️</div>
                      <h3>Delete Account</h3>
                      <p>Permanently delete account</p>
                      <button className="security-btn danger">Delete</button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Advanced Settings */}
              {activeTab === 'advanced' && (
                <div className="settings-panel">
                  <h2>Advanced Settings</h2>
                  
                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Data Saving Mode</h3>
                      <p>Reduce data usage by loading fewer images</p>
                    </div>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={dataSaving}
                        onChange={() => setDataSaving(!dataSaving)}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  
                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Auto Refresh</h3>
                      <p>Automatically refresh data every 5 minutes</p>
                    </div>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={autoRefresh}
                        onChange={() => setAutoRefresh(!autoRefresh)}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  
                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Default View</h3>
                      <p>Choose your default dashboard view</p>
                    </div>
                    <select className="compact-select">
                      <option value="standard">Standard View</option>
                      <option value="compact">Compact View</option>
                      <option value="detailed">Detailed View</option>
                    </select>
                  </div>
                  
                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>API Access</h3>
                      <p>Manage API access and tokens for integration</p>
                    </div>
                    <button className="action-btn">Manage</button>
                  </div>
                  
                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Export Data</h3>
                      <p>Export all your data in CSV or JSON format</p>
                    </div>
                    <div className="btn-group">
                      <button className="action-btn">CSV</button>
                      <button className="action-btn">JSON</button>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="settings-footer">
                <button className="save-settings-btn" onClick={saveSettings}>
                  Save Settings
                </button>
                {saveSuccess && (
                  <div className="settings-saved-message">
                    <span className="success-icon">✓</span>
                    Settings saved successfully!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
