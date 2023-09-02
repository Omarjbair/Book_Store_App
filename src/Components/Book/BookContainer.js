import React, { Fragment ,useEffect ,useState} from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import { getBooks } from '../../Store/bookSlice';
import { useDispatch , useSelector} from 'react-redux';
import './book.css';

const PostContainer = () => {
    const [readIdx,setReadIdx] = useState(-1);
    const dispatch = useDispatch();
    const {books,isLoading} = useSelector((state) => state.book);
    const {isLogin} = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getBooks());
    },[dispatch])
    
    
    return (
    <Fragment>
    <hr className='my-5' />
    <div className='row'>
        <div className='col'>
        <BooksList data = {books} isLoad = {isLoading} isLogin = {isLogin} setBookDetails = {setReadIdx}/>
        </div>
        <div className='col side-line'>
        <BookInfo bookDetailsIdx = {readIdx} />
        </div>
    </div>
    </Fragment>
    );
};

export default PostContainer;