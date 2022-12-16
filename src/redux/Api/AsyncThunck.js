import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const uniqueId = 'XHobJ3lMGrkYAnxpEfAU';

export const getBooks = createAsyncThunk('bookstore/getbooks', async () => {
  try {
    const response = await axios.get(`${baseUrl}/${uniqueId}/books`);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const createBook = createAsyncThunk('bookstore/createBook', async (action) => {
  try {
    await axios.post(`${baseUrl}/${uniqueId}/books`, action);
    return action;
  } catch (error) {
    return error;
  }
});

export const deleteBook = createAsyncThunk('bookstore/deleteBook', async (action = {}) => {
  try {
    await axios.delete(`${baseUrl}/${uniqueId}/books/${action.item_id}`, action);
    return action.item_id;
  } catch (error) {
    return error;
  }
});
