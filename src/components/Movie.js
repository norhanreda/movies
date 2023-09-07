import '../styles/movies.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
const Movie = (probs) => {
  const {
    id,
    adult,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    vote_average,
    vote_count,
  } = probs;

  // console.log(title)
  const imgPath = "https://image.tmdb.org/t/p/w500/";
  
return (<>
    <div className='card col-lg-2  col-sm-12 '>
    <Link to={`/movie/${id}`}>  <img  src={imgPath+poster_path} className='image' /> </Link>
        <h6 style={{textAlign:"left" ,fontFamily:"sans-serif",margin:"5px",padding:"5px"}} > {title}</h6>
        <span>
        <FontAwesomeIcon icon={faStar} style={{color: vote_average >=2 ? "orange":""}} />
        <FontAwesomeIcon icon={faStar} style={{color: vote_average >=4 ? "orange":""}}/>
        <FontAwesomeIcon icon={faStar} style={{color: vote_average >=6 ? "orange":""}}/>
        <FontAwesomeIcon icon={faStar} style={{color: vote_average >=8 ? "orange":""}}/>
        <FontAwesomeIcon icon={faStar} style={{color: vote_average >=10 ? "orange":""}}/>
        

        </span>
        <p style={{textAlign:"left",color:"gray" ,fontSize:"10px",fontFamily:"sans-serif"}} >{release_date}</p>

        <Link to={`/movie/${id}`}>  <button className='botn'  >more details</button> </Link>
       
    

    </div>
    
    </>)
}


export default Movie;
