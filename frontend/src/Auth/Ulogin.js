import React from "react";
import '../Auth/ulogin.css'

class Login extends React.Component{
    render(){    
        return(
            <div>
                <h1 id="head" style={{backgroundColor:"#4a4a4a",color:"#ebd643",padding:"5px"}}>Login Page</h1>
                <div id="main">
                <div className="mb-4 row">
    <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="staticEmail" />
    </div>
  </div>
  <div  className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword"/>
    </div>
     </div>
     <label for="inputPassword" className="col-sm-2 col-form-label">Login As</label>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Project Manager
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label class="form-check-label" for="flexRadioDefault2">
   Team Leader
  </label>
 </div>
 <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
  <label class="form-check-label" for="flexRadioDefault3">
    Project Manager
  </label>
</div>
<button id="char" type="button" class="btn btn-outline-primary btn-sm">Login</button>
<br/>
<hr></hr>
<br/>
<p id="para" style={{float:"left",marginLeft:"23%",paddingRight:"10%"}}>Not a user ? Sign up First</p>
<button id="char1" type="button" class="btn btn-outline-success btn-sm" onClick={()=>{
    this.props.nav('/signup')
}}>Sign up</button>
</div>
            </div>
        );
    }
}

export default Login


