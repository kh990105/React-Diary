import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {

  return (
 <header>
    <div className='Left_btn '>
       <Link to="/home"><button className='btn'>뒤로가기</button></Link>
    </div>
    <div className='head_text'>
        <h2>새 일기 쓰기</h2>

    </div>
    <div className='Right_btn'>
        <button className='btn delete'>삭제하기</button>
    </div>
 </header>
  )
}

export default Header