import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import SignUpPage from './pages/sign-up/SignUpPage';
import HomePage from './pages/home-page/HomePage';
import LoginPage from './pages/login/LoginPage';
import Layout from './components/Layout/Layout';
import NotFound from './pages/not-found';
import AdditionalDetailsPage from './pages/additional-details';
import { PAGES } from './pages/consts';
import MobileMenu from './components/mobile-menu/MobileMenu';

function App() {
  const menuDisplayStatus = useSelector((state) => state.display.showMobileMenu);

  return (
    <BrowserRouter>
      <Layout>
        <ToastContainer />
        {menuDisplayStatus && <MobileMenu />}
        <Routes>
          <Route path="/" element={<Navigate to={PAGES.HOME} />} />
          <Route path={PAGES.HOME} element={<HomePage />} />
          <Route path={PAGES.SIGN_UP} element={<SignUpPage />} />
          <Route path={PAGES.LOGIN} element={<LoginPage />} />
          <Route path={PAGES.ADDITIONAL_DETAILS} element={<AdditionalDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
