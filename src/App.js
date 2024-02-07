import logo from './logo.svg';
import cover from './Cover.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cover} className="App-cover" alt="cover" />
        <img src={logo} className="App-logo" alt="logo" />
        
        <nav>
          <ul>
            <li><a href="index.html#home">Home</a></li>
            <li><a href="index.html#about">About</a></li>
            <li><a href="index.html#skills">Skills</a></li>
            <li><a href="index.html#contact">Contact</a></li>
          </ul>
        </nav>
        
        <h1>My name is Vesna.</h1>
        <p class="first">I'm Developer. </p>
        <a class="second" href="#about">Let me introduce myself.</a>
        <p class="third">@Copyright by W 2023</p>

      </header>
    </div>
  );
}

export default App;
