import React from "react";
import '../Auth/ulogin.css'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Auth/ulogin.css';
import {ToastContainer} from "react-toastify";
toast.configure()

class Login extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        loading: false
      }
    }

    loginHandler = () => {
      toast.info('It may take some time maximum 30 sec depending on your network', {
        position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
    });
      const formData = new FormData();
      formData.append('email', document.getElementById('email').value);
      formData.append('password', document.getElementById('password').value);
      //checking for the radio button
      if(document.getElementById('manager').checked){
        formData.append('Designation', document.getElementById('manager').value);
      }else{
        if(document.getElementById('leader').checked){
          formData.append('Designation', document.getElementById('leader').value);
        }else{
          formData.append('Designation', document.getElementById('user').value);
        }
      }

      console.log(formData);

      this.setState({loading: true});


      //api call
      fetch('http://localhost:8080/user/login',{
        method: 'POST',
        body: formData
      })
      .then(response => {
        return response.json();
      })
      .then(result => {
        //console.log(result);
        if(result.token){
          localStorage.setItem('token', result.token);
          toast.success('Welcome User!',{autoClose:3000});
          this.props.nav('/home_m');
        }
        else
          toast.error('Authentication Failed!',{autoClose:3000});
          this.setState({loading: false});
      })

    }

    render(){    
        return this.state.loading ? (<div><ToastContainer position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover/>
      <img alt='nothing' src={require('./../asert/loading.gif')} height="100%"  width="100%"/>
    </div>) : (
            <div>
              <ToastContainer position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover/>
                <h2 id="head" style={{backgroundColor:"#4a4a4a",color:"#ebd643",padding:"5px"}}>Login Page</h2>
                <div id="main">
                <div className="mb-4 row">
    <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="email" />
    </div>
  </div>
  <div  className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="password"/>
    </div>
     </div>
     <label for="inputPassword" className="col-sm-2 col-form-label">Login As</label>
  <div class="form-check">
  <input value="Project Manager" class="form-check-input" type="radio" name="flexRadioDefault" id="manager"/>&nbsp;&nbsp;
  <label class="form-check-label" for="flexRadioDefault1">
    Project Manager
  </label>
</div>
<div class="form-check">
  <input value="Team Leader" class="form-check-input" type="radio" name="flexRadioDefault" id="leader" />&nbsp;&nbsp;
  <label class="form-check-label" for="flexRadioDefault2">
   Team Leader
  </label>
 </div>
 <div class="form-check">
  <input value="Team Member" class="form-check-input" type="radio" name="flexRadioDefault" id="user"/>&nbsp;&nbsp;
  <label class="form-check-label" for="flexRadioDefault3">
    Team Member
  </label>
</div>
<button id="char" type="button" class="btn btn-outline-primary btn-sm" onClick={this.loginHandler}>Login</button>
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


