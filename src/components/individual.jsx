import React from "react";

import "./components.css";

function Individual() {
  return (
    <div class="individualReg">
      <h2 class="center">Hello Folks!</h2>
      <h4 class="center">Lets Get into Individual Registration.</h4>

      <div>
        <form class="create-form">
          <label class="inputLabel">Enter Your Name:</label>
          <input name="name" placeholder="Name" autoComplete="off"/>
          <br />
          <label class="inputLabel">Enter Your College Name:</label>
          <input name="clgname" placeholder="College Name" autoComplete="off"/>
          <br />
          <label class="inputLabel">Enter Your Mobile NO:</label>
          <input name="phno" placeholder="Contact NO" autoComplete="off"/>
          <br />
          <label class="inputLabel">Enter Your E-Mail:</label>
          <input name="mail" placeholder="E-mail" autoComplete="off"/><br/>

          <button type="pay" class="joinBtn regbtn paybtn">Pay Now</button><br/>

          <button type="submit" class="joinBtn regbtn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Individual;
