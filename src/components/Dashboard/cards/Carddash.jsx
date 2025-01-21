import React from 'react'
import "./carddash.css"
const Carddash = () => {
    return (
        <div className='allcards'>
            <div className='card'>
                <div>
                    <div className='total'><h3>Total Download</h3></div>
                    <div className='totalnumber'><p>85</p></div>
                </div>
                <div className='cardline'></div>
                <div>
                    <div className='lastdays'><p>Last 7 Days</p></div>
                    <div className='avg'> Avg : <span>91</span></div>
                </div>
            </div>
            <div className='card'><div>
                    <div className='total'><h3>Total Registered</h3></div>
                    <div className='totalnumber'><p>41</p></div>
                </div>
                <div className='cardline'></div>
                <div>
                    <div className='lastdays'><p>Last 7 Days</p></div>
                    <div className='avg'> Avg : <span>48</span></div>
                </div></div>
            <div className='card'><div>
                    <div className='total'><h3>Total DBT Verified</h3></div>
                    <div className='totalnumber'><p>47</p></div>
                </div>
                <div className='cardline'></div>
                <div>
                    <div className='lastdays'><p>Last 7 Days</p></div>
                    <div className='avg'> Avg : <span>16</span></div>
                </div></div>
            <div className='card'><div>
                    <div className='total'><h3>Total Active</h3></div>
                    <div className='totalnumber'><p>922</p></div>
                </div>
                <div className='cardline'></div>
                <div>
                    <div className='lastdays'><p>Last 7 Days</p></div>
                    <div className='avg'> Avg : <span>894</span></div>
                </div></div>
            <div className='card'><div>
                    <div className='total'><h3>Pack Sold</h3></div>
                    <div className='totalnumber'><p>3753</p></div>
                </div>
                <div className='cardline'></div>
                <div>
                    <div className='lastdays'><p>Last 7 Days</p></div>
                    <div className='avg'> Avg : <span>5974</span></div>
                </div></div>
        </div>
    )
}

export default Carddash
