import React from 'react';
import BookShow from './BookShow';
import { useSelector } from 'react-redux';

const BookList = () => {
    const books = useSelector(state => state);
    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />;
    });

    return (
        <div className='book-list'>{renderedBooks}</div>
    );
}

export default BookList;
