import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { isMobile } from 'react-device-detect';
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
import { MobileDropdownMenu } from './components/Dropdown/MobileDropdownMenu';
import UploadOffer from './pages/upload-offer/uploadOffer';

function App() {
  const menuDisplayStatus = useSelector((state) => state.display.showMobileMenu);
  const mobileSortMenuDisplayStatus = useSelector((state) => state.display.showMobileSortDropdown);

  const dispatch = useDispatch();
  useEffect(() => {
    const token = getTokenFromLocalStorage();
    if (token) { dispatch(updateLoginState(token)); }
  }, []);

  const [chosen, setChosen] = useState('Nearest First');
  const sortingOptions = ['Nearest First', 'Newest First'];

  return (
    <BrowserRouter>
      <Layout>
        <ToastContainer />
        {isMobile && <MobileMenu showMobileMenu={menuDisplayStatus} />}
        {isMobile
        && (
        <MobileDropdownMenu
          chosen={chosen}
          setChosen={setChosen}
          options={sortingOptions}
          showMenu={mobileSortMenuDisplayStatus}
        />
        )}
        <Routes>
          <Route path="/" element={<Navigate to={PAGES.HOME} />} />
          <Route path={PAGES.HOME} element={<HomePage />} />
          <Route path={PAGES.SIGN_UP} element={<SignUpPage />} />
          <Route path={PAGES.LOGIN} element={<LoginPage />} />
          <Route path={PAGES.ADDITIONAL_DETAILS} element={<AdditionalDetailsPage />} />
          <Route path={PAGES.DASHBOARD} element={<Dashboard />} />
          <Route path={PAGES.UPLOAD_OFFER} element={<UploadOffer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
