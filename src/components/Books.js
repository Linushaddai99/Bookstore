import BookList from './BookList';
import FormInput from './FormInput';

const Books = () => {
  const books = [];

  return (
    <div className="container">
      <BookList books={books} />
      <FormInput />
    </div>
  );
};

export default Books;
