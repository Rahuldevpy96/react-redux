import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { create_book } from '../container/action/BookAction';

const BookCreate = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(create_book(title));
        setTitle('');
    };

    return (
        <div className='book-create'>
            <h3>Add a book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className='button'>Create!</button>
            </form>
        </div>
    );
}

export default BookCreate;
