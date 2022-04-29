import React from 'react'
import { Link } from 'react-router-dom'
import './main.css'
import Header from './../Header/Header'
import {useState ,useRef} from "react";



const Main = () => {
  const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
  };
  const [date, setDate] = useState(getStringDate(new Date()));

  const [case1, case1Active] = useState(true);
  const [case2, case2Active] = useState(true);
  const [case3, case3Active] = useState(true);
  const [case4, case4Active] = useState(true);
  const [case5, case5Active] = useState(true);

  const Class1 = () => {
    case1Active(!case1);
  };
  const Class2 = () => {
    case2Active(!case2);
  };
  const Class3 = () => {
    case3Active(!case3);
  };
  const Class4 = () => {
    case4Active(!case4);
  };
  const Class5 = () => {
    case5Active(!case5);
  };

  const contentRef = useRef();
  const [content, setContent] = useState("");

  
  
  return (
    <>
        <div className="App">
          <div className='DiaryEditor'>
    <Header/>
 
    <div className='main'>
            <section>
              <h4>오늘은 몇일인가요?</h4>
              <div className="input_box">
              <input className="input-date" value={date}onChange={(e) => setDate(e.target.value)} type="date"/>
              </div>
            </section>
            <section>
              <h4>오늘의 기분은?</h4>
              <div className='input_box emothion_list_wrapper'>
                {/* roop가능 */}
                <div className={case1 ? 'emothion_box 01': 'emothion_box 01 box_01'} onClick={Class1} >
                    <img src='img/emotion1.png' alt='emotion1'></img>
                    <span>신남</span>
                </div>
                <div className={case2 ? 'emothion_box 02': 'emothion_box 02 box_02'} onClick={Class2} >
                    <img src='img/emotion2.png' alt='emotion2'></img>
                    <span>좋음</span>
                </div>
                <div className={case3 ? 'emothion_box 03': 'emothion_box 03 box_03'} onClick={Class3} >
                    <img src='img/emotion3.png' alt='emotion3'></img>
                    <span>보통</span>
                </div>
                <div className={case4 ? 'emothion_box 04': 'emothion_box 04 box_04'} onClick={Class4} >
                    <img src='img/emotion4.png' alt='emotion4'></img>
                    <span>우울함</span>
                </div>
                <div className={case5 ? 'emothion_box 05': 'emothion_box 05 box_05'} onClick={Class5} >
                    <img src='img/emotion5.png' alt='emotion5'></img>
                    <span>화남</span>
                </div>
                {/* roop */}
              </div>
            </section>
            <section>
              <h4>오늘의 일기</h4>
              <div className='Text_area'>
                <textarea 
                          placeholder="무슨 일이 있엇나요"
                          ref={contentRef}
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
               />
              </div>
            </section>
            <section>
              <div className='footer'>
                <Link to="/home"><button className='btn'>취소하기</button></Link>
                <Link to="/home"><button className='btn'>작성하기</button></Link>
              </div>
            </section>
          </div>
          </div>
          </div>
          </>
  )
}

export default Main