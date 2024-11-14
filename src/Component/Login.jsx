import React, { useContext, useState } from 'react';
import { FormContext } from './Layout/AuthContext/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
    const {userSignIn,setUser}=useContext(FormContext)
    const [errorMassage,setErrorMassage]=useState('')
    const handleLogin=(e)=>{
        e.preventDefault()
        const email =e.target.email.value
        const password=e.target.password.value
        console.log(email,password);

        setErrorMassage('')
        if(password.length<6){
          setErrorMassage('password must be 6 character')
        }

        userSignIn(email,password)
        .then(result=>{
          setUser(result.user)
            console.log(result.user);
        })
        .catch(error=>{
          setErrorMassage(error.massage)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className='m-5'>create Account go to <Link to='/register'><button className="btn">register</button></Link></p>
              {
                errorMassage &&<span className='text-red-600 m-5 mb-6'>{errorMassage}</span>
              }
          </div>
        </div>
      </div>
    );
};

export default Login;