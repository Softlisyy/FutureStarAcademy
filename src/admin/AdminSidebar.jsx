import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AdminSidebar.css';

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    {
      title: 'Dashboard',
      icon: '📊',
      path: '/admin/dashboard',
      subItems: []
    },
    {
      title: 'Students',
      icon: '👨‍🎓',
      path: '/admin/students',
      subItems: [
        { title: 'All Students', path: '/admin/students/all' },
        { title: 'Add Student', path: '/admin/students/add' },
        { title: 'Attendance', path: '/admin/students/attendance' }
      ]
    },
    {
      title: 'Teachers',
      icon: '👨‍🏫',
      path: '/admin/teachers',
      subItems: [
        { title: 'All Teachers', path: '/admin/teachers/all' },
        { title: 'Add Teacher', path: '/admin/teachers/add' }
      ]
    },
    {
      title: 'Classes',
      icon: '📚',
      path: '/admin/classes',
      subItems: [
        { title: 'All Classes', path: '/admin/classes/all' },
        { title: 'Add Class', path: '/admin/classes/add' },
        { title: 'Schedule', path: '/admin/classes/schedule' }
      ]
    },
    {
      title: 'Admissions',
      icon: '📝',
      path: '/admin/admissions',
      subItems: [
        { title: 'Applications', path: '/admin/admissions/applications' },
        { title: 'Approved', path: '/admin/admissions/approved' },
        { title: 'Pending', path: '/admin/admissions/pending' }
      ]
    },
    {
      title: 'Finance',
      icon: '💰',
      path: '/admin/finance',
      subItems: [
        { title: 'Fee Collection', path: '/admin/finance/fees' },
        { title: 'Expenses', path: '/admin/finance/expenses' },
        { title: 'Reports', path: '/admin/finance/reports' }
      ]
    },
    {
      title: 'Events',
      icon: '📅',
      path: '/admin/events',
      subItems: [
        { title: 'All Events', path: '/admin/events/all' },
        { title: 'Add Event', path: '/admin/events/add' }
      ]
    },
    {
      title: 'Gallery',
      icon: '🖼️',
      path: '/admin/gallery',
      subItems: [
        { title: 'All Images', path: '/admin/gallery/all' },
        { title: 'Upload', path: '/admin/gallery/upload' }
      ]
    },
    {
      title: 'Messages',
      icon: '💬',
      path: '/admin/messages',
      subItems: []
    },
    {
      title: 'Settings',
      icon: '⚙️',
      path: '/admin/settings',
      subItems: [
        { title: 'Profile', path: '/admin/settings/profile' },
        { title: 'School Info', path: '/admin/settings/school' },
        { title: 'Users', path: '/admin/settings/users' }
      ]
    }
  ];

  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleSubmenu = (index) => {
    setExpandedMenus(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div className={`admin-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          {!isCollapsed && (
            <>
              <img src="/picture/logo.png" alt="FSA Logo" className="sidebar-logo-img" />
              <h2>FSA Admin</h2>
            </>
          )}
          {isCollapsed && <span className="logo-icon">📚</span>}
        </div>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isCollapsed ? '▶' : '◀'}
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="sidebar-menu-item">
              <div
                className={`menu-item-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => item.subItems.length > 0 && toggleSubmenu(index)}
              >
                <Link to={item.path} className="menu-link">
                  <span className="menu-icon">{item.icon}</span>
                  {!isCollapsed && <span className="menu-title">{item.title}</span>}
                </Link>
                {!isCollapsed && item.subItems.length > 0 && (
                  <span className={`submenu-arrow ${expandedMenus[index] ? 'expanded' : ''}`}>
                    ▼
                  </span>
                )}
              </div>

              {item.subItems.length > 0 && expandedMenus[index] && !isCollapsed && (
                <ul className="submenu">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.path}
                        className={`submenu-link ${isActive(subItem.path) ? 'active' : ''}`}
                      >
                        <span className="submenu-bullet">•</span>
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <Link to="/admin/logout" className="logout-btn">
          <span className="menu-icon">🚪</span>
          {!isCollapsed && <span>Logout</span>}
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
