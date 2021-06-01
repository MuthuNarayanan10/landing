import React ,{useState} from "react"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import computer from './assets/computer.svg'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'
import image5 from './assets/image5.png'
import Testimonial from './assets/testimonial.png'
import logo from './assets/logo.svg'
import building from './assets/building.jpg'
import axios from 'axios';



export default class App extends React.Component {
  state = {
    name: '',
    mobileno: '',
    email: '',
    city: '',
  
    sent: false

}


handleName = (e) => {
  this.setState({
      name: e.target.value
  })
}

handleMobile = (e) => {
  this.setState({
      mobileno: e.target.value
  })
}

handleEmail = (e) => {
  this.setState({
      email: e.target.value
  })
}

handleCity = (e) => {
  this.setState({
      city: e.target.value
  })
}




formSubmit = (e) => {
 

  e.preventDefault();
  
  let data = {
      name: this.state.name,
      mobileno: this.state.mobileno,
      email: this.state.email,
      city: this.state.city
     
  }
 
  axios.post('/api/form', data)
      .then(res => {
          this.setState({
              sent: true,
              
          }, this.resetForm())
      }).catch(() => {
          console.log("not sent")
      })

      
}

 

resetForm = () => {
  this.setState({
      name: '',
      mobileno: '',
      email: '',
      city: '',
    
  })

  setTimeout(() => {
      this.setState({
          sent: "false"
      })
  }, 1000)

 
}



render() {



  return (
   
    <div className="App">
      
      <div className="jumbotron">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md">
               <div className="formclass">
               <img src={logo} alt="logo" class="logo" />
              <h2 className="formhead1">Lets Connect</h2>
           <h4 className="formhead2">Fill in the form to know more about the course</h4>
                  
                      <form className="formclass1"
                      name="form"
                      method="post"
                      action="/"
  
                      onSubmit={this.formSubmit}
                    
                    >
                       <input type="hidden" name="form-name" value="form" />
                      <input 
                         type="text" 
                         placeholder="Enter Full Name" 
                         name="name"
                         value={this.state.name}
                         onChange={this.handleName}
                         className="inputclass"
                         required 
                       />
                      <br></br>
                      <br></br>
                       <input 
                         type="text" 
                         placeholder="Email Id"
                         name="email"
                         value={this.state.email} 
                         onChange={this.handleEmail}
                         className="inputclass"
                         required 
                       />
                        <br></br>
                      <br></br>
                       <input 
                         type="text" 
                         placeholder="Mobile Number" 
                         name="mobileno"
                         value={this.state.mobileno} 
                         onChange={this.handleMobile}
                         className="inputclass"
                         required 
                       />
                        <br></br>
                      <br></br>
                       <input 
                         type="text" 
                         placeholder="city" 
                         name="city"
                         value={this.state.city}
                          onChange={this.handleCity}
                          className="inputclass"
                         required 
                       />
                  <br></br>
                      <br></br>
                    <div className="butt"> <button className="button" type="submit" className="btn"><span className="spanclass">Call Me</span></button></div>  
                    </form>
                 
               </div>
            </div>
            <div className="col-12 col-md-6">
                 <h4 className="accelerate">Accelerate Your Career with
Data Science</h4>
                <div className="box">
                <img src={building} alt="building" class="building" />
                </div>
            </div>

          </div>
        </div>
     </div>


      <div class="section section-3">
           
            <div class="container-fluid">
                <div class="row">
                <h5 className="heading1">Diploma Program Highlight</h5>
                    <div class="col-12 col-md-4 left-content">
                        <div class="content">
                            
                            <img src={computer} alt="Classrooms" class="classroom" />
                        </div>
                    </div>
                    <div class="col-12 col-md-6 text-right pr-0">
               <br></br>

               <div className="courses">
                          <div className="coursecontent">
                            <ul>
                           
                         <li> <h6>Master Machine Learning through Python</h6></li>
                         <li>  <h6>Maths and Statastic required for Datascience</h6></li>
                         <li>  <h6>Python for Data Analytics</h6></li>
                         <li> <h6>Introduction to machine learning</h6></li>
                         <li> <h6>Fundamental for  machine learning</h6></li>
                         <li><h6>Foundation in Python</h6></li>
                         <li><h6>Machine Learning Algorithm</h6></li>
                         <li><h6>Data visualization in Tablueu</h6></li>
                         <li><h6>Introduction in deep learning</h6></li>
                         <li><h6>Natural Processing Algorithm</h6></li>
                         <li><h6>A project based and algorithm learning</h6></li>
                           </ul>
                          </div>
                           </div>
                    </div>
                </div>
         
          </div>
          </div>


          <div>
          <div class="section section-2">
           
           <div class='contain-fluid'>
             
               <div class=" col-12 col-md-12 col-xl-12 text-center our-partners">

              
                   <h2 className="whydev"> Why Develearn </h2>
 <p className="para">Established by team of enthusiast industry specialist, from various organisations with the vision of providing world class quality education to fill the gap between industry and academia. While deliverying a wealth of experience in all things pertaining to data , we provide rigorous technical and strategic training for highly motivated individual and corporations</p>

               </div>
             
           </div>
       </div>
          </div>



          



          
      <div className="branded">
      <img src={image2} alt="image2" class="image2" />
      <img src={image3} alt="image3" class="image3" />
      <img src={image4} alt="image4" class="image4" />
      <img src={image5} alt="image5" class="image5" />
      </div>


      <div className="testimonial">
    
      <div className="testbox">
     <p className="tespara"> The Faculty is very experienced  and skillfull in teaching  these  languages by  giving real life and illustration  examples.... Develearn is the best platform to learn , and use your  creativity to code  some amazing  programes</p>
      </div>
      <img src={Testimonial} alt="testimonial" class="testimonial" />
      </div>



    <div className="footer">

    </div>

  

     

     </div>

    
      
  );
}

}
