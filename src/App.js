import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Form from './components/Form';

function App() {
  return (
    <>
    <div className='flex flex-col items-center'>
      <img src="./photo/logo.png" width="600px"/>
      <Route path="/signup">
        <Form/>
      </Route>
    </div>
    </>
  );
}

export default App;
