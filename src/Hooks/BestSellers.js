import React, { useEffect, useState } from 'react';

const BestSellers = () => {
    const [bestSellerses, setBestSellerses] = useState([]);

    useEffect(() => {
        fetch('BestSeller.json')
            .then(res => res.json())
            .then(data => setBestSellerses(data))
    }, [])
    return [bestSellerses, setBestSellerses]
};

export default BestSellers;