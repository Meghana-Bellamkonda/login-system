import React from 'react';
import {
    CgWebsite
}from "react-icons/cg";
import {
    FaFacebookSquare,
    FaPhoneSquareAlt
}from "react-icons/fa";
import "./Popup.css"

const Contact = () => {
    return (
        <div>
            <h1 class="contact">Contact page</h1><br/><br/><br/>
            {/* <div style={{display:"flex", justifyContent: "center"}}>
            
            <div><CgWebsite style={{height:"100px", width:"100px", marginRight: "50px", marginLeft:"50px"}} /></div>
            <FaFacebookSquare style={{height: "100px", width:"100px", marginRight: "50px", marginLeft:"50px"}} />
            <FaPhoneSquareAlt style={{height: "100px", width:"100px", marginRight: "50px", marginLeft:"50px"}} />
            
            </div> */}
            <div style={{display: "flex"}}>
            <div style={{width:"33%", margin:"30px"}}>
            <CgWebsite style={{height: "150px", width:"150px",display: "block", marginLeft: "auto", marginRight: "auto", color:"#03045E"}} />
            <h3 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Visit our Website</h3><br />
            <p><a style={{display: "flex", justifyContent: "center", alignItems: "center"}} target="_blank" href="https://www.bits-pilani.ac.in/">Click Here</a></p>
            
            </div>

            <div style={{width:"33%", margin:"30px"}}>
            <FaFacebookSquare style={{height: "150px", width:"150px",display: "block", marginLeft: "auto", marginRight: "auto", color:"#03045E"}} />
            <h3 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Visit our Facebook Page</h3><br />
            <p><a style={{display: "flex", justifyContent: "center", alignItems: "center"}} target="_blank" href="https://www.facebook.com/universitybitspilani/">Click Here</a></p>
            </div>

            <div style={{width:"33%", margin:"30px"}}>
            <FaPhoneSquareAlt style={{height: "150px", width:"150px",display: "block", marginLeft: "auto", marginRight: "auto", color:"#03045E"}} />
            <h3 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Contact Number</h3><br />
            <p style={{display: "flex", justifyContent: "center", alignItems: "center"}}>+91-1596242179<br />+91-1596255274</p> 
            </div>
        </div>
        </div>
    );
};

export default Contact;