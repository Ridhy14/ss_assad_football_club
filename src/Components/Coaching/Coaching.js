import React from 'react'
import './Coaching.css'
import coaching_1 from '../../Assets/headcoach.jpeg'
import coaching_2 from '../../Assets/assistantcoach.jpeg'
import coaching_3 from '../../Assets/goalkeeping.jpeg'
const Coachingstaff = () => {
  return (
    <div className='coachings'>
        <div className="coaching">
          <img src={coaching_1} alt=""/>
          <div className='caption'>
            <p>Our Head Coach</p>
          </div>
        </div>
        <div className="coaching">
          <img src={coaching_2} alt=""/>
          <div className='caption'>
            <p>Assistant Coach</p>
          </div>
        </div>
        <div className="coaching">
          <img src={coaching_3} alt=""/>
          <div className='caption'>
            <p>Goalkeeper Coach</p>
          </div>
        </div>
     </div>
  )
}

export default Coachingstaff