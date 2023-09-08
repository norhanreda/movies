import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub  } from "@fortawesome/free-brands-svg-icons";
import "../styles/movies.css";
const Contacts = () => {
  const[obj,setobj]=useState({email:"norhanreda12345@gmail.com",subject:"",body:""})
  // const[subject,setsubject]=useState('')
  // const[body,setbody]=useState('')

  function handleChange(e) {
    setobj((old)=> ({...old,[e.target.name]:e.target.value}))

  }
  function handlesubmit(e) {
    e.preventDefault();
    const mailtoUrl = `mailto:${obj.email}?subject=${encodeURIComponent(obj.subject)}&body=${encodeURIComponent(obj.body)}`;
    window.open(mailtoUrl, '_blank');
  }
  return (
    <>
      <div
        style={{
            
            marginTop:"70px",
            backgroundColor:"lightcyan",   
            height:"100vh"    
        }}
        className="container-fluid"
      >
             <div className="row">
            <div className="col-lg-6 col-sm-12" style={{margin:"10px auto",border:"1px solid black"}}>
                <h1>Contact Us</h1>
               
                <form  method="post" enctype="text/plain">
                    {/* Email Address:<br/><input type="email" onChange={handleChange} name="email"/> <br/> */}
                    Email Subject:<br/><input type="text" onChange={handleChange} name="subject"/><br/> <br/>
                    Email Message:<br/><textarea  onChange={handleChange} name="body"/><br/>

                    <br/> <input type="submit" onClick={handlesubmit} value="Send"/><br/>
                  </form>
                  <div style={{textAlign:"center"}}>
                
                <p style={{marginTop:"20px"}}><b>Social media links</b> </p>
           <a href="https://www.linkedin.com/in/norhan-reda-4a37011b8/" target="_blank" ><FontAwesomeIcon icon={faLinkedin} style={{color:" #0e76a8",fontSize:"50px",margin:"5px",padding:"20px"}} /> </a> 
           <a href="https://github.com/norhanreda" target="_blank" ><FontAwesomeIcon icon={faGithub} style={{color:"black",fontSize:"50px",margin:"5px",padding:"20px"}} /> </a> 
           </div>
            </div>
            <img className="col-lg-4 col-sm-12"  style={{margin:"10px auto",}} src="" />
            </div>
          
      </div>
    </>
  );
};

export default Contacts;
