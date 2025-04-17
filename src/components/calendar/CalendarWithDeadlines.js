import React, { useState } from 'react';
import './CalendarWithDeadlines.css';

const CalendarWithDeadlines = () => {
  const [deadlines, setDeadlines] = useState([
    { date: '2025-04-20', task: 'Submit project report', priority: 'high' },
    { date: '2025-04-25', task: 'Team presentation', priority: 'medium' },
    { date: '2025-05-01', task: 'Quarterly budget review', priority: 'medium' },
    { date: '2025-05-05', task: 'Client meeting', priority: 'high' },
  ]);
  const [newDate, setNewDate] = useState('');
  const [newTask, setNewTask] = useState('');
  const [newPriority, setNewPriority] = useState('medium');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState('upcoming');

  const today = new Date().toISOString().split('T')[0];

  const handleAddDeadline = () => {
    if (newDate && newTask) {
      setDeadlines([...deadlines, { date: newDate, task: newTask, priority: newPriority }]);
      setNewDate('');
      setNewTask('');
      setNewPriority('medium');
      setIsModalOpen(false);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDeleteDeadline = (index) => {
    const updatedDeadlines = [...deadlines];
    updatedDeadlines.splice(index, 1);
    setDeadlines(updatedDeadlines);
  };

  // Sort deadlines by date
  const sortedDeadlines = [...deadlines].sort((a, b) => new Date(a.date) - new Date(b.date));

  // Filter deadlines based on current view
  const filteredDeadlines = sortedDeadlines.filter(deadline => {
    const deadlineDate = new Date(deadline.date);
    const todayDate = new Date(today);
    
    if (currentView === 'upcoming') {
      return deadlineDate >= todayDate;
    } else if (currentView === 'past') {
      return deadlineDate < todayDate;
    } else if (currentView === 'all') {
      return true;
    } else if (currentView === 'high-priority') {
      return deadline.priority === 'high';
    }
    return true;
  });

  // Calculate days remaining for each deadline
  const getTimeRemaining = (deadlineDate) => {
    const date1 = new Date(today);
    const date2 = new Date(deadlineDate);
    const diffTime = date2 - date1;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
      return `${Math.abs(diffDays)} days overdue`;
    } else if (diffDays === 0) {
      return 'Today';
    } else if (diffDays === 1) {
      return 'Tomorrow';
    } else {
      return `${diffDays} days remaining`;
    }
  };

  return (
    <div className="calendar-container-modern">
      <div className="calendar-header-modern">
        <div className="view-options">
          <button 
            className={`view-btn ${currentView === 'upcoming' ? 'active' : ''}`}
            onClick={() => setCurrentView('upcoming')}
          >
            Upcoming
          </button>
          <button 
            className={`view-btn ${currentView === 'past' ? 'active' : ''}`}
            onClick={() => setCurrentView('past')}
          >
            Past
          </button>
          <button 
            className={`view-btn ${currentView === 'high-priority' ? 'active' : ''}`}
            onClick={() => setCurrentView('high-priority')}
          >
            High Priority
          </button>
          <button 
            className={`view-btn ${currentView === 'all' ? 'active' : ''}`}
            onClick={() => setCurrentView('all')}
          >
            All
          </button>
        </div>
        <button className="add-event-btn-modern" onClick={toggleModal}>
          <span className="btn-icon">+</span>
          <span className="btn-text">Add Event</span>
        </button>
      </div>

      <div className="events-container">
        {filteredDeadlines.length === 0 ? (
          <div className="no-events-message">
            <div className="no-events-icon">📅</div>
            <p>No events to display for this view.</p>
          </div>
        ) : (
          filteredDeadlines.map((deadline, index) => (
            <div 
              key={index} 
              className={`event-card ${deadline.date === today ? 'today' : ''} priority-${deadline.priority}`}
            >
              <div className="event-date">
                <div className="date-number">{new Date(deadline.date).getDate()}</div>
                <div className="date-month">{new Date(deadline.date).toLocaleString('default', { month: 'short' })}</div>
              </div>
              <div className="event-details">
                <h3 className="event-title">{deadline.task}</h3>
                <div className="event-meta">
                  <span className="event-priority">
                    {deadline.priority === 'high' ? '🔴 High' : deadline.priority === 'medium' ? '🟠 Medium' : '🟢 Low'}
                  </span>
                  <span className="event-time-remaining">
                    {getTimeRemaining(deadline.date)}
                  </span>
                </div>
              </div>
              <button 
                className="delete-event-btn"
                onClick={() => handleDeleteDeadline(index)}
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Add New Event</h3>
              <button className="close-modal-btn" onClick={toggleModal}>×</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">Event Date</label>
                <input
                  type="date"
                  className="form-input"
                  value={newDate}
                  min={today}
                  onChange={(e) => setNewDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Event Title</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter event title"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Priority</label>
                <select 
                  className="form-select"
                  value={newPriority}
                  onChange={(e) => setNewPriority(e.target.value)}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button className="cancel-btn" onClick={toggleModal}>Cancel</button>
              <button className="add-btn" onClick={handleAddDeadline}>Add Event</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarWithDeadlines;
