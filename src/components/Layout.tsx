import { Outlet } from 'react-router-dom';
import { Nav } from './layout/Nav';
import { Footer } from './layout/Footer';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
