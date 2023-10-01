import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { edit_book_by_id, delete_book_by_id } from '../container/action/BookAction';
import BookEdit from './BookEdit'

const BookShow = ({ book }) => {
    const [showEdit, setShowEdit] = useState(false)
    const Dispatch = useDispatch();
    const handleDeleteClick = () => {
        Dispatch(delete_book_by_id(book.id))
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false)
        Dispatch(edit_book_by_id(id, newTitle))
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />
    }

    return (
        <div className='book-show'>
            <img
                alt='books'
                src={`https://picsum.photos/seed/${book.id}/300/200`}
            />
            {content}
            <div className='actions'>
                <button className='edit' onClick={handleEditClick}> Edit </button>
                <button className='delete' onClick={handleDeleteClick}> Delete </button>
            </div>
        </div>
    )
}

export default BookShow