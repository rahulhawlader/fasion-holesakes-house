import React, { useEffect, useState } from 'react';

const useGirlsDresses = () => {
    const [girlsDreses, setGirlsDreses] = useState([]);


    useEffect(() => {
        fetch('https://radiant-tor-70020.herokuapp.com/girlsdress')
            .then(res => res.json())
            .then(data => setGirlsDreses(data))

    }, [])


    return [girlsDreses, setGirlsDreses]
};

export default useGirlsDresses;