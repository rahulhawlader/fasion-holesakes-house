import React, { useEffect, useState } from 'react';

const useGirlsDresses = () => {
    const [girlsDreses, setGirlsDreses] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/girlsdress')
            .then(res => res.json())
            .then(data => setGirlsDreses(data))

    }, [])


    return [girlsDreses, setGirlsDreses]
};

export default useGirlsDresses;