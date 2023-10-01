import { createBook, editBookById, deleteBookById } from "../Types/BookTypes";

const initialState = {
    books: []
};

const BookReducer = (state = initialState.books, action) => {
    switch (action.type) {
        case createBook:
            const newBook = {
                id: Math.round(Math.random() * 9999),
                title: action.payload.title
            };
            return [...state, newBook];

        case editBookById:
            const { id, newTitle } = action.payload;
            return state.map((book) => (book.id === id ? { ...book, title: newTitle } : book));

        case deleteBookById:
            const bookId = action.payload.id;
            return state.filter((book) => book.id !== bookId);

        default:
            return state;
    }
};

export default BookReducer;
