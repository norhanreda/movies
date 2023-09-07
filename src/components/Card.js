import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
const Card = () => {
  const [movies, setMovies] = useState(null);
  const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
  const url = "https://api.themoviedb.org/3";
  const path = "/discover/movie?sort_by=popularity.desc";
  const imgPath = "https://image.tmdb.org/t/p/w500/";
  const apiUrl = url + path + apiKey;
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        // console.log("Data", data.results);
        setMovies(data.results);
      });
  }, []);

  const { id } = useParams();
  let index;
  // console.log(id);
  if (movies) {
    // console.log(movies);
    index = movies.findIndex((movie) => movie.id == id);
    // console.log(index);
    // console.log(movies[index]);
    var {
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
    } = movies[index];
  }

  return (
    <>
      {!movies ? (
        <div
          class="spinner-border "
          role="status"
          style={{ margin: "200px 50px" }}
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="container-fluid" style={{ marginTop: "100px"}}>
          <div className="row">
            <img
              className="col-lg-4 col-sm-12 image-card"
              src={imgPath + poster_path}
              height={500}
            />
            <div className="col-lg-6 col-sm-12">
              {" "}
              <h1>{title}</h1>
              <span>
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: vote_average >= 2 ? "orange" : "" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: vote_average >= 4 ? "orange" : "" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: vote_average >= 6 ? "orange" : "" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: vote_average >= 8 ? "orange" : "" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: vote_average >= 10 ? "orange" : "" }}
                />
              </span>
              <p> {release_date}</p>
              <dl>
                {" "}
                <dt> Overview </dt>
                <dd>{overview}</dd>
              </dl>
              <p>
                <b>Original Language:</b> {original_language}
              </p>
              <p>
              <b>Kids can watch:</b>{" "}
              {!adult ? (
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "green" }}
                />
              ) : (
                <FontAwesomeIcon
                  style={{ color: "red" }}
                  icon={faCircleXmark}
                />
              )}
              </p>
              <p>
              <b>popularity:</b> {popularity}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
