import { Link } from 'react-router-dom';

import React from 'react';

const Navbar = () => (
  <div className="container">
    <nav>
      <div>
        <h2 className="logo">Bookstore CMS</h2>
      </div>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
