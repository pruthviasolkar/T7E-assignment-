import React from 'react'
import './userhead.css'

const Profilehead = () => {
  return (
    <div>
      <div className='mainuserhead'>
        <div className='userprofile'>
          <div className='proimage'><img src="/profileuser.png" alt="" /></div>
          <div className='protxt'><div className='userdesignation'><p>OPERATIONS ADMIN</p></div><div className='username'><p>user</p></div></div>
        </div>
      </div>
    </div>
  )
}

export default Profilehead
