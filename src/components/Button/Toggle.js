import React from 'react';
import './Toggle.css';
import Card from '../UI/Card';

const Toggle = ()=> {

    return (
        <div className='toggle-wrapper'>
            <div className='text'>Monthly Billing</div>
            <div className='toggle-switch'>
                <input type="checkbox" id="switch" /><label htmlFor="switch">Toggle</label>
            </div>
            <div className='text'>Yearly Billing</div>
            <Card className='discount'>-25%</Card>
        </div>
    );
};

export default Toggle;