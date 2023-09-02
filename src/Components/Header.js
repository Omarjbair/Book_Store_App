import React from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {logInOut} from '../Store/authSlice'

const Header = () => {
    const {failed} = useSelector((state) => state.book);
    const {isLogin} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    return (
    <Fragment>
        {failed && (<div className='alert alert-danger mb-0'>
        {failed}
        </div>)}
        <nav className='navbar navbar-dark bg-dark'>
        <span className='navbar-brand mb-0 h1'>My Books</span>

        <button className='btn btn-outline-primary' type='submit' onClick={() => dispatch(logInOut())}>
        {isLogin?('Log Out'):('Log In')}
        </button>
        </nav>
        </Fragment>
    );
};

export default Header;