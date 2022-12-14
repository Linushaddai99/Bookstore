import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid4 } from 'uuid';

const initialState = [];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      if (action.payload.title && action.payload.author) {
        const newBook = {
          id: uuid4(),
          title: action.payload.title,
          author: action.payload.author,
        };
        state.push(newBook);
      } else {
        return state;
      }
      return '';
    },
    removeBook(state, action) {
      if (action.payload) {
        state.filter((book) => {
          if (book.id !== action.payload) {
            return book;
          }
          return '';
        });
      } else {
        return state;
      }
      return '';
    },
  },
});

export const bookAction = bookSlice.actions;
export default bookSlice.reducer;
