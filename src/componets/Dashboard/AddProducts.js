import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProducts = () => {
 const { register, formState: { errors }, handleSubmit, reset } = useForm();


const title=[

 { 
  '_id':'1',
  'name':'Shop'

 },
 { 
  '_id':'2',
  'name':'Fasion',

 },
 { 
  '_id':'3',
  'name':'Cloth'

 }
]


 const imgStorageKey = '0f96bdec33a2f815d1d27f267732480c'

 const onSubmit = async (data) => {
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
        const dress = {
          name: data.name,
          price: data.price,
          sell: data.sell,
          sellerName: data.seller,
          img: img
        }

        fetch('http://localhost:5000/girlsdress', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(dress)
        })
          .then(res => res.json())
          .then(inserted => {
            if (inserted.insertedId) {
              toast.success('dress added successfully')
              reset()

            }
            else {
              toast.error('dress added successfully');
            }
          })




      }
    })

}



 return (
  <div>
  <h1 className='text-xl  text-black font-bold'>Add a Dress</h1>
  <div className='flex h-screen  justify-center items-center'>


    <div className="card w-96 bg-base-100 shadow-xl ">
      <div className="card-body">

        <form onSubmit={handleSubmit(onSubmit)} >
          <div className='bg-black'>



            <div className="form-control  w-full max-w-xs">
              <label className="label">
                <span className="label-text">Dress Name</span>

              </label>
              <input type="text"

                placeholder="Dress Name "
                className="input input-bordered w-full max-w-xs"
                {...register("name", {

                  required: {
                    value: true,
                    message: "Dress Name is required"
                  },

                })}
              />
              <label className="label">
                {errors.dressName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.dressName.message}</span>}
                {errors.dressName?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.dressName.message}</span>}

              </label>
            </div>

            <div className="form-control  w-full max-w-xs">
              <label className="label">
                <span className="label-text">Seller Name</span>

              </label>
              <input type="text"

                placeholder="Seller Name"
                className="input input-bordered w-full max-w-xs"
                {...register("seller", {

                  required: {
                    value: true,
                    message: "seller Name is required"
                  },

                })}
              />
              <label className="label">
                {errors.seller?.type === 'required' && <span className="label-text-alt text-red-500">{errors.seller.message}</span>}
                {errors.seller?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.seller.message}</span>}

              </label>
            </div>






            <div className="form-control  w-full max-w-xs">
              <label className="label">
                <span className="label-text">Price</span>

              </label>
              <input type="text"

                placeholder="Please Price "
                className="input input-bordered w-full max-w-xs"
                {...register("price", {

                  required: {
                    value: true,
                    message: "price is required"
                  },

                })}
              />
              <label className="label">
                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                {errors.price?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}

              </label>
            </div>
            
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Sell title</span>
              </label>
              <select {...register('sell')} class="select input-bordered w-full max-w-xs">
                {
                  title.map(service => <option
                    key={service._id}
                    value={service.name}
                  >{service.name}</option>)
                }
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                className="input input-bordered w-full max-w-xs"
                {...register("image", {
                  required: {
                    value: true,
                    message: 'Image is Required'
                  }
                })}
              />
              <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
              </label>
            </div>




            <input className='btn w-full max-w-xs text-white' type="submit" value="ADD a Dress" />

          </div>
        </form>
      </div>
    </div>
  </div>

</div>
 );
};

export default AddProducts;