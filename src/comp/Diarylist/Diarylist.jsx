import React from 'react'
import { Link } from 'react-router-dom'
import './diarylist.css'

const Diarylist = () => {
  return (
    <div className='Diarylist'>
      <div className='menu-wrap'>
         <div className='left-col'>
           <select className='btn'>
             <option>오래된 순</option>
             <option>최신 순</option>
           </select>
         </div>
         <div className='right-col'>
            <Link to="/Main"><button className='newdairy btn'>새 일기 쓰기</button></Link>
         </div>
       </div>
    </div>
  )
}


export default Diarylist