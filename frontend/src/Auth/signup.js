import React from 'react';
import './signup.css'
import { useState } from "react";

function Signup(props) {
    const [selectedImage, setSelectedImage] = useState();
    const imageChange = (e) => {
      if (e.target.files && e.target.files.length > 0) {
        setSelectedImage(e.target.files[0]);
      }
    };
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

    const signUpHandler = () => {
      //todo signup stuffs.
      const formData = new FormData();
      formData.append('image', selectedImage);
      formData.append('firstName', document.getElementsByName('firstName')[0].value);
      formData.append('lastName', document.getElementsByName('lastName')[0].value);
      formData.append('userName', document.getElementsByName('userName')[0].value);
      formData.append('password',document.getElementsByName('password')[0].value);
      formData.append('email', document.getElementsByName('email')[0].value);
      formData.append('Designation',document.getElementsByName('Designation')[0].value);
      formData.append('gender', document.getElementsByName('gender')[0].value);

    //   for (var pair of formData.entries()) {
    //     console.log(pair[0]+ ', ' + pair[1]); 
    // }

      fetch('http://localhost:8080/user/signup',{
        method: 'POST',
        body: formData
      })
      .then(response => { return response.json()})
      .then(result => {
        console.log(result);
        if(result.message === "Validation Error"){
          // alert('Enter a valid userName, password')
          console.log(result.data);
        }else{
        props.nav('/');
        }
      });
    };

    // const onChangeHandler = (e, filed) => {
    //     console.log(e.target.value);
    // };
    
    const removeSelectedImage = () => {
      setSelectedImage();
    };
  return(
      <div>
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
    <label for="validationTooltip01" className="form-label" id='firstName'>First name</label>
    <input type="text" name='firstName' className="form-control inputclr" id="validationTooltip01" placeholder='Firstname' required/>
    <div className="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div className="col-md-5 position-relative">
    <label for="validationTooltip02" className="form-label" id='lastName'>Last name</label>
    <input type="text" name='lastName' className="form-control inputclr" id="validationTooltip02" placeholder='Lastname' required/>
    <div className="valid-tooltip">
      Looks good!
    </div>
  </div>
  
  <div className="col-md-8 position-relative">
    <label for="validationTooltipUsername" className="form-label" id='userName'>Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
      <input type="text" name='userName' className="form-control inputclr" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required/>
      <div className="invalid-tooltip">
        Please choose a unique and valid username.
      </div>
    </div>
  </div>
  <div class="col-md-8 position-relative">
    <label for="validationTooltip05" class="form-label">E-mail</label>
    <input type="text" class="form-control inputclr" id="validationTooltip05" required/>
    <div class="invalid-tooltip">
      Please provide a valid Email.
    </div>
  <div class="col-md-8 position-relative">
    <label for="validationTooltip03" class="form-label">Password</label>
    <input type="text" class="form-control inputclr" id="validationTooltip03" required/>
   </div>
  <div className="col-md-8 position-relative">
    <label for="validationTooltip03" className="form-label" id='password'>Password</label>
    <input type="text" name='password' className="form-control inputclr" id="validationTooltip03" required/>
  </div>
  <div className="col-md-8 position-relative">
    <label for="validationTooltip03" className="form-label" id='confirm'>Confirm Password</label>
    <input type="text" name='confirm' className="form-control inputclr" id="validationTooltip03" required/>
  </div>
    <div className="col-md-12 position-relative">
    <label for="validationTooltip04" className="form-label">Designation</label>
    <select name='Designation' className="form-select inputclr" id="validationTooltip04" required>
      <option selected disabled value="">Select your Designation</option>
      <option value="Project Manager">Project Manager</option>
      <option value="Project Lead">Project Lead</option>
      <option value="Team Member">Team Member</option>
    </select>
  </div>
  <div className="col-md-12 position-relative">
    <label for="validationTooltip04" className="form-label">Gender</label>
    <select name='gender' className="form-select inputclr" id="validationTooltip04" required>
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
       </div>
    );
}

export default Signup;
