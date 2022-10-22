import React from 'react';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from '../../Hooks/useToken';
;

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth)


  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user || gUser)

  let signInError;


  if (loading || gLoading || updating) {
    return <Loading />
  }

  if (error || gError || updateError) {
    signInError = <p className='text-red-500'> {error?.message || gError?.message || updateError?.message}</p>
  }




  if (token) {

    navigate('/home')
  }

  const onSubmit = async (data) => {


    console.log(data)
    await createUserWithEmailAndPassword(data.email, data.password)

    await updateProfile({ displayName: data.name });
    console.log('updated done');



  };




  return (
    <div className='bg-white flex h-screen justify-center items-center '>
      <div className="card w-96 bg-black  shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl  text-center text-white font-bold">Create an Account</h2>


          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Name</span>

              </label>
              <input type="text"

                placeholder="your Name "
                className="input input-bordered bg-white w-full max-w-xs"
                {...register("name", {

                  required: {
                    value: true,
                    message: "name is required"
                  },

                })}
              />
              <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

              </label>
            </div>






            <div className="form-control w-full max-w-xs">
              {/* <label className="label">
        <span className="label-text text-black">User Eamil</span>

       </label> */}
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
              {/* <label className="label">
        <span className="label-text text-black">User Password</span>

       </label> */}
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


          <p className='text-white'><small>Already Have an account? <Link className='text-primary' to="/login">Please Login</Link></small></p>


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

export default SignUp;