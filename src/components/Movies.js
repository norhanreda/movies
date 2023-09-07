import { useState, useEffect } from "react";
import Movie from "./Movie";
import "../styles/movies.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const Movies = (probs) => {
  const [movies, setMovies] = useState([]);
  const [fillteredData,setFillteredData]=useState([]);
  // const [searchParams,setsearchParams]=useState('');
  const searchParams =probs.searchWord
  console.log(probs)

  const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
  const url = "https://api.themoviedb.org/3";
  const path = "/discover/movie?sort_by=popularity.desc";
  const apiUrl = url + path + apiKey;
  // const searchParams = window.location.search.split("=")[1];
  // console.log(probs)
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        // console.log("Data", data.results);
        setMovies(data.results);
        setFillteredData(data.results);
        
       
      });
  }, []);

  useEffect(() => {

        
          // setsearchParams(window.location.search.split("=")[1])
          // setFillteredData(()=>movies.filter((movie)=>movie.title.toLocaleLowerCase().includes(wi.toLocaleLowerCase())))
          // console.log("filter",fillteredData)
          if(searchParams=="")
          setFillteredData(movies)
        else
          setFillteredData(()=>  
             movies.filter((movie)=> movie.title.toLocaleLowerCase().includes(window.location.search.split("=")[1].toLocaleLowerCase())))
          
          // console.log(window.location.search.split("=")[1])


  }, [searchParams]);

//   useEffect(() => {

        
//     // setsearchParams(window.location.search.split("=")[1])
//     setFillteredData(()=>  {console.log( movies.filter((movie)=> movie.title.toLocaleLowerCase().includes(searchParams.toLocaleLowerCase())))
//        return movies.filter((movie)=> movie.title.toLocaleLowerCase().includes(searchParams.toLocaleLowerCase()))
//     })
//     console.log("filter",fillteredData)
    
//     console.log(searchParams)


// }, [searchParams]);
  // if(movies) {
  //   setFillteredData(movies);
  // }

  // const searchParams = window.location.search.split("=")[1];
  // if(searchParams)
  // {
  //   setFillteredData(()=>movies.filter((movie)=> movie.title.toLocaleLowerCase().includes(searchParams.toLocaleLowerCase())))
  // }
  // if(movies){
  //   console.log(movies[0].original_title)
  //   }


  if (!fillteredData) return <>loading.........</>;
  else
    return (
      <>
        <div className="container-fluid " style={{marginTop:"100px"}}>
          <div className="row" style={{justifyContent:"space-around"}}>
            {fillteredData.map((movie) => (
              <Movie  key={movie.id} {...movie} />
            ))}
          </div>
        </div>
      </>
    );
};
export default Movies;
