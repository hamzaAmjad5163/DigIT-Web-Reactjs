import React from 'react';
import Routers from '../../routers/Routers';
import Header from '../Header/Header';
import Footer from '../../../src/components/Ui/Footer';

const Layout = () => {
  return (
    <>
    <Header />
        <div>
            <Routers />
        </div>
    <Footer />
    </>
  )
}

export default Layout;
