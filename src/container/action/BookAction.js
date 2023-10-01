import { createBook, editBookById, deleteBookById } from "../Types/BookTypes"

const create_book = (title) => {
    return {
        type: createBook,
        payload: {
            title: title
        }
    }
}
const edit_book_by_id = (id, newTitle) => {
    return {
        type: editBookById,
        payload: {
            id: id,
            newTitle: newTitle
        }
    }
}
const delete_book_by_id = (id) => {
    return {
        type: deleteBookById,
        payload: {
            id: id
        }
    }
}
export { create_book, edit_book_by_id, delete_book_by_id };