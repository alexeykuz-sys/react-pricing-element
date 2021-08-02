import './App.css';
import Card from './components/UI/Card';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Card className='card-body'>
        <div className='toggle-wrapper'>
          <div className='text'>Monthly Billing</div>
          <input type="checkbox" class="toggle-switch-checkbox" name="toggleSwitch" id="toggleSwitch" />
          <div className='text'>Yearly Billing</div>
          <Card className='discount'>-25%</Card>
        </div>
        <Button/>
      </Card>
      
    </div>
  );
}

export default App;
