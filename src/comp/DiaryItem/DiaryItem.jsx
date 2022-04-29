import React from 'react'

import './diaryitem.css'

const DiaryItem = () => {
    const toDate = new Date();
    const date = `${toDate.getFullYear()}-${toDate.getMonth()+1}-${toDate.getDate()}` ;

    
  return (
    <div className='DiaryItem'>
        <div className='emotion_img_wrapper emotion_img_wrapper01'>
            <img src='img/emotion1.png' alt='emotion1'/>
        </div>
        <div className='text-info'>
            <div className='todate'>
                {date}
            </div>
            <div className='preview'>
                sssssss
            </div>
        </div>
        <div className='btn-box'>
            <button className='mybtn'>수정하기</button>
        </div>
    </div>
  )
}

export default DiaryItem