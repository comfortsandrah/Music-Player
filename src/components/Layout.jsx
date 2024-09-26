import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Top navigation bar */}
      <NavBar />

      {/* Main content with sidebar and outlet */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <SideBar />

        {/* Page content */}
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout