import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SignUpPage from './pages/sign-up/SignUpPage';
import LoginPage from './pages/login/login';
import Layout from './components/Layout/Layout';
import NotFound from './pages/not-found';
import AdditionalDetailsPage from './pages/additional-details';
import { PAGES } from './pages/consts';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
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
