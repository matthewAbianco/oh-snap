import './App.css';
import About from './components/about/About';
import Nav from './components/about/Nav';

function App() {
  return (
    <div className="app">
      <Nav/>
      <main>
        <About/>
        </main>
    </div>
  );
}

export default App;
