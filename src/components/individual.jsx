import React,{useState} from "react";

import "./components.css";

function Individual() {
  const [data,setData]=useState({
    name:"",
    phon:"",
    clgname:"",
    mail:""
  });
  const [credentialsError,setCredentialsError]=useState(false);

  function handleChange(event) {
    const { value, name } = event.target;
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
    // setLoading(true);
    // props.isEdit ? handleUpdate(props.id) : onSubmit(event);
  }
// console.log(data)
  return (
    <div class="individualReg">
      <h2 class="center">Hello Folks!</h2>
      <h4 class="center">Lets Get into Individual Registration.</h4>

      <div>
        <form class="create-form">
        <label class="inputLabel">Event Name:</label>
        <select for="events" id="events">
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

          <button type="pay" class="joinBtn regbtn paybtn">Pay Now</button><br/>

          <button type="submit" onClick={handleForm} class="joinBtn regbtn">Register</button>
        </form>
        {credentialsError ? <p class="centerAlign">Please Enter Credentials in all the Fields!</p> : null}
      </div>
    </div>
  );
}

export default Individual;
