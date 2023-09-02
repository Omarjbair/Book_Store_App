import React, { Fragment } from 'react';
import { useSelector } from 'react-redux'
const BookInfo = ({bookDetailsIdx}) => {
    const {books} = useSelector((state) => state.book);

    return (
    <Fragment>
        <h2>Book Details</h2>
        {bookDetailsIdx === -1 || books.length === 0?
            (<div className='alert alert-secondary' role='alert'>
            There is no post selected yet. Please select!
            </div>):
            (<div>
                <p className='fw-bold'>Title: {books[bookDetailsIdx].title}</p>
                <p className='fw-light'>Description: {books[bookDetailsIdx].description}</p>
                <p className='fst-italic'>Price: {books[bookDetailsIdx].price}</p>
            </div>)
        }
    </Fragment>
    );
};

export default BookInfo;