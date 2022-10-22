import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Reviews from './Reviews';

const Review = () => {
  const [reviews, setReviews] = useState([])
  const [user] = useAuthState(auth);
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  // const nameRef = useRef(null)
  // const companyRef = useRef(null)
  // const discriptionRef = useRef(null)


  useEffect(() => {
    fetch(`http://localhost:5000/review`, {
      method: 'GET'
    })

      .then(res => res.json())
      .then(data => {

        setReviews(data)
        reset()

      })
  }, [])


  const imgStorageKey = '0f96bdec33a2f815d1d27f267732480c'

  const onSubmit = (data) => {


    const formData = new FormData();
    const image = data.image[0];
    formData.append('image', image)

    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;


    fetch(url, {
      method: 'POST',
      body: formData

    })


      .then(res => res.json())
      .then(result => {
        // console.log('imgbb', result);

        if (result.success) {
          const img = result.data.url;
          const review = {
            name: data.name,
            address: data.location,
            discription: data.discription,
            img: img
          }


          fetch(`http://localhost:5000/review`, {
            method: 'POST',
            headers: {

              'content-type': 'application/json'
            },
            body: JSON.stringify(review)
          })

            .then(res => res.json())
            .then(result => {
              console.log(result);
              if (result) {
                toast.success('Review added successfully')
                reset()

              }

            })



        }
      })






  }
  // const { data: review, isLoading } = useQuery('review', () => fetch(`http://localhost:5000/review`, {
  //     method: 'GET'
  //   }).then(res => res.json()))



  return (
    <div >
      <div className='my-5 mx-3'>
        <h4 className="text-xl text-primary font-bold">Your Review</h4>
        <h2 className='text-3xl text-black'>What our Customer say</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-3 gap-5'>
        {
          [...reviews].splice(-3).reverse().map(review => <Reviews
            key={review._id}
            review={review}
          ></Reviews>)
        }
      </div>

      <div className=''>
        <form onSubmit={handleSubmit(onSubmit)}  >
          {/* className="" */}
          <div className='flex justify-center items-center h-screen '>
            <div className='grid grid-cols-1 justify-center  items-center    text-black my-10 mx-5'>

              <h1 className='text-2xl text-secondary'>Please Your Review</h1>

              <div className="form-control   w-full max-w-xs">

                <input type="text"

                  value={user.displayName}
                  placeholder="your Name "
                  className="input bg-white   input-bordered w-full max-w-xs"
                  {...register("name", {

                    required: {
                      value: true,
                      message: "name is required"
                    },

                  })}
                />
                <label className="label">
                  {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                </label>
              </div>
              <div className="form-control  w-full max-w-xs">

                <input type="text"

                  placeholder="Please Your Loacation "
                  className="input bg-white input-bordered w-full max-w-xs"
                  {...register("location", {

                    required: {
                      value: true,
                      message: "Location is required"
                    },

                  })}
                />
                <label className="label">
                  {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}


                </label>
              </div>



              <div className="form-control w-full max-w-xs">

                <input
                  type="file"
                  className="input bg-white input-bordered w-full max-w-xs"
                  {...register("image", {
                    required: {
                      value: true,
                      message: 'Image is Required'
                    }
                  })}
                />
                <label className="label">
                  {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                </label>
              </div>




              <div className="form-control  w-full max-w-xs">

                <textarea type="text"

                  placeholder="Your Discription "
                  className="input bg-white input-bordered w-full max-w-xs"
                  rows={6}
                  {...register("discription", {

                    required: {
                      value: true,
                      message: "discription is required"
                    },

                  })}
                />
                <label className="label">
                  {errors.discription?.type === 'required' && <span className="label-text-alt text-red-500">{errors.discription.message}</span>}


                </label>
              </div>



              <input className='btn w-full max-w-xs text-white' type="submit" value="Add Your Review" />

            </div>


          </div>
        </form>
      </div>








      {/* <form onSubmit={reviewSubmitHandle} >

        <div className=' h-screen ml-20 mt-20'>

          <div className='grid grid-cols-1 justify-center text-black my-10 mx-5'>

            <h1 className='text-2xl text-secondary'>Please Your Review</h1>
            <input
              ref={nameRef}
              type="text"
              name='name'
              value={user.displayName}
              disabled
              class="input w-full text-white font-bold max-w-xs mt-2"

            />



            <input
              ref={companyRef}
              type="text"
              name='company'
              placeholder="Company's Name Designation "
              class="input w-full bg-white  max-w-xs mt-2"
            />


            <textarea
              ref={discriptionRef}
              name='discription'
              class="textarea bg-white w-full max-w-xs my-2"
              placeholder="Discription"

            ></textarea>


            
            <input

              className='btn btn-secondary w-full max-w-xs text-white'
              type="submit"

              value="Submit"

            />

          </div>
        </div>
      </form> */}

    </div>
  );
};

export default Review;