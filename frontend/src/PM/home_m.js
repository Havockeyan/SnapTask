import React from "react"
import Navbar_m from "../Navbar/navbar_pm";
import '../PM/home.css'


class Home_m extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    fun=()=>{
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
    render(){
        return(
            <div>
                <Navbar_m/>
                <br/>
                <div id="dark">
                <div class="form-check form-switch">
                <label className="lab">Dark mode</label>
                <br/>
                 <input  id="tog" className="form-check-input" type="checkbox" role="switch"  onClick={()=>{
                    this.fun()
                }} id="flexSwitchCheckChecked"/>
                </div>
                </div>
                <br/>
                <br/>
              
  <div className="row">
    <div className="col-6 col-sm-3">
        <h5>Project Title: </h5>
        <h5>Created Date: </h5>
        <h5>Model: </h5>
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div className="col-6 col-sm-3">
        <h5>Project Title: </h5>
        <h5>Created Date: </h5>
        <h5>Model: </h5>
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div className="col-6 col-sm-3">
        <h5>Project Title: </h5>
        <h5>Created Date: </h5>
        <h5>Model: </h5>
    </div>
   

    {/* <div class="w-100 d-none d-md-block"></div>

    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  </div> */}
</div>
               
                      
            </div>
            );

        }
    }
    
    export default Home_m