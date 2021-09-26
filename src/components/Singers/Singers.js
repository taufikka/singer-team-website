import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singer from '../Singer/Singer';
import('./Singers.css')

const Singers = () => {

    const [singers, setSingers] = useState([]);
    const [cart, setCart] = useState([]);

    // data load
    useEffect(() => {
        fetch('./singer.JSON')
            .then(res => res.json())
            .then(data => setSingers(data))
    }, [])

    const handleSinger = singers => {
        const newCart = [...cart, singers];
        setCart(newCart);
    }

    return (
        <>
            <div className='row'>
                <div className='col-md-9'>
                    {/* singer load */}
                    <div className='row container mt-4'>
                        {
                            singers.map(singer => <Singer
                                singer={singer}
                                key={singer.id}
                                handleSinger={handleSinger}
                            ></Singer>)
                        }
                    </div>
                </div>

                <div className='col-md-3 mt-4'>
                    {/* cart show */}
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Singers;