import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import CarouselComponent from './components/CarouselComponent';
import ArticlesComponent from './components/ArticlesComponent';
import FooterComponent from './components/FooterComponent';

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <CarouselComponent />
      <ArticlesComponent />
      <FooterComponent />
    </div>
  );
};

export default App;
