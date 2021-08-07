import './App.css';
import Card from './components/UI/Card';
import Button from './components/Button/Button';
import Toggle from './components/Button/Toggle';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Card className='card-body'>
        <Slider/>
        <Toggle />
        <Button/>
      </Card>
      
    </div>
  );
}

export default App;
