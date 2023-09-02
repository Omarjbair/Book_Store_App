import React from 'react';
import { useDispatch } from 'react-redux';
import {deleteBooks} from '../../Store/bookSlice';

import './book.css';

const BooksList = ({data,isLoad,isLogin,setBookDetails}) => {
        const dispatch = useDispatch();
        const readHandler = (index) =>{
            setBookDetails(index);
        }

        const booksData =  data.map((item,idx) => (
            <li className='list-group-item d-flex  justify-content-between align-items-center' key={item.id}>
                <div>{item.title}</div>
                <div className='btn-group' role='group'>
                <button type='button' className='btn btn-primary' onClick={() => readHandler(idx)}>
                    Read
                </button>
                <button type='button' className='btn btn-danger' disabled={!isLogin} onClick={() => dispatch(deleteBooks(item))}>
                    Delete
                </button>
                </div>
            </li>
        ));
    
    return (
    <div>
        <h2>Books List</h2>
        {isLoad?(<div className="dots"></div>):(<ul className='list-group'>{data.length > 0?booksData:'there is no books available'}</ul>)}
    </div>
    );
};

export default BooksList;