import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../redux/Api/AsyncThunck';
import BookList from './BookList';
import FormInput from './FormInput';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="container">
      <BookList books={books} />
      <FormInput />
    </div>
  );
};

export default Books;
