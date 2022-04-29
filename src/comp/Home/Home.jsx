import React from 'react'
import { useState } from "react";
import './home.css'
import Diarylist from '../Diarylist/Diarylist'
import DiaryItem from '../DiaryItem/DiaryItem'


  const Home = () => { 
    const [curDate, setCurDate] = useState(new Date());
    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  
    const increaseMonth = () => {
      setCurDate(
        new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
      );
    };
  
    const decreaseMonth = () => {
      setCurDate(
        new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
      );
    };
  return (
    
    <div className="App">
    <header>
      <div className='head-left-btn'>
        <button className='prev-btn btn' onClick={decreaseMonth}><i class="fa-solid fa-angle-left"></i></button>
      </div>
      <div className='head-text'>
          {headText}
      </div>
      <div className='head-right-btn'>
        <button className='next-btn btn' onClick={increaseMonth}> <i class="fa-solid fa-angle-right"></i> </button>
      </div>
    </header>
    <Diarylist/>
    <DiaryItem/>
  </div>
  )
}

export default Home