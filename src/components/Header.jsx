import React from 'react';
import Drawer from './Drawer';


const Header = () => {
  return (
    <nav className="grid grid-cols-3 p-3 bg-gray-100 border-b-gray-300 border-b-[1.25px]">
        <span className="flex items-center gap-5 mr-auto">
            <ul>Men</ul>
            <ul>Women</ul>
        </span>

        <span className="flex justify-center font-bold uppercase tracking-widest">Logo</span>

        <span className="flex items-center gap-5 ml-auto">
            <ul>About</ul>
            <ul>Help</ul>
        </span>
    </nav>
  )
}

export default Header