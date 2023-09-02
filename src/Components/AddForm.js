import React , {useRef} from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { insertBooks } from '../Store/bookSlice';
const Addform = () => {
    
    //refs
    const Title = useRef(null);
    const Price = useRef(null);
    const Description = useRef(null);

    const dispatch = useDispatch();
    const {isLogin} = useSelector((state) => state.auth);
    

    const HandelSubmit = (e) =>{
        e.preventDefault();
        const data = {title : Title.current.value ,  price : Price.current.value ,description : Description.current.value};
        dispatch(insertBooks(data));
        Title.current.value = null;
        Price.current.value = null;
        Description.current.value = null;
    };

    return (
    <div className='row'>
    <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={HandelSubmit}>
        <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text' className='form-control' id='title' required ref={Title}/>
        </div>
        <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='number' className='form-control' id='price' required ref={Price} />
        </div>
        <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
            className='form-control'
            id='Description'
            rows='3'
            required
            ref={Description}></textarea>
        </div>
        <button type='submit' className='btn btn-primary' disabled={!isLogin}>
            Submit
        </button>
        </form>
    </div>
    </div>
    );
};

export default Addform;