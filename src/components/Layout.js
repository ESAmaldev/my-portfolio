import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';
import SideNav from './SideNav';

const Layout = () => {
  return (
    <div className="App">
      <TopNav />
      <SideNav />
      <div style={{ 
        paddingLeft: 'var(--spacing-xxl)', /* Adjusted for SideNav */
        paddingTop: '60px', /* Adjusted for TopNav */
        minHeight: '100vh',
        backgroundColor: 'var(--background-color)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'var(--spacing-lg)' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
