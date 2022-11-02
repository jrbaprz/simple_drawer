import React from 'react';


const Header = (props) => {
    return (
      <nav className="grid grid-cols-3 p-3 bg-gray-100 border-b-gray-300 border-b-[1.25px]">
          <span className="flex items-center gap-5 mr-auto cursor-pointer">
              <ul onMouseEnter={props.onMouseEnter}>Men</ul>
              <ul>Women</ul>
          </span>

          <span className="flex justify-center font-bold uppercase tracking-widest">Logo</span>

          <span className="flex items-center gap-5 ml-auto cursor-pointer">
              <ul>About</ul>
              <ul>Help</ul>
          </span>
      </nav>
    );
};

export default Header