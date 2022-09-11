import React from 'react';

const Contack = () => {
    return (
        <div>
            <div className='bg-white px-10 py-14  contack'>
                <div className='text-center pb-14 text-black'>
                    <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>
                        Contact Us
                    </p>
                    <h1 className='text-4xl'>Stay connected with us</h1>
                </div>
                <div className='grid grid-cols-1 justify-items-center gap-5'>
                    <input
                        type='text'
                        placeholder='Email Address'
                        className='input w-full max-w-md'
                    />
                    <input
                        type='text'
                        placeholder='Subject'
                        className='input w-full max-w-md'
                    />
                    <textarea
                        className='textarea w-full max-w-md'
                        placeholder='Your message'
                        rows={6}
                    ></textarea>
                    <button type="button" className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-black font-bold ...">
                        get Start
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contack;