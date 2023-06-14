import './App.css';
import Hero from './components/Hero';
import Plans from './components/Plans/Plans';
import Reasons from './components/Reasons/Reasons';
import Programs from './components/programs/Programs';
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
    </div>
  );
}

export default App;
