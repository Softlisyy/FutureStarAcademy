# Admin Panel Documentation

## Overview
This is a comprehensive admin panel for Future Stars Academy with a collapsible sidebar navigation system.

## Features

### 1. **Admin Sidebar** (`AdminSidebar.jsx`)
- **Collapsible Design**: Click the toggle button to collapse/expand the sidebar
- **Navigation Menu** with the following sections:
  - Dashboard
  - Students (All Students, Add Student, Attendance)
  - Teachers (All Teachers, Add Teacher)
  - Classes (All Classes, Add Class, Schedule)
  - Admissions (Applications, Approved, Pending)
  - Finance (Fee Collection, Expenses, Reports)
  - Events (All Events, Add Event)
  - Gallery (All Images, Upload)
  - Messages
  - Settings (Profile, School Info, Users)

### 2. **Admin Layout** (`AdminLayout.jsx`)
- Wraps all admin pages with the sidebar
- Responsive design that adapts to different screen sizes
- Automatic margin adjustment when sidebar is collapsed

### 3. **Admin Dashboard** (`AdminDashboard.jsx`)
- **Statistics Cards**: Shows total students, teachers, classes, and revenue
- **Recent Students Table**: Lists the latest student enrollments
- **Upcoming Events**: Displays scheduled school events
- **Quick Actions**: Fast access to common administrative tasks

## How to Access

Navigate to: `http://localhost:5173/admin` or `http://localhost:5173/admin/dashboard`

## File Structure

```
src/admin/
├── AdminSidebar.jsx          # Main navigation sidebar component
├── AdminSidebar.css          # Sidebar styling
├── AdminLayout.jsx           # Layout wrapper for admin pages
├── AdminLayout.css           # Layout and common admin styles
├── AdminDashboard.jsx        # Dashboard page with stats and data
├── AdminDashboard.css        # Dashboard specific styles
└── README.md                 # This documentation file
```

## Customization

### Adding New Menu Items
Edit `AdminSidebar.jsx` and add to the `menuItems` array:

```javascript
{
  title: 'Your Menu',
  icon: '🎯',
  path: '/admin/your-path',
  subItems: [
    { title: 'Sub Item', path: '/admin/your-path/sub' }
  ]
}
```

### Creating New Admin Pages
1. Create a new component in `src/admin/`
2. Wrap it with `<AdminLayout>`
3. Add the route in `App.jsx`

Example:
```javascript
import AdminLayout from './AdminLayout';

const YourAdminPage = () => {
  return (
    <AdminLayout>
      <div className="page-header">
        <h1>Your Page Title</h1>
      </div>
      {/* Your content here */}
    </AdminLayout>
  );
};
```

### Styling
- The sidebar uses a blue gradient background
- Primary color: `#3b82f6` (Blue)
- All styles are fully responsive
- Hover effects and smooth transitions included

## Responsive Design
- **Desktop**: Full sidebar with text
- **Collapsed**: Icon-only sidebar
- **Mobile**: Full-width collapsible sidebar

## Future Enhancements
To fully implement this admin panel, you'll need to:
1. Create individual page components for each menu item
2. Add authentication/login system
3. Connect to a backend API for real data
4. Implement CRUD operations for students, teachers, etc.
5. Add form validation and error handling
6. Implement user permissions and roles

## Notes
- The sidebar persists its state across navigation
- All icons are emoji-based (can be replaced with icon libraries)
- The layout is fully CSS Grid and Flexbox based
- Mobile-responsive with breakpoints at 768px and 480px
