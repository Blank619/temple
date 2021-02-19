
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from './logo.png'
import first from './first.JPG'
import second from './second.jpg'
import third from './third.jpg'
import fourth from './fourth.jpg'

import homePage from './homePage.jpg'
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import t1 from './t1.jpg'
import Aos from "aos";
import "aos/dist/aos.css";
import DSC_5033 from './DSC_5033.JPG'
import DSC_5034 from './DSC_5034.JPG'



class Home extends Component {

   constructor(props){
      super(props);
      this.state={

      }
      Aos.init({
         duration:2000
      });

   }
   render() {
      return (

         <div >
            <div className="row" style={{ backgroundColor: "", marginTop: "" }}>
               <div className="col-sm-4 col-md-4 col-lg-4" style={{ backgroundColor: "#faf2db" }} >
                  <img src={logo} height="400" width="350" alt="LOGO" />
               </div>
               <div className="col-sm-4 col-md-4 col-lg-4" style={{ backgroundColor: "#faf2db" }}>
                  <label style={{ fontFamily: "initial", color: "#673ab7", fontSize: 45 }}>ત્રિલોકિનાથ વિષ્ણુ મંદિર</label> <br />
                  <label style={{ fontFamily: "initial", color: "#ff9800", fontSize: 25 }}>શામળાજી</label>
                  <label style={{ fontFamily: "initial", color: "#ff9800", fontSize: 25 }}></label>
               </div>
               <div className="col-sm-4 col-md-4 col-lg-4" style={{ backgroundColor: "#faf2db" }}>

               </div>
            </div>
            <div className="row" style={{ backgroundColor: "#faf2db", marginTop: "", height: "650px" }}>
               <div className="col-sm-3 col-md-3 col-lg-3" style={{ backgroundColor: "#faf2db" }}>

               </div>

               <div className="col-sm-6 col-md-6 col-lg-6" style={{ backgroundColor: "#faf2db" }}>
                  <Carousel>
                     <Carousel.Item>
                        <img
                           className="d-block w-100"
                           src={DSC_5033}
                           alt="First slide"
                           height="550"
                           width="450"
                          
                        />
                        <Carousel.Caption>
                           <h3>First slide label</h3>
                           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                        <img
                           className="d-block w-100"
                           src={DSC_5034}
                           alt="First slide"
                           height="550"
                           width="250"
                        />

                        <Carousel.Caption>
                           <h3>Second slide label</h3>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                        <img
                           className="d-block w-100"
                           src={homePage}
                           alt="third slide"
                           height="650"
                           width="100"
                        />

                        <Carousel.Caption>
                           <h3>Third slide label</h3>
                           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                     </Carousel.Item>

                     <Carousel.Item>
                        <img
                           className="d-block w-100"
                           src={fourth}
                           alt="third slide"
                           height="650"
                           width="100"
                        />

                        <Carousel.Caption>
                           <h3>Third slide label</h3>
                           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                     </Carousel.Item>

                     




                  </Carousel>

                  
                  
               </div>

               <div className="col-sm-3 col-md-3 col-lg-3" style={{ backgroundColor: "#faf2db" }}>

               </div>

            </div>
           
              <div className="row" style={{backgroundColor: "#faf2db"}}>
              <div className="col-sm-3 col-md-3 col-lg-3" style={{backgroundColor: "#faf2db"}}> 
              <Card data-aos="fade-in" style={{ width: '18rem', marginTop: "2%", marginLeft: "8%", backgroundColor: "#faf2db", border: "0" }}>
                     <Card.Img variant="top" src="https://p0.pikist.com/photos/60/533/temple-india-religion-brihadeshwara-templ-building-architecture-facade-columnar-faith.jpg" height="200" />
                     <Card.Body>
                        <Card.Title style={{ color: "#ff9800" }}>જુના ફોટા</Card.Title>
                        <Card.Text style={{ color: "#673ab7" }}>
                           Some quick example text to build on the card title and make up the bulk of
                           the card's content.
                        </Card.Text>
                        <Button href="/oldphotos" variant="primary" style={{ backgroundColor: "#673ab7" }}>Info</Button>
                     </Card.Body>
                  </Card>
              
              
              </div>

              <div className="col-sm-3 col-md-3 col-lg-3" style={{backgroundColor: "#faf2db"}}> 
              <Card data-aos="fade-in" style={{ width: '18rem', marginTop: "", marginLeft: "8%", backgroundColor: "#faf2db", border: "0" }}>
                     <Card.Img variant="top" src="https://www.gozocabs.com/blog/wp-content/uploads/2018/01/Dilwara-temple-interior.jpg" height="200" />
                     <Card.Body>
                        <Card.Title style={{ color: "#ff9800" }}>મંદિરના ફોટા</Card.Title>
                        <Card.Text style={{ color: "#673ab7" }}>
                        મંદિર ગેલેરી જોવા માટે ક્લિક કરો
                        </Card.Text>
                        <Button href="/templephotos" variant="primary" style={{ backgroundColor: "#673ab7" }}>info</Button>
                     </Card.Body>
                  </Card>
              
              
              </div>

              <div className="col-sm-3 col-md-3 col-lg-3" style={{backgroundColor: "#faf2db"}}> 
              <Card data-aos="fade-in" style={{ width: '18rem', marginTop: "", marginLeft: "8%", backgroundColor: "#faf2db", border: "0" }}>
                     <Card.Img variant="top" src={t1} />
                     <Card.Body>
                        <Card.Title style={{ color: "#ff9800" }}>ટ્રસ્ટીઓ</Card.Title>
                        <Card.Text style={{ color: "#673ab7" }}>
                           Some quick example text to build on the card title and make up the bulk of
                           the card's content.
                        </Card.Text>
                        <Button href="/trusties" variant="primary" style={{ backgroundColor: "#673ab7" }}>Info</Button>
                     </Card.Body>
                  </Card>
              
              
              </div>

              <div className="col-sm-3 col-md-3 col-lg-3" style={{backgroundColor: "#faf2db"}}> 
            
              <Card data-aos="fade-in" style={{ width: '18rem', marginTop: "", marginLeft: "8%", backgroundColor: "#faf2db", border: "0" }}>
                     <Card.Img variant="top" src="https://s3-us-east-2.amazonaws.com/wordstackstock/wp-content/uploads/2020/03/14034547/P1055962.jpg" height="200" />
                     <Card.Body>
                        <Card.Title style={{ color: "#ff9800" }}>Temple History</Card.Title>
                        <Card.Text style={{ color: "#673ab7" }}>
                           Some quick example text to build on the card title and make up the bulk of
                           the card's content.
                        </Card.Text>
                        <Button variant="primary" style={{ backgroundColor: "#673ab7" }}>Info</Button>
                     </Card.Body>
                  </Card>
              
              
              </div>
                 
              </div>
           

            


            <div className="row" style={{ backgroundColor: "#411E64", marginTop: "", height: "" }}>
            <div className="col-sm-3 col-md-3 col-lg-3" style={{ backgroundColor: "#411E64" }}> 
            
            </div>

            <div className="col-sm-6 col-md-6 col-lg-6" style={{ backgroundColor: "#411E64" }}> 
            <h2 data-aos="fade-in" style={{ fontFamily: "initial", color: "#ecf2f6", marginTop:"2%" }}>Mission</h2>
            <h4 data-aos="fade-in"  style={{ fontFamily: "initial", color: "#ecf2f6", marginTop:"4%" }}>Religious, Moral & Spiritual Growth</h4>
            <label data-aos="fade-in" style={{ fontFamily: "initial", color: "#ecf2f6", fontSize: 19, marginTop:"4%" }}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.



This is a great space to write long text about your company and your services. .</label>
<label data-aos="fade-in" style={{ fontFamily: "initial", color: "#ecf2f6", fontSize: 19, marginTop:"4%" }}> You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.

Make your company stand out and show your visitors who you are.</label>

<label style={{ fontFamily: "initial", color: "#ecf2f6", fontSize: 19, marginTop:"4%" }}> </label>
            
            </div>

            <div className="col-sm-3 col-md-3 col-lg-3" style={{ backgroundColor: "#411E64" }}> 
            
            </div>



            </div>

            
            <div className="row" style={{ backgroundColor: "#faf2db", marginTop: "", height: "410px" }}> 
            
            <div className="col-sm-6 col-md-6 col-lg-6" style={{ backgroundColor: "#faf2db" }}>

            <h2 style={{ fontFamily: "initial", color: "#673ab7", marginTop:"2%"}}> Opening Hours </h2>
            <p style={{ fontFamily: "initial", color: "#673ab7", fontSize: 17,marginTop:"4%" }}>Mon - Fri: 7am - 10pm <br></br></p>  
            <p style={{ fontFamily: "initial", color: "#673ab7", fontSize: 17 }}>      Saturday: 8am - 10pm<br></br> </p>  
            <p style={{ fontFamily: "initial", color: "#673ab7", fontSize: 17 }}>       Sunday: 10am - 9pm<br></br></p>
            <p style={{ fontFamily: "initial", color: "#673ab7", fontSize: 17 }}>       Phone Number<br></br></p>

     
            </div>

            

               <div className="col-sm-6 col-md-6 col-lg-6" style={{ backgroundColor: "#faf2db" }}>

               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.6678460280564!2d73.38516811543082!3d23.687833497079403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395d8bec6906ba4d%3A0x57808063befa65cb!2sShamlaji%20Temple!5e0!3m2!1sen!2sin!4v1612735820453!5m2!1sen!2sin" style={{height:400,width:350, border:0}}>

               </iframe>
               
               </div>
            
            
            
            </div>
            
            


         </div>





      );
   }
}

export default Home;