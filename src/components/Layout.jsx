import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

export default function Layout() {
  return (
    <>
          <Header />
          <Suspense>
              <Outlet/>
          </Suspense>
    </>
  );
}
