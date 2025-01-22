import React from 'react'
import "./carddash.css"
const Carddash = () => {
    const cardData = [
        {
            title: 'Total Download',
            total: 85,
            lastDays: 'Last 7 Days',
            avg: 91,
        },
        {
            title: 'Total Registered',
            total: 41,
            lastDays: 'Last 7 Days',
            avg: 48,
        },
        {
            title: 'Total DBT Verified',
            total: 47,
            lastDays: 'Last 7 Days',
            avg: 16,
        },
        {
            title: 'Total Active',
            total: 922,
            lastDays: 'Last 7 Days',
            avg: 894,
        },
        {
            title: 'Pack Sold',
            total: 3753,
            lastDays: 'Last 7 Days',
            avg: 5974,
        },
    ];
    return (
        <div className='allcards'>
            {cardData.map((elem, index) => (
                <div className='card' key={index}>
                    <div>
                        <div className='total'><h3>{elem.title}</h3></div>
                        <div className='totalnumber'><p>{elem.total}</p></div>
                    </div>
                    <div className='cardline'></div>
                    <div>
                        <div className='lastdays'><p>{elem.lastDays}</p></div>
                        <div className='avg'> Avg : <span>{elem.avg}</span></div>
                    </div>
                </div>
            ))}
             
        </div>
    )
}

export default Carddash
