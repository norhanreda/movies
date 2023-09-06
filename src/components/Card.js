import { useState, useEffect } from "react";
const card = () => {
    const [movies, setMovies] = useState([]);
    const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
    const url = "https://api.themoviedb.org/3";
    const path = "/discover/movie?sort_by=popularity.desc";
    const apiUrl = url + path + apiKey;
    useEffect(() => {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log("Data", data.results);
          setMovies(data.results);
        });
    }, []);
   
    

    return (<>
      
      <div className="container-fluid">
        <div className="row"> 
         <img     />
        </div>



      </div>
    
    
    </>);


}

export default card;
