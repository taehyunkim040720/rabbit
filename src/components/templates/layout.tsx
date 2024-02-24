import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

function Layout() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default Layout;
