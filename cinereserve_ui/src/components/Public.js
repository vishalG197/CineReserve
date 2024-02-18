import React, { lazy, Suspense } from 'react';
import Loading from './Loading';

const Navbar = lazy(() => import('./Navbar'));
const Slideshow = lazy(() => import('./Slideshow'));
const Footer = lazy(() => import('./Footer'));

const Public = () => {
  return (
    <div className="container">
      <Suspense fallback={<Loading/>}>
        <div className="container">
          <Navbar />
        </div>
        <div className="container">
          <Slideshow />
        </div>
        <div className="container">
          <Footer />
        </div>
      </Suspense>
    </div>
  );
}

export default Public;
