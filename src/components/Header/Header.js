import React from 'react';
import('./Header.css')

const Header = () => {
    return (
        <div className='border bg-dark text-light w-75 mx-auto text-center mt-3 p-3 rounded-3'>
            <div>
                <h1>Singers team for upcoming concert</h1>
                <h3 className='fw-bolder'>Total Budget: 80 Million</h3>
            </div>
        </div>
    );
};

export default Header;