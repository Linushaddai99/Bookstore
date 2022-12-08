import React from 'react';

const FormInput = () => (
  <form>
    <h2>ADD NEW BOOK</h2>
    <input type="text" name="title" placeholder="Book Title" />
    <input type="text" name="author" placeholder="Book Author" />
    <button type="button">ADD BOOK</button>
  </form>
);

export default FormInput;
