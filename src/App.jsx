import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import SignUpPage from './pages/sign-up';
import LoginPage from './pages/login';
import Layout from './components/Layout/Layout';
import NotFound from './pages/not-found';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
        <Route path="/home" />

        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>

      </Switch>
    </Layout>
  );
}

export default App;
