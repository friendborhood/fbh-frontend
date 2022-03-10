import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import Form from './components/signup/Form';
import Layout from './components/Layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Route path='/' exact>
        <Redirect to='/home'/>
      </Route>
      <Route path="/signup">
        <Form/>
      </Route>
      <Route path='*'>
        <NotFound/>
      </Route>
    </Layout>
  );
}

export default App;
