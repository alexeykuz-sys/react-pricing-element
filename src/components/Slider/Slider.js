import React from 'react';
import '../Slider/Slider.css'


const Slider = () => {

    return (
        <div className='slide-wrapper'>
            <div className='page-views'>100k pageviews</div>
            <div className='cost-amount'>$16.00<span>/month</span></div>
            <div className='slide-container'>
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
            </div>
        </div>
    )
}

export default Slider;