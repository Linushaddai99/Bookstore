import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid4 } from 'uuid';

const initialState = [
  {
    id: uuid4(),
    title: 'The King Of Dragons',
    author: 'John Doe',
  },
  {
    id: uuid4(),
    title: 'After Life Experienc',
    author: 'Jane Doe',
  },
  {
    id: uuid4(),
    title: 'The Broken Girl',
    author: 'John Doe',
  },
];

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
        // state.push(newBook);
        return [...state, newBook];
      }
      return state;
    },
    removeBook(state, action) {
      if (action.payload) {
        return state.filter((book) => book.id !== action.payload);
      }
      return state;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
