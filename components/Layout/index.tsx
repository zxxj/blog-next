import { NextPage } from 'next';
import NavBar from 'components/Navbar';
import Footer from 'components/Footer';

const Layout: NextPage = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
