import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
    </div>
  );
}

export default App;
