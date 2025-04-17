import React, { useState } from 'react';

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, date: '2025-04-05', category: 'Travel', amount: 435.20, status: 'Approved' },
    { id: 2, date: '2025-04-10', category: 'Office Supplies', amount: 125.65, status: 'Pending' },
    { id: 3, date: '2025-04-12', category: 'Client Meeting', amount: 89.50, status: 'Approved' },
    { id: 4, date: '2025-04-15', category: 'Equipment', amount: 2450.00, status: 'Rejected' },
    { id: 5, date: '2025-04-17', category: 'Software', amount: 299.99, status: 'Pending' },
  ]);

  const [filter, setFilter] = useState('all');
  
  // Filter expenses based on status
  const filteredExpenses = filter === 'all' 
    ? expenses 
    : expenses.filter(expense => expense.status.toLowerCase() === filter);

  // Calculate totals
  const totalExpenses = expenses.reduce((acc, exp) => acc + exp.amount, 0).toFixed(2);
  const approvedExpenses = expenses
    .filter(exp => exp.status === 'Approved')
    .reduce((acc, exp) => acc + exp.amount, 0)
    .toFixed(2);
  const pendingExpenses = expenses
    .filter(exp => exp.status === 'Pending')
    .reduce((acc, exp) => acc + exp.amount, 0)
    .toFixed(2);

  return (
    <>
      <div className="page-header">
        <h1>Expense Management</h1>
        <p className="page-description">Track and manage your expense reports</p>
      </div>
      
      <div className="expenses-page-content">
        {/* Summary Stats */}
        <div className="stats-cards">
          <div className="stat-card">
            <div className="stat-icon">💵</div>
            <div className="stat-info">
              <h3>Total Expenses</h3>
              <p className="stat-value">${totalExpenses}</p>
              <p className="stat-change neutral">Current Period</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'var(--gradient-secondary)' }}>✅</div>
            <div className="stat-info">
              <h3>Approved Expenses</h3>
              <p className="stat-value">${approvedExpenses}</p>
              <p className="stat-change positive">Approved and Processed</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #ff9800, #ff5722)' }}>⌛</div>
            <div className="stat-info">
              <h3>Pending Approval</h3>
              <p className="stat-value">${pendingExpenses}</p>
              <p className="stat-change negative">Awaiting Review</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #4caf50, #8bc34a)' }}>📊</div>
            <div className="stat-info">
              <h3>Budget Utilization</h3>
              <p className="stat-value">65%</p>
              <p className="stat-change positive">35% Remaining</p>
            </div>
          </div>
        </div>
        
        {/* Expense Management Section */}
        <div className="dashboard-card full-width-card">
          <div className="card-header expense-card-header">
            <h2>Expense Entries</h2>
            <div className="expense-filters">
              <button 
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={`filter-btn ${filter === 'approved' ? 'active' : ''}`} 
                onClick={() => setFilter('approved')}
              >
                Approved
              </button>
              <button 
                className={`filter-btn ${filter === 'pending' ? 'active' : ''}`} 
                onClick={() => setFilter('pending')}
              >
                Pending
              </button>
              <button 
                className={`filter-btn ${filter === 'rejected' ? 'active' : ''}`} 
                onClick={() => setFilter('rejected')}
              >
                Rejected
              </button>
            </div>
            <button className="action-btn add-expense-btn">
              <span className="btn-icon">+</span>
              New Expense
            </button>
          </div>
          <div className="card-body">
            <div className="expense-table-container">
              <table className="expense-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredExpenses.map(expense => (
                    <tr key={expense.id} className={`status-${expense.status.toLowerCase()}`}>
                      <td>#{expense.id}</td>
                      <td>{expense.date}</td>
                      <td>{expense.category}</td>
                      <td className="amount">${expense.amount.toFixed(2)}</td>
                      <td>
                        <span className={`status-badge ${expense.status.toLowerCase()}`}>
                          {expense.status}
                        </span>
                      </td>
                      <td className="actions">
                        <button className="icon-action-btn" title="View Details">👁️</button>
                        <button className="icon-action-btn" title="Edit">✏️</button>
                        <button className="icon-action-btn" title="Delete">🗑️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredExpenses.length === 0 && (
              <div className="no-data-message">
                <div className="no-data-icon">💼</div>
                <p>No expenses found with the selected filter.</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Two-Column Section */}
        <div className="dashboard-sections two-column-layout">
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Expense Categories</h2>
              <button className="card-action">⋮</button>
            </div>
            <div className="card-body">
              <div className="category-chart">
                <div className="chart-placeholder">
                  {/* In a real app, you'd use a chart library here */}
                  <div className="pie-chart">
                    <div className="pie-segment travel" style={{ '--percentage': '45%', '--color': '#4361ee' }}></div>
                    <div className="pie-segment supplies" style={{ '--percentage': '25%', '--color': '#3a0ca3' }}></div>
                    <div className="pie-segment meetings" style={{ '--percentage': '15%', '--color': '#7209b7' }}></div>
                    <div className="pie-segment other" style={{ '--percentage': '15%', '--color': '#f72585' }}></div>
                  </div>
                </div>
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: '#4361ee' }}></span>
                    <span className="legend-label">Travel (45%)</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: '#3a0ca3' }}></span>
                    <span className="legend-label">Office Supplies (25%)</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: '#7209b7' }}></span>
                    <span className="legend-label">Client Meetings (15%)</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: '#f72585' }}></span>
                    <span className="legend-label">Other (15%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Recent Activity</h2>
              <button className="card-action">⋮</button>
            </div>
            <div className="card-body">
              <div className="activity-timeline">
                <div className="timeline-item">
                  <div className="timeline-icon approved">✓</div>
                  <div className="timeline-content">
                    <h3>Expense Approved</h3>
                    <p>Travel expenses for client meeting approved by Finance.</p>
                    <span className="timeline-time">2 hours ago</span>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-icon pending">⌛</div>
                  <div className="timeline-content">
                    <h3>New Expense Submitted</h3>
                    <p>Software subscription expense submitted for approval.</p>
                    <span className="timeline-time">5 hours ago</span>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-icon rejected">✕</div>
                  <div className="timeline-content">
                    <h3>Expense Rejected</h3>
                    <p>Equipment purchase rejected. Reason: Exceeds department budget.</p>
                    <span className="timeline-time">Yesterday</span>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-icon approved">✓</div>
                  <div className="timeline-content">
                    <h3>Monthly Report Generated</h3>
                    <p>April expense report has been generated and sent to managers.</p>
                    <span className="timeline-time">2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpensesPage;
