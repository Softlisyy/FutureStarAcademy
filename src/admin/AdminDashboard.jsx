import React from 'react';
import AdminLayout from './AdminLayout';
import './AdminDashboard.css';

const AdminDashboard = () => {
  // Sample data
  const stats = [
    {
      title: 'Total Students',
      value: '1,245',
      icon: '👨‍🎓',
      color: 'blue',
      trend: '+12%'
    },
    {
      title: 'Total Teachers',
      value: '87',
      icon: '👨‍🏫',
      color: 'green',
      trend: '+5%'
    },
    {
      title: 'Total Classes',
      value: '45',
      icon: '📚',
      color: 'purple',
      trend: '+3%'
    },
    {
      title: 'Revenue',
      value: '$125K',
      icon: '💰',
      color: 'orange',
      trend: '+18%'
    }
  ];

  const recentStudents = [
    { id: 1, name: 'John Doe', class: 'Grade 10', status: 'Active', date: '2025-10-15' },
    { id: 2, name: 'Jane Smith', class: 'Grade 9', status: 'Active', date: '2025-10-14' },
    { id: 3, name: 'Mike Johnson', class: 'Grade 11', status: 'Active', date: '2025-10-13' },
    { id: 4, name: 'Sarah Williams', class: 'Grade 8', status: 'Pending', date: '2025-10-12' },
    { id: 5, name: 'Tom Brown', class: 'Grade 12', status: 'Active', date: '2025-10-11' }
  ];

  const upcomingEvents = [
    { id: 1, title: 'Parent-Teacher Meeting', date: '2025-10-25', time: '10:00 AM' },
    { id: 2, title: 'Sports Day', date: '2025-10-28', time: '9:00 AM' },
    { id: 3, title: 'Science Fair', date: '2025-11-02', time: '2:00 PM' },
    { id: 4, title: 'Annual Day', date: '2025-11-15', time: '6:00 PM' }
  ];

  return (
    <AdminLayout>
      <div className="admin-dashboard">
        <div className="page-header">
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className={`stat-icon ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="stat-details">
                <h3>{stat.value}</h3>
                <p>{stat.title}</p>
                <span className="stat-trend">{stat.trend} from last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts and Data Grid */}
        <div className="dashboard-grid">
          {/* Recent Students */}
          <div className="content-card">
            <div className="card-header">
              <h2>Recent Students</h2>
              <button className="btn btn-primary btn-sm">View All</button>
            </div>
            <div className="table-responsive">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentStudents.map((student) => (
                    <tr key={student.id}>
                      <td>{student.name}</td>
                      <td>{student.class}</td>
                      <td>
                        <span className={`status-badge ${student.status.toLowerCase()}`}>
                          {student.status}
                        </span>
                      </td>
                      <td>{student.date}</td>
                      <td>
                        <button className="btn-icon" title="View">👁️</button>
                        <button className="btn-icon" title="Edit">✏️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="content-card events-card">
            <div className="card-header">
              <h2>Upcoming Events</h2>
              <button className="btn btn-primary btn-sm">Add Event</button>
            </div>
            <div className="events-list">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="event-item">
                  <div className="event-icon">📅</div>
                  <div className="event-details">
                    <h4>{event.title}</h4>
                    <p>{event.date} at {event.time}</p>
                  </div>
                  <button className="event-action">→</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="content-card">
          <h2>Quick Actions</h2>
          <div className="quick-actions">
            <button className="action-btn">
              <span className="action-icon">➕</span>
              <span>Add Student</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">👨‍🏫</span>
              <span>Add Teacher</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">📚</span>
              <span>Create Class</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">📅</span>
              <span>Schedule Event</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">💰</span>
              <span>Collect Fee</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">📊</span>
              <span>Generate Report</span>
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
