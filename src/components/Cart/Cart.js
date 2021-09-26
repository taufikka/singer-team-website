import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const { cart } = props;
    // total salary calculation
    let total = 0;
    for (const singer of cart) {
        total = total + parseInt(singer.salary);
    }

    return (
        <div className='border m-1 p-2 sticky-top cardColor'>
            {/* icon add and total added singer show */}
            <h4> <FontAwesomeIcon icon={faUser} /> Singer Added: {cart.length}</h4>
            {/* icon add and total singer salary show */}
            <h4> <FontAwesomeIcon icon={faMoneyCheckAlt} /> Total Cost: ${total}</h4>
            <ul>
                {/*  added singer name show*/}
                {
                    cart.map(singer => <li className='fw-bolder' key={singer.id}>
                        Name: {singer.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;