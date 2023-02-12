import React,{useState} from "react";

import "./components.css";
import axios from "axios";


function Individual() {


  const [data,setData]=useState({
    events:"",
    name:"",
    phno:"",
    clgname:"",
    mail:"",
    dname:"",
    dno:""
  });
  const [credentialsError,setCredentialsError]=useState(false);

  function handleChange(event) {
    const { value, name } = event.target;
    // console.log(event.target)
    setData((prevNotes) => {
      return { ...prevNotes, [name]: value };
    });
  }

  function handleForm(event) {
    console.log("Handling Form");
    console.log(data)
    event.preventDefault();

    if(data.name==="" ||  data.phno ==="" ||  data.mail ==="" || data.clgname===""){
      setCredentialsError(true);
  }else{
    setCredentialsError(false);
  }
  onSubmit();
  // console.log(data);
}
  async function onSubmit() {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + "token",
      },
    };
    try {
      const body = JSON.stringify(data);
      await axios
           .post(
          `https://starfish-app-uva3q.ondigitalocean.app/sympo/register`,
          body,
          config
        )
        
        setData({
        events:"",
        name: "",
        phno: "",
        clgname: "",
        mail: "",
        dname: "",
        dno: "",
      });
   
    } catch (err) {
      console.error("error ", err.res.data);
    }

  }
  return (
    <div class="individualReg">
      <h2 class="center">Hello Folks!</h2>
      <h4 class="center">Lets Get into Individual Registration.</h4>

      <div>
        <form class="create-form">
        <label class="inputLabel" for="events">Event Name:</label><br/>
        <select name="events" id="events" onChange={handleChange}>
          <option value="Debugging">Debugging</option>
          <option value="Tech Quiz">Tech Quiz</option>
          <option value="Web Design">Web Design</option>
          <option value="Product Presentation">Product Presentation</option>
          <option value="Dumb Charades">Dumb Charades</option>
          <option value="Connection">Connection</option>
          <option value="Ad-Zap">Ad-Zap</option>
          <option value="Multimedia">Multimedia</option>
    
        </select><br/>
          <label class="inputLabel">Enter Your Name:</label>
          <input name="name" placeholder="Name" required={true} autoComplete="off" onChange={handleChange}/>
          <br />
          <label class="inputLabel">Enter Your College Name:</label>
          <input name="clgname" placeholder="College Name" required={true} autoComplete="off" onChange={handleChange}/>
          <br />
          <label class="inputLabel">Enter Your Mobile NO:</label>
          <input name="phno" type="tel" placeholder="Contact NO" required={true} autoComplete="off" onChange={handleChange}/>
          <br />
          <label class="inputLabel">Enter Your E-Mail:</label>
          <input name="mail" placeholder="E-mail" autoComplete="off" required={true} onChange={handleChange}/><br/>
          <label class="inputLabel">Enter Your Department Name:</label>
          <input name="dname" placeholder="Department Name" autoComplete="off" required={true} onChange={handleChange}/><br/>
          <label class="inputLabel">Enter Your College Roll No:</label>
          <input name="dno" placeholder="Department No" autoComplete="off" required={true} onChange={handleChange}/><br/>

          <button type="pay" class="joinBtn regbtn paybtn">Pay Now</button><br/>

          <button type="submit" onClick={handleForm} class="joinBtn regbtn">Register</button>
        </form>
        {credentialsError ? <p class="centerAlign">Please Enter Credentials in all the Fields!</p> : null}
      </div>
    </div>
  );
}
  
export default Individual;
