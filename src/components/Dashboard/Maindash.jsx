import React from 'react'
import Profilehead from './userhead/Profilehead'
import Carddash from './cards/Carddash'
import "./maindash.css"
import Piechart from './graphs/piechart'
import IndiaMap from './graphs/mapchart'
 
const Maindash = () => {
  return (
    <div className='maindash'>
      <Profilehead/>
      <Carddash/>
      <div className='charts'>
        <div className='map'>
        <h3>Vehicle Type &gt; App Registered User Count Sub Tradewise</h3><IndiaMap/></div>
        <div className='pie'>
          <h3>Vehicle Type &gt; App Registered User Count Sub Tradewise</h3>
          <Piechart/></div>
      </div>
    </div>
  )
}

export default Maindash
