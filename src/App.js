
import './App.css';
import { useState } from 'react';
import Movies from './components/Movies';
import Navbar from './components/navBar';
import Card from './components/Card';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Contacts from './components/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [searchWord,setsearchWord] =useState('')
  function rec(param) {
    setsearchWord(param)
    console.log(param)

  }
  console.log(searchWord)
  return (
    <BrowserRouter>
       <Navbar fun={rec}/>
       {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies searchWord={searchWord} />}/>
        <Route path="/contact" element={<Contacts />}/>
        <Route path="movie/:id" element={<Card />}/>
        <Route path="*" element={<NotFound/>}>
     
          {/* <Route path="contact" element={<Contacts />} /> */}
          
        </Route>
      </Routes>
      <footer style={{margin:"30px"}}>
      <div style={{backgroundColor:"#212529",color:"white",padding:"8px",margin:"20px  auto 0px auto",position:"fixed",bottom:"0",right:"0",left:"0",textAlign:"center"}}>  &#169; norhan reda 2023 ITI</div>
     </footer>
    </BrowserRouter>
    // <div className="App">
    //   <Navbar/>
    //  <Movies/>
       
    //    <footer style={{margin:"30px"}}>
    //   <div style={{backgroundColor:"gray",padding:"8px",margin:"20px  auto 0px auto",position:"fixed",bottom:"0",right:"0",left:"0"}}>  &#169; norhan reda 2023 ITI</div>
    //   </footer>
    // </div>
    
  );
}

export default App;
