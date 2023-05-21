import { Link,useNavigate  } from "react-router-dom";
import Signupvalidation from "./Signupvalidation";
import { useState } from "react";
import axios from "axios";


function Signup() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate=useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.username]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const err=Signupvalidation(values)
    setErrors(err);
    if(err.username === "" && err.email === "" && err.password===""){

      axios.post("http://localhost:5000/users",values)
      .then(res=>{

        navigate('/')
      })

    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter Name"
              name="username"
              className="form-control rounded-0"
              onChange={handleInput}
            />
            {errors.username && <span className="text-danger ">{errors.username}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control rounded-0"
              onChange={handleInput}
            />
            {errors.email && <span className="text-danger ">{errors.email}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-control rounded-0"
              onChange={handleInput}
            />
            {errors.password && <span className="text-danger ">{errors.password}</span>}
          </div>

          <button type="submit" className="btn btn-success w-100">Sign up</button>
          <Link to="/" className="btn btn-default border w-100">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
