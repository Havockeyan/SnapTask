import React from 'react';
import './signup.css'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import {ToastContainer ,toast} from "react-toastify";
import validate from './validate';

function Signup(props) {
    const [{selectedImage, loading}, setState] = useState({
      selectedImage: "",
      loading: false
    });
    const imageChange = (e) => {
      if (e.target.files && e.target.files.length > 0) {
        setState({selectedImage: e.target.files[0]});
      }
    };

    var goAhead = true;
    const styles = {
      container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
      },
      preview: {
        marginTop: 50,
        display: "flex",
        flexDirection: "column",
      },
      image: { maxWidth: "90%", maxHeight: 180 },
      delete: {
        cursor: "pointer",
        padding: 1,
        background: "red",
        color: "white",
        border: "none",
        maxWidth:"35%",
        fontSize:"15px"
      },
    };

    const userNameHandler = (e) => {
       const newFormdata = new FormData();
      newFormdata.append('email', document.getElementById('email').value);
      newFormdata.append('userName', document.getElementById('userName').value);
      const userName = document.getElementById('userName').value;
      const email = document.getElementById('email').value;
      // console.log(typeof userName, typeof email);
      if(userName !== "" && email !== ""){
        //check if it is already exists
      fetch('http://localhost:8080/user/isUser',{
        method: 'POST',
        body: newFormdata
    })
    .then(response => {
        return response.json();
    })
    .then(result => {
      console.table(result);
        if(result.hasUser === true){
            // alert('User with this username already exists');
            toast.error('User with this username already exists', {
              position: "top-center",
              autoClose: 10000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
            goAhead = false;
            setState({loading: false});
            return false;
        }
        if(result.hasEmail === true){
          // alert('User with this email already exists');
          toast.error('User with this email already exists', {
            position: "top-center",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          goAhead = false;
          setState({loading: false});
          return false
      }
        // return true;
    })
      }
    }

    const signUpHandler = () => {
      //todo signup stuffs.
      const formData = new FormData();
      formData.append('image', selectedImage);
      formData.append('firstName', document.getElementById('firstName').value);
      formData.append('lastName', document.getElementById('lastName').value);
      formData.append('userName', document.getElementById('userName').value);
      formData.append('password',document.getElementById('password').value);
      formData.append('conform', document.getElementById('confirm').value);
      formData.append('email', document.getElementById('email').value);
      formData.append('Designation',document.getElementById('Designation').value);
      formData.append('gender', document.getElementById('gender').value);

      // const newFormdata = new FormData();
      // newFormdata.append('email', formData.get('email'));
      // newFormdata.append('userName', formData.get('userName'));
      // var goAhead = true;

       //checking if the password are same
       //console.log(formData.get('password').toString() === formData.get('conform').toString());
    if(!(formData.get('password').toString() === formData.get('conform').toString())){
      toast.error('The password and the conform password should be same', {
          position: "top-center",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
      });
      setState({loading: false});
      return false;
  }

  
  setState({loading: true});

    //   //check if it is already exists
    //   fetch('http://localhost:8080/user/isUser',{
    //     method: 'POST',
    //     body: newFormdata
    // })
    // .then(response => {
    //     return response.json();
    // })
    // .then(result => {
    //     if(result.hasUser === true){
    //         // alert('User with this username already exists');
    //         toast.error('User with this username already exists', {
    //           position: "top-center",
    //           autoClose: 10000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           });
    //         goAhead = false;
    //         setState({loading: false});
    //     }
    //     if(result.hasEmail === true){
    //       // alert('User with this email already exists');
    //       toast.error('User with this email already exists', {
    //         position: "top-center",
    //         autoClose: 10000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         });
    //       goAhead = false;
    //       setState({loading: false});
    //   }
    //     // return true;
    // })
        if(goAhead){
          
      if(validate(formData)){
        fetch('http://localhost:8080/user/signup',{
        method: 'POST',
        body: formData
      })
      .then(response => { return response.json()})
      .then(result => {
        //console.log(result);
        props.nav('/');
      });
      }
        }else{
          //do something if not valid.
        }
      
    };
    
    const removeSelectedImage = () => {
      setState({selectedImage: ""});
    };
  return(
    loading ? (<div><ToastContainer position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover/>
      <img alt='nothing' src={require('./../asert/loading.gif')} height="100%"  width="100%"/>
    </div>) :
      (<div>
        <ToastContainer position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover/>
           <div className='head'><h1 className='texthead'>SIGNUP FORM</h1></div>
           <br/>
        
<div className="container">
  <div className="row">
    <div className="col order-last colum">
    <div className='form'>
           <form className="row g-1 col-md-12 needs-validation" onSubmit={(e) => {e.preventDefault()}} novalidate>
             <label>Upload Your Profile</label>
           <div style={styles.container}>
        <input
          accept="image/*"
          type="file"
          onChange={imageChange}
        />

        {selectedImage && (
          <div style={styles.preview}>
            <img
              src={URL.createObjectURL(selectedImage)}
              style={styles.image}
              alt="Thumb"
            />
            <button onClick={removeSelectedImage} style={styles.delete}>
              Remove
            </button>
          </div>
        )}
      </div>
      <br/>
  <div className="col-md-5 position-relative">
    <label for="validationTooltip01" className="form-label">First name</label>
    <input type="text" id='firstName' className="form-control inputclr" placeholder='Firstname' required/>
    <div className="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div className="col-md-5 position-relative">
    <label for="validationTooltip02" className="form-label">Last name</label>
    <input type="text" id='lastName' className="form-control inputclr" placeholder='Lastname' required/>
    <div className="valid-tooltip">
      Looks good!
    </div>
  </div>
  
  <div className="col-md-8 position-relative">
    <label for="validationTooltipUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
      <input type="text" id='userName' className="form-control inputclr" aria-describedby="validationTooltipUsernamePrepend" required/>
      <div className="invalid-tooltip">
        Please choose a unique and valid username.
      </div>
    </div>
  </div>
  <div class="col-md-8 position-relative">
    <label for="validationTooltip05" class="form-label">E-mail</label>
    <input type="text" id='email' class="form-control inputclr" required/>
    <div class="invalid-tooltip">
      Please provide a valid Email.
    </div>
  <div className="col-md-8 position-relative">
    <label for="validationTooltip03" className="form-label">Password</label>
    <input type="password" onFocus={userNameHandler} id='password' className="form-control inputclr" required/>
  </div>
  <div className="col-md-8 position-relative">
    <label for="validationTooltip03" className="form-label">Confirm Password</label>
    <input type="password" id='confirm' className="form-control inputclr" required/>
  </div>
    <div className="col-md-12 position-relative">
    <label for="validationTooltip04" className="form-label">Designation</label>
    <select id='Designation' className="form-select inputclr" required>
      <option selected disabled value="">Select your Designation</option>
      <option value="Project Manager">Project Manager</option>
      <option value="Project Lead">Project Lead</option>
      <option value="Team Member">Team Member</option>
    </select>
  </div>
  <div className="col-md-12 position-relative">
    <label for="validationTooltip04" className="form-label">Gender</label>
    <select id='gender' className="form-select inputclr" required>
      <option selected disabled value="">Choose Your gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
  </div>
  </div>
  <div>
  <hr className='line'></hr>
  </div>
<div className="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-outline-warning bttn" type='button' onClick={signUpHandler}>Signup</button>
</div>
</form>
       </div>
    </div>
    <div className="col-md-6 order-first">
     <h1 className='head2'> WELCOME TO </h1>
     <p className='para'>SNAP TASK</p>
     <h2 className='head3'>Ask for what you want and be prepared to get it</h2>
    </div>
   
  </div>
</div>
       </div>)
    );
}

export default Signup;
