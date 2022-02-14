import React from 'react';
import './signup.css'
import { useState } from "react";

function Signup() {
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
    
    const removeSelectedImage = () => {
      setSelectedImage();
    };
  return(
      <div>
           <div className='head'><h1 className='texthead'>SIGNUP FORM</h1></div>
           <br/>
        
<div class="container">
  <div class="row">
    <div class="col order-last colum">
    <div className='form'>
           <form class="row g-1 col-md-12 needs-validation" novalidate>
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
  <div class="col-md-5 position-relative">
    <label for="validationTooltip01" class="form-label">First name</label>
    <input type="text" class="form-control inputclr" id="validationTooltip01" placeholder='Firstname' required/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-5 position-relative">
    <label for="validationTooltip02" class="form-label">Last name</label>
    <input type="text" class="form-control inputclr" id="validationTooltip02" placeholder='Lastname' required/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  
  <div class="col-md-8 position-relative">
    <label for="validationTooltipUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
      <input type="text" class="form-control inputclr" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required/>
      <div class="invalid-tooltip">
        Please choose a unique and valid username.
      </div>
    </div>
  </div>
  <div class="col-md-8 position-relative">
    <label for="validationTooltip03" class="form-label">Password</label>
    <input type="text" class="form-control inputclr" id="validationTooltip03" required/>
  </div>
  <div class="col-md-8 position-relative">
    <label for="validationTooltip03" class="form-label">Confirm Password</label>
    <input type="text" class="form-control inputclr" id="validationTooltip03" required/>
  </div>
  <div class="col-md-8 position-relative">
    <label for="validationTooltip05" class="form-label">E-mail</label>
    <input type="text" class="form-control inputclr" id="validationTooltip05" required/>
    <div class="invalid-tooltip">
      Please provide a valid Email.
    </div>
    <div class="col-md-12 position-relative">
    <label for="validationTooltip04" class="form-label">Designation</label>
    <select class="form-select inputclr" id="validationTooltip04" required>
      <option selected disabled value="">Select your Designation</option>
      <option>Project Manager</option>
      <option>Project Lead</option>
      <option>Team Member</option>
    </select>
  </div>
  <div class="col-md-12 position-relative">
    <label for="validationTooltip04" class="form-label">Gender</label>
    <select class="form-select inputclr" id="validationTooltip04" required>
      <option selected disabled value="">Choose Your gender</option>
      <option>Male</option>
      <option>Female</option>
    </select>
  </div>
  </div>
  <div>
  <hr className='line'></hr>
  </div>
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-outline-warning bttn" type="submit">Signup</button>
</div>
</form>
       </div>
    </div>
    <div class="col-md-6 order-first">
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
