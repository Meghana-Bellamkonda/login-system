import React from 'react'
import Popup from './Popup';
import { useState, useEffect } from 'react';
import Axios from "axios";
import Registration from './Registration';
import './Student.css'
import {
   AiFillDelete
}from "react-icons/ai";
import {
   AiTwotoneEdit
}from "react-icons/ai";

const Student = () => {
    const[buttonPopup, setButtonPopup] = useState(false);
    const [listOfStudents, SetListOfStudents] = useState([]);

    useEffect(() => {
    Axios.get("http://localhost:3001/read")
        .then((response) => {
            SetListOfStudents(response.data)
        })
        .catch(() => {
            console.log("err");

        });
      }, [])

      const updateStudent = (id) => {
         const newPhone = prompt("Enter new phone number: ");

         Axios.put("http://localhost:3001/update", { id: id, newPhone : newPhone}).then(()=> {
            SetListOfStudents(listOfStudents.map((val)=> {
               return val._id == id ? {_id: id, name: val.name, branch: val.branch, phone : newPhone, email:val.email, gender: val.gender} : val
            }))
         })

      }

      const deleteStudent = (id) => {
         Axios.delete(`http://localhost:3001/delete/${id}`).then(()=> {
            SetListOfStudents(listOfStudents.filter((val)=> {
               return val._id != id;
            }))
         })
      }


    return (
      <>
      <div>
      <button style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
    }} 

     class="addStudent" onClick={() => setButtonPopup(true)}>+ Add Student</button>
      
      
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      <Registration/>
      </Popup>

      </div><br /><br /><br /><br /><br /><br /><br />
      <div class="table-users">
   <div class="header">Student Details</div>
   
   <table cellspacing="0">
      <tr>
         <th width="400" style={{fontSize:"1.5em", color:"#03045"}} >Name</th>
         <th width="150" style={{fontSize:"1.5em", color:"#03045"}}>Branch</th>
         <th width="250" style={{fontSize:"1.5em", color:"#03045"}}>Phone</th>
         <th width="250" style={{fontSize:"1.5em", color:"#03045"}}>Username</th>
         <th width="150" style={{fontSize:"1.5em", color:"#03045"}}>Gender</th>
         <th width="150" style={{fontSize:"1.5em", color:"#03045"}}>Action</th>
      </tr>

      
      {listOfStudents.map((user) => {
          return (
            <tr>
         <td>{user.name}</td>
         <td>{user.branch}</td>
         <td>{user.phone}</td>
         <td>{user.email}</td>
         <td>{user.gender} </td>
         <td><button><AiFillDelete onClick={() => {
            deleteStudent(user._id);
         }} /> </button>   
         <button><AiTwotoneEdit  onClick={() => {
            updateStudent(user._id);
         }}/></button>
         </td>
      </tr>
            
          );
        })}

   </table>
</div>
      </>

    )
};

export default Student;