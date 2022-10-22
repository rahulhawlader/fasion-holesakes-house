import React, { useState } from 'react';





const AllProductRow = ({ dress }) => {
    const [dressDelete, setDressDelete] = useState()
    const { name, price, img, seller, _id } = dress
    const handleDelete = (id) => {
        const proceed = window.confirm('are you sure?')

        if (proceed) {
            const url = `https://radiant-tor-70020.herokuapp.com/girlsdress/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainig = dressDelete.filter(dress => dress._id !== id)
                    setDressDelete(remainig)

                })
        }

        window.location.reload(false)
    }








    return (
        <div className="card w-72 mt-4 ml-5 mb-5  bg-white shadow-xl">
            <figure className="px-10 pt-10">
                <img style={{ 'width': '200px', 'height': '200px' }} src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price:  ${price}</p>
                <p> {seller}</p>
                <p>If a dog chews  choose?</p>
                <div className="card-actions">
                    <button onClick={() => handleDelete(dress._id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default AllProductRow;