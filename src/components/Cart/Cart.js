import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {

    // console.log(props.cart)
    const { cart } = props;

    let total = 0;
    for (const singer of cart) {
        total = total + parseInt(singer.salary);
    }

    return (
        <div>
            <h4> <FontAwesomeIcon icon={faUser} /> Singer Added: {cart.length}</h4>
            <h4> <FontAwesomeIcon icon={faMoneyCheckAlt} /> Total Cost: ${total}</h4>
            <ul>
                {
                    cart.map(singer => <li>{singer.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;