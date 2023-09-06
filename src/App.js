
import './App.css';
import Movies from './components/Movies';
import ResponsiveAppBar from './components/navBar'
function App() {
  return (
    <div className="App">
     <Movies/>
       
      <div style={{backgroundColor:"gray",padding:"10px",margin:"10px  auto 0px auto",position:"fixed",bottom:"0",right:"0",left:"0"}}>  &#169; norhan reda 2023 ITI</div>
   
    </div>
    
  );
}

export default App;
