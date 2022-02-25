import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header"
import Footer from './components/Footer';
import "./assets/css/styles.css"
import "./assets/css/normalize.css"
import SideBar from "./components/SideBar"

ReactDOM.render(
  <>
    <Header />
    <SideBar />
    <Footer />
  </>,
  document.getElementById('root')
);
