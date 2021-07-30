import { useState } from 'react';

const Navbar = () => {
  const [isCollapse, setIsCollapse] = useState(true);

  const handleCollapse = () => setIsCollapse((isCollapse) => !isCollapse);

  return (
    <nav className="navbar navbar-lg bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        <a href="#!" className="navbar-brand">
          Frontend Bootcamp
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-controls="navmenu"
          aria-label="Toggle navigation"
          aria-expanded={true}
          onClick={handleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          id="navmenu"
          className={`${isCollapse ? 'collapse' : ''} navbar-collapse`}
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#learn" className="nav-link">
                What You'll Learn
              </a>
              <li className="nav-item">
                <a href="#questions" className="nav-link">
                  Questions
                </a>
              </li>
              <li className="nav-item">
                <a href="#instructors" className="nav-link">
                  Instructors
                </a>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
