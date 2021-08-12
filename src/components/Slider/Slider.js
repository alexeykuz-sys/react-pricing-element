import React, {useState, useEffect} from 'react';
import '../Slider/Slider.css'
import Views from '../Button/Views'



const Slider = ({checkValue}) => {

    const [rangeval, setRangeval] = useState('');
    const [sliderValue, setSliderValue] = useState('0')
    const [colorProgress, setColorProgress] = useState(null)

    useEffect(() => {
        const priceList = ['0', '8', '16', '24', '32'];
        setRangeval(priceList[sliderValue]);
    },[sliderValue]);

    const rangevalHandler = (event) => {
        setSliderValue(event.target.value)
        setColorProgress((event.target.value / event.target.max) * 100 + '%')
    }

    const active = 'var(--StrongCyanSliderBackround)';
    const inactive = 'var(--LightGrayishBlueEmptySliderBar)';
    
    const styleInput = {

        background: `linear-gradient(90deg, ${active} 0% ${colorProgress},   ${inactive} ${colorProgress} 100%)`,
    }
    


    console.log(checkValue)


    return (
        <div className='slider-wrapper'>
            <Views sliderValue={sliderValue}/>
            <div className='range-slider-value'>${checkValue? (rangeval *12)*0.75 : rangeval}<span>{checkValue? '/year' : '/month'}</span></div>
            <div className='slider-container'>
                <input type="range" min='0' max='4' step='1' defaultValue='0' style={styleInput}  onChange={rangevalHandler} className="slider" id="myRange"/>
            </div>
        </div>
    )
}

export default Slider; 