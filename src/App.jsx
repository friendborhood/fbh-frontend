import './App.css';
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Form from './components/signup/Form';
import Layout from './components/Layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/sign-up">
          <Form />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
