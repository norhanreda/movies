import { Link } from "react-router-dom";
import "../styles/movies.css";
const Home = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundImage:
            "url(https://getwallpapers.com/wallpaper/full/1/b/d/829640-gorgerous-movie-backgrounds-1920x1080-ipad-pro.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height:"300vh"
        
        }}
      >
        <div className="row">
          {/* <img src="https://getwallpapers.com/wallpaper/full/1/b/d/829640-gorgerous-movie-backgrounds-1920x1080-ipad-pro.jpg" className="col-12" /> */}
          <p className="col-6" style={{ color: "white", marginTop: "100px" }}>
            <dl style={{fontFamily:"sans-serif",fontSize:"20px",padding:"20px",margin:"20px"}}>
              {" "}
              <dt> About us </dt>
              <dd>
                we are a website that includes some informations about some
                movies like rating , can children watch this movie or not,the original language of the movie and
                the populatity of the movie so you can deceide if you will see
               this movie or not.
               
              </dd>
            </dl>
            <Link to="/movies" style={{margin:"50%"}}>
                  {" "}
                  <button className="botn1">go to Movies.........</button>{" "}
                </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
