import React from "react"
import Navbar_m from "../Navbar/navbar_pm";
import '../PM/home.css'

class Project_m extends React.Component
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
               <h2> Add Project</h2>
               <div id="dark">
                <div class="form-check form-switch">
                <label style={{fontSize:"20px"}}>Dark mode</label>
                <br/>
                 <input  id="tog" className="form-check-input" type="checkbox" role="switch"  onClick={()=>{
                    this.fun()
                }} id="flexSwitchCheckChecked"/>
                </div>
                </div>
            </div>
            );

        }
    }
    
    export default Project_m