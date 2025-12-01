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
        paddingLeft: '10rem', /* Adjusted for SideNav */
        paddingTop: '3.75rem', /* Adjusted for TopNav */
        minHeight: '100vh',
        backgroundColor: 'var(--background-color)'
      }}>
        <div style={{  margin: '0 auto', padding: 'var(--spacing-lg)' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
