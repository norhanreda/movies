import '../styles/movies.css'

const Movie = (probs) => {
  const {
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

  console.log(title)
  const imgPath = "https://image.tmdb.org/t/p/w500/";
  
return (<>
    <div className='card col-lg-2  col-sm-12 '>
        <img  src={imgPath+poster_path} className='image' />
        <h6 style={{textAlign:"left" ,fontFamily:"sans-serif"}} > {title}</h6>
        <p style={{textAlign:"left",color:"gray" ,fontSize:"10px",fontFamily:"sans-serif"}} >{release_date}</p>

        <button className='botn' >know more.......</button>
    

    </div>
    
    </>)
}


export default Movie;
