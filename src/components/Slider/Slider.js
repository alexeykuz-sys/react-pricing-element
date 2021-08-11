import React, {useState, useEffect} from 'react';
import '../Slider/Slider.css'
import Views from '../Button/Views'


const Slider = (props) => {

    const [rangeval, setRangeval] = useState('0');
    const [sliderValue, setSliderValue] = useState('0')
    
    useEffect(() => {
        const priceList = ['0', '8', '16', '24', '32'];
        setRangeval(priceList[sliderValue]);
      },[sliderValue]);

    const rangevalHandler = (event) => {
        // setRangeval(event.target.value)
        setSliderValue(event.target.value)
    }
    console.log(props.checkValue)

    return (
        <div className='slider-wrapper'>
            <Views sliderValue={sliderValue}/>
            <div className='range-slider-value'>${props.checkValue? (rangeval *12)*0.75 : rangeval}<span>{props.checkValue? '/year' : '/month'}</span></div>
            <div className='slider-container'>
                <input type="range" min="0" max="4" step="1" onChange={rangevalHandler} className="slider" id="myRange"/>
            </div>
        </div>
    )
}

export default Slider; 