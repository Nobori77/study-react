import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>헤더</header>
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;