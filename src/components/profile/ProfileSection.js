import React, { useState } from 'react';
import './ProfileSection.css';

const ProfileSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Admin');
  const [profilePic, setProfilePic] = useState(null);
  const [message, setMessage] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [creatingProfile, setCreatingProfile] = useState(false);

  const handlePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file)); // Dynamically load image from file input
    }
  };

  const handleSave = () => {
    // Simulate saving data (could be an API call or database update)
    setMessage('Profile updated successfully!');
    setTimeout(() => setMessage(''), 3000); // Hide the message after 3 seconds

    // Simulate storing the profile picture URL
    if (profilePic) {
      console.log("Profile picture saved:", profilePic);
      // Here you would send the image URL or data to your server or database
    }
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionSelect = (option) => {
    if (option === 'create') {
      setCreatingProfile(true);
      setName('');
      setEmail('');
      setRole('Admin');
      setProfilePic(null);
    } else if (option === 'update') {
      setCreatingProfile(false);
    }
    setShowOptions(false);
  };

  return (
    <div className="modern-profile-section">
      {showOptions && (
        <div className="profile-options-overlay">
          <div className="profile-options">
            <div className="options-header">
              <h3>Profile Options</h3>
              <button className="close-options" onClick={toggleOptions}>×</button>
            </div>
            <button className="option-btn create" onClick={() => handleOptionSelect('create')}>
              <span className="option-icon">➕</span>
              Create New Profile
            </button>
            <button className="option-btn update" onClick={() => handleOptionSelect('update')}>
              <span className="option-icon">✏️</span>
              Update Existing Profile
            </button>
          </div>
        </div>
      )}

      <div className="profile-header-modern">
        <div className="profile-avatar-section">
          <div className="profile-avatar">
            {profilePic ? (
              <img src={profilePic} alt="User Avatar" />
            ) : (
              <div className="avatar-placeholder">
                {name ? name.charAt(0).toUpperCase() : '?'}
              </div>
            )}
            <div className="avatar-upload-overlay">
              <label htmlFor="profile-upload" className="upload-label">
                <span className="upload-icon">📷</span>
              </label>
              <input 
                type="file" 
                id="profile-upload" 
                className="hidden-upload" 
                accept="image/*" 
                onChange={handlePicChange} 
              />
            </div>
          </div>
          
          <div className="profile-actions">
            <button className="settings-btn" onClick={toggleOptions}>
              <span className="settings-icon">⚙️</span>
            </button>
          </div>
        </div>

        <h2 className="profile-title">{creatingProfile ? 'Create User Profile' : 'User Profile'}</h2>
      </div>

      <div className="profile-form">
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <div className="input-wrapper">
            <span className="input-icon">👤</span>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Enter your name"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <div className="input-wrapper">
            <span className="input-icon">✉️</span>
            <input 
              type="email" 
              className="form-input" 
              placeholder="Enter your email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Role</label>
          <div className="input-wrapper">
            <span className="input-icon">🔑</span>
            <select 
              className="form-select" 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Admin">Administrator</option>
              <option value="HR">HR Manager</option>
              <option value="Employee">Employee</option>
              <option value="Finance">Finance Officer</option>
            </select>
          </div>
        </div>

        <div className="form-footer">
          <button className="save-btn" onClick={handleSave}>
            <span className="save-icon">💾</span>
            <span>Save Profile</span>
          </button>
          
          {message && (
            <div className="message-toast success">
              <span className="message-icon">✅</span>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
