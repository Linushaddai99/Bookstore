import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid4 } from 'uuid';
import { getBooks, createBook, deleteBook } from '../Api/AsyncThunck';

const initialState = {
  books: [],
};

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
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      const books = [];
      Object.keys(action.payload).forEach((key) => {
        books.push({ ...action.payload[key][0], id: key });
      });

      return {
        ...state,
        books: [...books],
      };
    });

    builder.addCase(createBook.fulfilled, (state) => ({
      ...state,
    }));

    builder.addCase(deleteBook.fulfilled, (state, action) => ({
      ...state,
      books: [...state.books.filter((book) => book.id !== action.payload)],
    }));
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
