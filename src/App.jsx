import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import SignUpPage from './pages/sign-up';
import LoginPage from './pages/login/login';
import Layout from './components/Layout/Layout';
import NotFound from './pages/not-found';
import additionalDetailsPage from './pages/additionalDetails';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/additionalDetails" element={<additionalDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
