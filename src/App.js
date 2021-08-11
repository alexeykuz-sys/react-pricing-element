import React, {useState} from 'react'
import './App.css';
import Card from './components/UI/Card';
import Button from './components/Button/Button';
import Toggle from './components/Button/Toggle';
import Slider from './components/Slider/Slider';

function App() {

  const [checked, setChecked] = useState('false')
  
  const checkHandler=(isChecked)=>{
    setChecked(isChecked)
  }

  return (
    <div className="App">
      <Card className='card-body'>
        <Slider checkValue={checked}/>
        <Toggle onCheck={checkHandler}/>
        <Button/>
      </Card>
      
    </div>
  );
}

export default App;
