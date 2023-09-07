import {Link} from "react-router-dom"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Navbar = (probs) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
 
function handleChange(e)
{
 e.preventDefault()
 navigate(`movies?search=${searchQuery}`);
  // console.log(window.location.search.split("=")[1])
  probs.fun(window.location.search.split("=")[1])

}

const handleInputChange = (e) => {
  setSearchQuery(e.target.value);
  navigate(`movies?search=${searchQuery}`);
  probs.fun(window.location.search.split("=")[1])

};

    return (
        <>

      <nav className="navbar navbar-expand-lg  text-white fixed-top mt-0" data-bs-theme="dark">
        <div className="container-fluid bg-dark p-2 mb-4 " >
          <a className="navbar-brand" href="#">Movilex</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/movies">Movies</Link>
                {/* <a >Home</a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">Contact us</Link>
                {/* <a >Home</a> */}
              </li>
              
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
            <form className="d-flex" role="search" >
              <input className="form-control me-2" type="search" name="search" placeholder="Search" aria-label="Search" value={searchQuery}
        onChange={handleInputChange} />
              <button className="btn " type="submit" onClick={handleChange}>Search</button>
            </form>
          </div>
        </div>
      </nav>

        </>
    );

}

export default Navbar;