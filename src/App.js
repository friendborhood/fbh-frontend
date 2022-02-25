import logo from './logo.jpg';
import './App.css';
import axios from 'axios'
const makeRequest = async() => {
  const {data} = await axios.get('http://localhost:3000/users/4');
  alert(JSON.stringify(data));
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} id='mainLogo'   />
        <button onClick={makeRequest}>Click!</button>
        <p>
        </p>
      </header>
    </div>
  );
}

export default App;
