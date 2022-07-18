import React from 'react';
import img1 from "../images/BITSlogo.png"
import img2 from "../images/bits.png"
import "./Homepage.css"
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Home = () => {
    return (
        <div>
            <img src={img1} style={{height: "100px", width:"300px"}} alt="" />
            <img src={img2} style={{height: "300px", width:"100%"}} alt="" />
            <div style={{display: 'flex',
                        justifyContent: "center",
                        alignItems: 'center'
                        }}>
            </div><br />

            <div style={{display: "flex"}}>

            <div style={{width:"50%", margin:"50px"}}>
            <h1>Education and Curriculum</h1>
            <p>BITS Pilani has always stood for the best in education and pedagogy. We design our courses to promote deep understanding and learning of concepts. Our curriculum is constantly evolving, keeping in sync with global research. The following are some of the key components of
curriculum at our campuses</p><br />
            <h2>Academic Life</h2>
            <p>The programme structures for all our disciplines have been designed to challenge the brightest minds. Each academic year is divided into 2 semesters, with the following outline:</p>
            <br />
            <h3>Degree Programs</h3>
            <p> We offer educational degrees at First Degree (Undergraduate), Higher Degree (Graduate) and Doctoral Levels. At the rst degree level, we offer B.E (Hons), B. Pharm. (Hons.), M.Sc. (Hons.), and M. Sc. (Tech) degrees. At the Higher Degree level, we offer M.E., M.Pharm, MBA and MPH Programmes</p>
            </div>

            <div style={{width:"50%", margin:"50px"}}>
            <h3>Dual Degree</h3>
            <p>The purpose of the dual degree structure is to encourage students to study an additional supporting discipline in addition to the main engineering degree. Under this programme structure, students work concurrently towards earning 2 degrees within a set time frame. For e.g., as student may opt for a combination of Biology with Chemical Engineering, in order to enhance understanding of Chemical Engineering to the eld of Biology. Typically, such programmes take ve years to complete, and the student is awarded two separate degrees - an MSc Degree stating the dual subject opted for, and a BE degree giving the Engineering specialization completed. </p><br />
            <br />
            <h3>Practice School</h3>
            <p> An integral part of academics is Practice school or internship. The program is spread across two phases, one of two months and another ve & half months and consists of the most extensive exposure in an industrial environment.</p>
            </div>

            </div>

            
            
            

            
        </div>
    );
};

export default Home;