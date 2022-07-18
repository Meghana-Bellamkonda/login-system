import React from 'react'
import {useState} from "react";
import CustomizedSnackbars from './Snackbar';
import AllowNumbers from "./AllowNumbers"
import Axios from "axios";
import listOfStudents from "./Student"
import SetListOfStudents from "./Student"



function Registration() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);
    const [email, setEmail] = useState("");
    const [branch, setBranch] = useState("");
    const [gender, setGender] = useState("");
    
    
    const addStudent = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/addStudent", {
            name: name, 
            phone: phone, 
            email:email, 
            branch:branch, 
            gender:gender}).then(() => {
            SetListOfStudents([...listOfStudents, {name: name, 
                phone: phone, 
                email:email, 
                branch:branch, 
                gender:gender}]);
        })
       
            
        
        
    };

    // const [form, setForm] = useState({
    //     name: '',
    //     email:'',
    //     class:'',
    //     gender: '',
    //     phone:'',
    //     USN:''
    // });

    // const onChange = (e) => {
    //     const {value, name} = e.target
    //     setForm((state) => ({
    //         ...state,
    //         [name]: value
    //     }));
    // }

    // const showData = () => {
    //     console.log("Form:", form);
    // }

    // const onSubmit = (e) => {
    //     showData();
    //     e.preventDefault();
    // }

  return (
    <div>
        <form> 
        <div className="form-inner">
        <h1>Enter your Details:</h1><br />
            <div className="form-group-nobtn">
                <label>
                    Name:
                    <input onChange={(event) => { setName(event.target.value);}} name="name" placeholder="Enter your Full name"/>
                 </label>
            </div><br />

            <div className="form-group-nobtn">
                <label>
                    Branch:
                    <select style={{margin: "20px", width: "80%"}}  onChange={(event) => { setBranch(event.target.value);}} name="class">
                        <option value="Not Selected">--Selct--</option>
                        <option value="CSE">CSE</option>
                        <option value="EEE">EEE</option>
                        <option value="ECE"> ECE</option>
                        <option value="Mechanical"> Mechanical</option>
                    </select>
                 </label>
            </div><br />

            <div className="form-group-nobtn">
                <label>
                    Phone Number:
                    <input onChange={(event) => { setPhone(event.target.value);}} type="number"  name="phone" />
                 </label>
            </div><br />

            {/* <AllowNumbers /><br /> */}
            
            <div className="form-group-nobtn">
                <label>
                    Email:
                    <input  name="email" onChange={(event) => { setEmail(event.target.value);}} placeholder="Enter your email address"/>
                 </label>
            </div><br />

            <div className="form-group-nobtn">
                <label>
                    USN:
                    <input  name="USN" placeholder="Enter USN"/>
                 </label>
            </div><br />

            <div className="form-group-btn">
                <label>
                    Gender:<br />
                    <div>
                    <input type="radio" onChange={(event) => { setGender(event.target.value);}} value="Male" name="gender" />Male<br />
                    <input type="radio" onChange={(event) => { setGender(event.target.value);}} value="Female" name="gender" />Female<br />
                    <input type="radio" onChange={(event) => { setGender(event.target.value);}} value="Other" name="gender" />Other<br />
                    </div>           
                 </label>
            </div><br />

            <div> 
            <button className='addStudent' onClick={addStudent}>Add</button>
            <CustomizedSnackbars/>
    
                
                
            </div>
            </div>
        </form>
    </div>
  )
}

export default Registration