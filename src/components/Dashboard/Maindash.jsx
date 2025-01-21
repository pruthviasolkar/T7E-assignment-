import React from 'react'
import Profilehead from './userhead/Profilehead'
import Carddash from './cards/Carddash'
import "./maindash.css"
 
const Maindash = () => {
  return (
    <div className='maindash'>
      <Profilehead/>
      <Carddash/>
    </div>
  )
}

export default Maindash
