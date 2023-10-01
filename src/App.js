import React from 'react'
import { Provider } from 'react-redux';
import store from './container/store/store';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import './index.css'

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
      </div>
    </Provider>
  )
}

export default App;