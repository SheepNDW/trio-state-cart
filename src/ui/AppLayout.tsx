import { Outlet } from 'react-router-dom';
import Header from '~/ui/Header';
import Footer from '~/ui/Footer';

function AppLayout() {
  return (
    <div className="flex h-dvh flex-col">
      <Header />
      <main className="container mx-auto mt-4 flex-grow px-4 sm:px-6 lg:mt-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
