import { Outlet } from 'react-router-dom';
import { Footer, Header } from '.';

function Layout() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col justify-between">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default Layout;
