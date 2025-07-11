import logo from './logo.svg';
import './App.css';
import  Home from './home.js';

function App() {
  return (
    <div>
      <ul>
        <li><a class="active" href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </div>
  );
}

export default App;
