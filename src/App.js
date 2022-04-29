import './App.css';
import {
 

  Route,

  BrowserRouter,
  Routes
} from "react-router-dom";
import Main from './comp/Main/Main';
import Home from './comp/Home/Home';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Main/*" element={<Main/> } />
      <Route path="/home" element={<Home/> } />
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
