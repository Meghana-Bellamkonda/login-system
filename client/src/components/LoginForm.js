import React, { useState } from "react";
import '../Login.css';

function LoginForm({ Login, error}) {
    const [details, setDetails] = useState({name:"", email:"", password:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        
        <div class="bodyoflogin" style={{width:"100%", height:"100%", position: "absolute", top: "0", left: "0"}}>
        <form onSubmit={submitHandler}>
            <div className="box">
                <h1 class="loginh1">Login</h1><br />
                
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" class="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" class="email" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                {(error != "") ? ( <div className="error">{error}</div>) : ""}
                <br />
                <input type="submit" class="btn" value="LOGIN" />
            </div>
        </form>
        </div>
    )
}

export default LoginForm;