import React, {useState, useEffect} from 'react';
import '../Button/Views.css'


const Views = ({sliderValue}) => {

    const [pageview, setPageview] = useState('10k')

    useEffect(() => {
        const viewsList = ["10k", "50k", "100k", "500k", "1M"];
        setPageview(viewsList[sliderValue]);
      },[sliderValue]);

    return (  
            <div className='page-views'>
                <p>{pageview} pageviews</p>
            </div>            
    )
}

export default Views; 