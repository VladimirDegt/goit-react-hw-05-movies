import Navbar from 'components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export function Layout() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
