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
    <div className='card'>
        <img  src={imgPath+poster_path} width={200} height={200}  />
        <h3 style={{textAlign:"left"}} > {title}</h3>
        <h6 style={{textAlign:"left",color:"gray"}} >{release_date}</h6>

        <button>know more.......</button>
    

    </div>
    
    </>)
}


export default Movie;
