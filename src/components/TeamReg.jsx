import React from "react";

import "./components.css";

function TeamReg() {
  return (
    <div class="individualReg">
      <h2 class="center">Hello Folks!</h2>
      <h4 class="center">Lets Get into Team Registration.</h4>

      <div>
        <form class="create-form">
          <label class="inputLabel">Enter Member 1 Name:</label>
          <input name="name1" placeholder="Member 1 Name" autoComplete="off"/>
          <br />
          <label class="inputLabel">Enter Member 2 Name:</label>
          <input name="name2" placeholder="Member 2 Name" autoComplete="off"/>
          <br />
          <label class="inputLabel">Enter Your College Name:</label>
          <input name="clgname" placeholder="College Name" autoComplete="off"/>
          <br />
          <label class="inputLabel">Enter Member 1 Mobile NO:</label>
          <input name="phno1" placeholder="Member 1 Contact NO" autoComplete="off"/>
          <br />
          <label class="inputLabel">Enter Member 2 Mobile NO:</label>
          <input name="phno2" placeholder="Member 2 Contact NO" autoComplete="off"/>
          <br />
          <label class="inputLabel">Enter Member 1 E-Mail:</label>
          <input name="mail1" placeholder="Member 1 E-mail" autoComplete="off"/><br/>
          <label class="inputLabel">Enter Member 2 E-Mail:</label>
          <input name="mail2" placeholder="Member 2 E-mail" autoComplete="off"/><br/>
          <button type="pay" class="joinBtn regbtn paybtn">Pay Now</button><br/>

          <button type="submit" class="joinBtn regbtn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default TeamReg;
