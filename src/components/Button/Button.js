import React from 'react';
import './Button.css';
import Card from '../UI/Card';


const Button = () =>{

    return (
        <div className='footer-wrapper'>
            <ul className='promise-list'>
                <li>Unlimited websites</li>
                <li>100% data ownership</li>
                <li>Email reports</li>
            </ul>
            <Card type='button' className='trial-btn'>Start my trial</Card>

        </div>
    )

}

export default Button;