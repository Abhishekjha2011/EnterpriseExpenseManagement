import React, { useState } from 'react';

const ReportsPage = () => {
  const [reportType, setReportType] = useState('expense');
  const [timeRange, setTimeRange] = useState('month');
  const [loading, setLoading] = useState(false);

  const generateReport = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <div className="page-header">
        <h1>Reports & Analytics</h1>
        <p className="page-description">Generate and analyze financial reports</p>
      </div>
      
      <div className="reports-page-content">
        {/* Report Generation Card */}
        <div className="dashboard-card full-width-card">
          <div className="card-header">
            <h2>Generate Reports</h2>
            <button className="card-action">⋮</button>
          </div>
          <div className="card-body">
            <div className="report-generator">
              <div className="report-options">
                <div className="form-group">
                  <label className="form-label">Report Type</label>
                  <select 
                    className="form-select" 
                    value={reportType} 
                    onChange={(e) => setReportType(e.target.value)}
                  >
                    <option value="expense">Expense Summary</option>
                    <option value="budget">Budget Utilization</option>
                    <option value="department">Department Spending</option>
                    <option value="employee">Employee Expenses</option>
                    <option value="tax">Tax Report</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Time Range</label>
                  <select 
                    className="form-select" 
                    value={timeRange} 
                    onChange={(e) => setTimeRange(e.target.value)}
                  >
                    <option value="week">Past Week</option>
                    <option value="month">Past Month</option>
                    <option value="quarter">Past Quarter</option>
                    <option value="year">Past Year</option>
                    <option value="custom">Custom Range</option>
                  </select>
                </div>
                
                {timeRange === 'custom' && (
                  <div className="date-range-selector">
                    <div className="form-group">
                      <label className="form-label">Start Date</label>
                      <input type="date" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">End Date</label>
                      <input type="date" className="form-input" />
                    </div>
                  </div>
                )}
                
                <div className="report-actions">
                  <button 
                    className="generate-btn" 
                    onClick={generateReport}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="btn-icon spinning">⟳</span>
                        Generating...
                      </>
                    ) : (
                      <>
                        <span className="btn-icon">📊</span>
                        Generate Report
                      </>
                    )}
                  </button>
                  
                  <div className="export-options">
                    <button className="export-btn">
                      <span className="btn-icon">📄</span>
                      PDF
                    </button>
                    <button className="export-btn">
                      <span className="btn-icon">📊</span>
                      Excel
                    </button>
                    <button className="export-btn">
                      <span className="btn-icon">📋</span>
                      CSV
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Data Visualization Section */}
        <div className="dashboard-sections">
          <div className="dashboard-card full-width-card">
            <div className="card-header">
              <h2>Expense Trends</h2>
              <div className="time-selector">
                <button className="time-btn active">Week</button>
                <button className="time-btn">Month</button>
                <button className="time-btn">Quarter</button>
                <button className="time-btn">Year</button>
              </div>
            </div>
            <div className="card-body">
              <div className="chart-container">
                {/* Bar Chart Placeholder (in real app, use chart library) */}
                <div className="bar-chart-placeholder">
                  <div className="bar-container">
                    <div className="bar-group">
                      <div className="bar" style={{ height: '60%', backgroundColor: 'var(--primary-color)' }}></div>
                      <div className="bar" style={{ height: '40%', backgroundColor: 'var(--secondary-color)' }}></div>
                      <div className="bar-label">Mon</div>
                    </div>
                    <div className="bar-group">
                      <div className="bar" style={{ height: '75%', backgroundColor: 'var(--primary-color)' }}></div>
                      <div className="bar" style={{ height: '35%', backgroundColor: 'var(--secondary-color)' }}></div>
                      <div className="bar-label">Tue</div>
                    </div>
                    <div className="bar-group">
                      <div className="bar" style={{ height: '45%', backgroundColor: 'var(--primary-color)' }}></div>
                      <div className="bar" style={{ height: '60%', backgroundColor: 'var(--secondary-color)' }}></div>
                      <div className="bar-label">Wed</div>
                    </div>
                    <div className="bar-group">
                      <div className="bar" style={{ height: '85%', backgroundColor: 'var(--primary-color)' }}></div>
                      <div className="bar" style={{ height: '25%', backgroundColor: 'var(--secondary-color)' }}></div>
                      <div className="bar-label">Thu</div>
                    </div>
                    <div className="bar-group">
                      <div className="bar" style={{ height: '55%', backgroundColor: 'var(--primary-color)' }}></div>
                      <div className="bar" style={{ height: '40%', backgroundColor: 'var(--secondary-color)' }}></div>
                      <div className="bar-label">Fri</div>
                    </div>
                    <div className="bar-group">
                      <div className="bar" style={{ height: '35%', backgroundColor: 'var(--primary-color)' }}></div>
                      <div className="bar" style={{ height: '20%', backgroundColor: 'var(--secondary-color)' }}></div>
                      <div className="bar-label">Sat</div>
                    </div>
                    <div className="bar-group">
                      <div className="bar" style={{ height: '25%', backgroundColor: 'var(--primary-color)' }}></div>
                      <div className="bar" style={{ height: '15%', backgroundColor: 'var(--secondary-color)' }}></div>
                      <div className="bar-label">Sun</div>
                    </div>
                  </div>
                </div>
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                    <span className="legend-label">Approved Expenses</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: 'var(--secondary-color)' }}></span>
                    <span className="legend-label">Pending Expenses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Three Column Layout */}
        <div className="dashboard-sections three-column-layout">
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Top Spenders</h2>
            </div>
            <div className="card-body">
              <div className="ranking-list">
                <div className="ranking-item">
                  <div className="rank">1</div>
                  <div className="rank-info">
                    <h3>Marketing Department</h3>
                    <p>$15,420</p>
                  </div>
                </div>
                <div className="ranking-item">
                  <div className="rank">2</div>
                  <div className="rank-info">
                    <h3>Sales Team</h3>
                    <p>$12,340</p>
                  </div>
                </div>
                <div className="ranking-item">
                  <div className="rank">3</div>
                  <div className="rank-info">
                    <h3>IT Department</h3>
                    <p>$9,870</p>
                  </div>
                </div>
                <div className="ranking-item">
                  <div className="rank">4</div>
                  <div className="rank-info">
                    <h3>HR Department</h3>
                    <p>$6,540</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Expense Categories</h2>
            </div>
            <div className="card-body">
              <div className="doughnut-chart-placeholder">
                <div className="doughnut-chart">
                  <div className="doughnut-segment" style={{ 
                    '--percentage': '35%', 
                    '--color': 'var(--primary-color)',
                    '--rotate': '0deg'
                  }}></div>
                  <div className="doughnut-segment" style={{ 
                    '--percentage': '25%', 
                    '--color': 'var(--secondary-color)',
                    '--rotate': '126deg'
                  }}></div>
                  <div className="doughnut-segment" style={{ 
                    '--percentage': '20%', 
                    '--color': '#4caf50',
                    '--rotate': '216deg'
                  }}></div>
                  <div className="doughnut-segment" style={{ 
                    '--percentage': '20%', 
                    '--color': '#ff9800',
                    '--rotate': '288deg'
                  }}></div>
                </div>
                <div className="doughnut-center">$24,521</div>
              </div>
              <div className="chart-legend">
                <div className="legend-item">
                  <span className="legend-color" style={{ backgroundColor: 'var(--primary-color)' }}></span>
                  <span className="legend-label">Travel (35%)</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color" style={{ backgroundColor: 'var(--secondary-color)' }}></span>
                  <span className="legend-label">Office (25%)</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color" style={{ backgroundColor: '#4caf50' }}></span>
                  <span className="legend-label">Meetings (20%)</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color" style={{ backgroundColor: '#ff9800' }}></span>
                  <span className="legend-label">Other (20%)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Budget Status</h2>
            </div>
            <div className="card-body">
              <div className="progress-metrics">
                <div className="progress-item">
                  <div className="progress-info">
                    <h3>Marketing</h3>
                    <p>75% used</p>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: '75%', backgroundColor: '#4361ee' }}></div>
                  </div>
                </div>
                
                <div className="progress-item">
                  <div className="progress-info">
                    <h3>Sales</h3>
                    <p>60% used</p>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: '60%', backgroundColor: '#3a0ca3' }}></div>
                  </div>
                </div>
                
                <div className="progress-item">
                  <div className="progress-info">
                    <h3>IT</h3>
                    <p>45% used</p>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: '45%', backgroundColor: '#7209b7' }}></div>
                  </div>
                </div>
                
                <div className="progress-item">
                  <div className="progress-info">
                    <h3>HR</h3>
                    <p>30% used</p>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: '30%', backgroundColor: '#f72585' }}></div>
                  </div>
                </div>
                
                <div className="progress-item">
                  <div className="progress-info">
                    <h3>Operations</h3>
                    <p>85% used</p>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: '85%', backgroundColor: '#ff9800' }}></div>
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

export default ReportsPage;
