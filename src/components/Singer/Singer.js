import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import('./Singer.css')

const Singer = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    //console.log(props)
    const { name, age, country, image, role, salary } = props.singer;

    //console.log(props)

    return (
        <div className='col-md-4 mb-3'>
            <div className="card h-100" style={{ width: '18rem' }}>
                <img src={image} className="card-img-top rounded-circle w-25 mx-auto mt-3" alt="..." />
                <div className="card-body text-center">
                    <h3 className="card-title fw-bolder">{name}</h3>
                    <h5>Role: {role}</h5>
                    <h6>Age: {age}</h6>
                    <h6>Country: {country}</h6>
                    <h6>Salary: ${salary}</h6>
                    <button onClick={() => { props.handleSinger(props.singer) }} className='btn btn-danger mt-2'> {element} Add to Cart</button>
                    <div className='d-flex justify-content-evenly fs-2 mt-3 text-primary button'>
                        <p><i class="fab fa-facebook-square"></i></p>
                        <p> <i class="fab fa-twitter-square"></i></p>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Singer;