import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import {registerUser} from './../../api/user';
import { toast } from 'react-toastify';
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [role, setRole] = useState("1");
  const  getLoggedIn  = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      registerUser(email,password,role).then(result=>{
          if(result.data.code==200){
            toast.success("Register Success");
            history.push("/login");
          }
      }).catch(error=>{
          console.log(error.response)
          if(error.response.data.code==401){
            return toast.error("Validation Fail");
          }
          if(error.response.data.code==400){
            return toast.error(error.response.data.message);
          }
      })
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
    <div className="login1">
      <div className="container">
        <span className="registertitle">REGISTER</span>
        </div> 
      <form onSubmit={register}>
        <div className="form-group col-sm-2 col-md-4 text-left">
          
				<label htmlFor="">What is Your Email ?</label>
        <div className = "text">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        </div>
        </div>

        <div className="form-group col-sm-2 col-md-4 text-left">
				<label htmlFor="">Enter Your PassWord</label>
        <div className = "text">
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        </div>
        </div>

        <div className="form-group col-sm-2 col-md-4 text-left">
				<label htmlFor=""> Confirm Your Password</label>
        <div className = "text">
        <input
          type="password"
          placeholder="Verify your password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
        </div>
        </div>


        <div className="form-group col-sm-2 col-md-4 text-left">
				<label htmlFor="">Choose Your Role</label>
        <div className = "text">
        <select
          style={{width: 100}}
          type="role"
          placeholder="Choose Your Role:"
          onChange={(e) => setRole(e.target.value)}
        >
        <option selected="selected" value='1' >User</option>
        <option value='2' >NailTech</option>
        </select>
        </div>
        </div>


        <button className = "button1" type="submit">Register</button>
        

      </form>
      
    </div>
    </section>
  );
}

export default Register;