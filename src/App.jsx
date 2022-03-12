import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import Form from './pages/sign-up';
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
