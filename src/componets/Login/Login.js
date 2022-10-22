import React from 'react';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from '../../Hooks/useToken';




const Login = () => {
 const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
 const { register, formState: { errors }, handleSubmit } = useForm();







 const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
 ] = useSignInWithEmailAndPassword(auth);

 let signInError;


 const [token] = useToken(user || gUser)
 const navigate = useNavigate();
 // const location = useLocation();
 // let from = location.state?.from?.pathname || "/"

 if (loading || gLoading) {
  return <Loading />
 }

 if (error || gError) {
  signInError = <p className='text-red-500'> {error?.message || gError?.message}</p>
 }




 if (token) {

  navigate('/')
  // navigate(from, { replace: true });
 }

 const onSubmit = (data) => {


  console.log(data)
  signInWithEmailAndPassword(data.email, data.password)

 };




 return (
  <div className='bg-black flex h-screen justify-center items-center '>
   <div className="card w-96 bg-white shadow-xl">
    <div className="card-body">
     <h2 className="text-center text-2xl font-bold ">Login</h2>


     <form onSubmit={handleSubmit(onSubmit)}>

      <div className="form-control w-full max-w-xs">
       <label className="label">
        <span className="label-text text-black">User Eamil</span>

       </label>
       <input type="email"
        placeholder="Your Email"
        className="input input-bordered bg-white text-black  w-full max-w-xs"
        {...register("email", {

         required: {
          value: true,
          message: 'Email is a Required'
         },

         pattern: {
          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
          message: 'Provide a valid Email '
         }
        })}

       />
       <label className="label">
        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

       </label>
      </div>

      <div className="form-control w-full max-w-xs">
       <label className="label">
        <span className="label-text text-black">User Password</span>

       </label>
       <input type="password"
        placeholder="Your Password"
        className="input input-bordered bg-white w-full max-w-xs"
        {...register("password", {

         required: {
          value: true,
          message: "password is required"
         },
         minLength: {
          value: 6,
          message: 'must be 6 cheracter longer'
         }
        })}

       />
       <label className="label">
        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

       </label>
      </div>
      {signInError}
      <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
     </form>


     <p><small>New To fasion house? <Link className='text-primary' to="/signup">New Create Account</Link></small></p>


     <div className="divider ">OR</div>

     <button
      onClick={() => signInWithGoogle()}
      className="btn btn-outline btn-secondary"
     >continue with Google</button>
    </div>
   </div>
  </div>
 );
};

export default Login;