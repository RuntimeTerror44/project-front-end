import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loginvalidation from "./Loginvalidation";
function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate=useNavigate();
  const [errors,setErrors]=useState({})
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const err=Loginvalidation(values)
    setErrors(err);
    if(err.email === "" && err.password===""){

      axios.post("",values)
      .then(res=>{

        if (res.data==="Success"){
          navigate('/home')

        }else {
          alert("No record existed")
        }
      })

    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control rounded-0"
              name="email"
              onChange={handleInput}
         
            />
                {errors.email && <span className="text-danger ">{errors.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              htmlFor="password"
              placeholder="Enter Password"
              name='password'
              className="form-control rounded-0"
              onChange={handleInput}
            />
            {errors.password && <span className="text-danger ">{errors.password}</span>}
          </div>

          <button type="submit" className="btn btn-success w-100">
            Log in
          </button>
          <Link to="/signup" className="btn btn-default border w-100">
            CreateAccount
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
