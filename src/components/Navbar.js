import { Link } from 'react-router-dom';

import React, { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="header">
      <nav className="container">
        <div className="navigation">
          <div>
            <h2 className="logo">Bookstore CMS</h2>
          </div>
          <ul>
            <li>
              <Link to="/" className={active ? 'active' : ''} onClick={() => { setActive(true); }}>Books</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </div>
        <div className="profile-icon">
          <span className="material-symbols-outlined person-icon">person</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
