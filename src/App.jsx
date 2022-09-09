import './App.css';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { isMobile } from 'react-device-detect';
import UploadOffer from './pages/upload-offer/uploadOffer';
import SignUpPage from './pages/sign-up/SignUpPage';
import HomePage from './pages/home-page/HomePage';
import LoginPage from './pages/login/LoginPage';
import Layout from './components/Layout/Layout';
import NotFound from './pages/not-found';
import AdditionalDetailsPage from './pages/additional-details';
import { PAGES } from './pages/consts';
import MobileMenu from './components/mobile-menu/MobileMenu';
import Dashboard from './pages/dashboard/Dashboard';
import { getTokenFromLocalStorage } from './user-manager';
import { updateLoginState } from './Store/store';
import MyOffers from './pages/myOffers/MyOffers';
import AboutUsPage from './pages/about-us/AboutUsPage';

function App() {
  const menuDisplayStatus = useSelector((state) => state.display.showMobileMenu);

  const dispatch = useDispatch();
  useEffect(() => {
    const token = getTokenFromLocalStorage();
    if (token) { dispatch(updateLoginState(token)); }
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <ToastContainer />
        {isMobile && <MobileMenu showMobileMenu={menuDisplayStatus} />}
        <Routes>
          <Route path="/" element={<Navigate to={PAGES.HOME} />} />
          <Route path={PAGES.HOME} element={<HomePage />} />
          <Route path={PAGES.SIGN_UP} element={<SignUpPage />} />
          <Route path={PAGES.LOGIN} element={<LoginPage />} />
          <Route path={PAGES.ADDITIONAL_DETAILS} element={<AdditionalDetailsPage />} />
          <Route path={PAGES.DASHBOARD} element={<Dashboard />} />
          <Route path={PAGES.MY_OFFERS} element={<MyOffers />} />
          <Route path={PAGES.UPLOAD_OFFER} element={<UploadOffer />} />
          <Route path={PAGES.ABOUT_US} element={<AboutUsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
