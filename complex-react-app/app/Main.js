import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import HomeGuest from './components/HomeGuest';
import Footer from './components/Footer';
import About from './components/About';
import Terms from './components/Terms';

function Main() {
  return (
    <>
      <Header />
      <HomeGuest />
      <Footer />
    </>
  )
}

ReactDOM.render(
  <Main />,
  document.querySelector('#app')
);

if (module.hot) {
  module.hot.accept();
}
