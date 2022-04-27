import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav bg-secondary d-flex justify-content-around nav-tabs">
      <li className="bg-dark text-white">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link text-white text-decoration-none'}
        >
          Home
        </a>
      </li>
      <li className="bg-dark text-white">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link text-white text-decoration-none'}
        >
          About
        </a>
      </li>
      <li className="bg-dark text-white">
        <a
          href="#mywork"
          onClick={() => handlePageChange('myWork')}

          className={currentPage === 'myWork' ? 'nav-link active' : 'nav-link text-white text-decoration-none'}
        >
          My Work
        </a>
      </li>
      <li className="bg-dark text-white">
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link text-white text-decoration-none'}
        >
          Contact
        </a>
      </li>
    </ul >
  );
}

export default NavTabs;
