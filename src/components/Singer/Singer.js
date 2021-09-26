import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import('./Singer.css')

const Singer = (props) => {
    // icon
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    // necessary property
    const { name, age, country, image, role, salary } = props.singer;

    // single singer data
    return (
        <div className='col-md-4 mb-3'>
            <div className="card h-100 cardColor text-dark" style={{ width: '18rem' }}>
                <img src={image} className="image rounded-circle mx-auto mt-3" alt="..." />
                <div className="card-body text-center">
                    <h3 className="card-title fw-bolder">{name}</h3>
                    <h5> <strong>Role: {role}</strong> </h5>
                    <h6><strong>Age: {age}</strong></h6>
                    <h6><strong>Country: {country}</strong></h6>
                    <h6><strong>Salary: ${salary}</strong></h6>
                    <button onClick={() => { props.handleSinger(props.singer) }} className='btn btn-outline-dark mt-2'> {element} Add to Cart</button>
                    <div className='d-flex justify-content-evenly fs-2 mt-3 button'>
                        <a href="https://www.facebook.com/home.php" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
                        <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer"><i className="fab fa-twitter-square"></i></a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Singer;