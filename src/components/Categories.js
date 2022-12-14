import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h2>{categories}</h2>
      <button type="button" onClick={() => { dispatch(checkStatus()); }}>checkStatus</button>
    </div>
  );
};

export default Categories;
