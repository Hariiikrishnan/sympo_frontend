import React,{useState} from "react";

import "./components.css";

function TeamReg() {
  const [data,setData]=useState({
    name1:"",
    name2:"",
    phno1:"",
    phno2:"",
    clgname:"",
    mail1:"",
    mail2:""
  })
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

    if(data.name1==="" || data.name2==="" || data.phno1 ==="" ||  data.phno2 ==="" ||  data.mail2 ==="" ||  data.mail1 ==="" || data.clgname===""){
      setCredentialsError(true);
  }else{
    setCredentialsError(false);
  }
    // setLoading(true);
    // props.isEdit ? handleUpdate(props.id) : onSubmit(event);
  }
  // console.log(credentialsError);

  return (
    <div class="individualReg">
      <h2 class="center">Hello Folks!</h2>
      <h4 class="center">Lets Get into Team Registration.</h4>

      <div>
        <form class="create-form">
          <label class="inputLabel">Enter Member 1 Name:</label>
          <input name="name1" required={true} placeholder="Member 1 Name" autoComplete="off" onChange={handleChange}/>
          <br />
          <label class="inputLabel">Enter Member 2 Name:</label>
          <input name="name2" required={true} placeholder="Member 2 Name" autoComplete="off" onChange={handleChange}/>
          <br />
          <label class="inputLabel">Enter Your College Name:</label>
          <input name="clgname" required={true} placeholder="College Name" autoComplete="off" onChange={handleChange}/>
          <br />
          <label class="inputLabel">Enter Member 1 Mobile NO:</label>
          <input name="phno1" required={true} type="tel" placeholder="Member 1 Contact NO" autoComplete="off" onChange={handleChange}/>
          <br />
          <label class="inputLabel">Enter Member 2 Mobile NO:</label>
          <input name="phno2" required={true} type="tel"placeholder="Member 2 Contact NO" autoComplete="off" onChange={handleChange}/>
          <br />
          <label class="inputLabel">Enter Member 1 E-Mail:</label>
          <input name="mail1" required={true} placeholder="Member 1 E-mail" autoComplete="off" onChange={handleChange}/><br/>
          <label class="inputLabel">Enter Member 2 E-Mail:</label>
          <input name="mail2" required={true} placeholder="Member 2 E-mail" autoComplete="off" onChange={handleChange}/><br/>
          <button type="pay" class="joinBtn regbtn paybtn">Pay Now</button><br/>

          <button type="submit" onClick={handleForm} class="joinBtn regbtn">Register</button>
        </form>
        {credentialsError ? <p class="centerAlign">Please Enter Credentials in all the Fields!</p> : null}
      </div>
    </div>
  );
}

export default TeamReg;
