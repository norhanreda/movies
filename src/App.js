
import './App.css';
import Movies from './components/Movies';
import Navbar from './components/navBar';
import ResponsiveAppBar from './components/navBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Movies/>
       
       <footer style={{margin:"30px"}}>
      <div style={{backgroundColor:"gray",padding:"8px",margin:"20px  auto 0px auto",position:"fixed",bottom:"0",right:"0",left:"0"}}>  &#169; norhan reda 2023 ITI</div>
      </footer>
    </div>
    
  );
}

export default App;
