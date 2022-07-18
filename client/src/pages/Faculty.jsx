import React from 'react';
import img1 from "../images/faculty1.png"
import img2 from "../images/faculty2.png"
import img3 from "../images/faculty3.png"
import img4 from "../images/faculty4.png"
import img5 from "../images/faculty5.png"
import img6 from "../images/faculty6.png"

const Faculty = () => {
    return (
        <>
        <div style={{display: "flex"}}>
            <div style={{width:"33%", margin:"30px"}}>
            <img src={img1} style={{height: "150px", width:"150px",display: "block", marginLeft: "auto", marginRight: "auto"}} alt="" /><br />
            <h3 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Dr Alivelu Manga Parimi</h3><br />
            <p style={{display: "flex", justifyContent: "center", alignItems: "center"}}>HOD & Associate Professor</p> <p style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Department of Electrical Engineering </p>
            </div>

            <div style={{width:"33%", margin:"30px"}}>
            <img src={img2} style={{height: "150px", width:"150px",display: "block", marginLeft: "auto", marginRight: "auto"}} alt="" /><br />
            <h3 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Dr. Lov Kumar</h3><br />
            <p style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Senior Member, IEEE.</p> <p style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Assistant Professor, Ph. D.</p> 
            </div>

            <div style={{width:"33%", margin:"30px"}}>
            <img src={img3} style={{height: "150px", width:"150px",display: "block", marginLeft: "auto", marginRight: "auto"}} alt="" /><br />
            <h3 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Dr. Chittaranjan Hota</h3><br />
            <p style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Professor of Computer Science</p> <p style={{display: "flex", justifyContent: "center", alignItems: "center"}}>& Information Systems Department</p>
            </div>
        </div>

        <div style={{display: "flex"}}>
            <div style={{width:"33%", margin:"30px"}}>
            <img src={img4} style={{height: "150px", width:"150px",display: "block", marginLeft: "auto", marginRight: "auto"}} alt="" /><br />
            <h3 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Dr. Ponnalagu R N</h3><br />
            <p style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Assistant Professor</p> <p style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Department of Electrical Engineering </p>
            </div>

            <div style={{width:"33%", margin:"30px"}}>
            <img src={img5} style={{height: "150px", width:"150px",display: "block", marginLeft: "auto", marginRight: "auto"}} alt="" /><br />
            <h3 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Prof. Sandip S. Deshmukh</h3><br />
            <p style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Associate Dean, Practice School Division</p> <p style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Professor, Department of Mechanical Engineering</p> 
            </div>

            <div style={{width:"33%", margin:"30px"}}>
            <img src={img6} style={{height: "150px", width:"150px",display: "block", marginLeft: "auto", marginRight: "auto"}} alt="" /><br />
            <h3 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Dr. Prasant Samantray</h3><br />
            <p style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Assistant Professor</p> <p style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Department of Physics</p>
            </div>
        </div>
        </>
    );
};

export default Faculty;