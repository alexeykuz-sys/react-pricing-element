import React, {useState} from 'react';
import '../Slider/Slider.css'
import Views from '../Button/Views'


const Slider = () => {

    const [rangeval, setRangeval] = useState('');
    const [sliderValue, setSliderValue] = useState('')
    

    const rangevalHandler = (event) => {
        setRangeval(event.target.value)
        setSliderValue(event.target.value)
    }
    useState('0')

    return (
        <div className='slider-wrapper'>
            <Views sliderValue={sliderValue}/>
            <div className='range-slider-value'>${rangeval}<span>/month</span></div>
            <div className='slider-container'>
                <input type="range" min="0" max="4" step="1" onChange={rangevalHandler} className="slider" id="myRange"/>
            </div>
        </div>
    )
}

export default Slider; 