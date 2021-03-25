import React, { useState, useEffect, useContext } from 'react';
import './Menu.css';
import MainContext from '../MainContext'

function Menu() {
    const context = useContext(MainContext)

    return (
        <div className="navbar">
        <div className="dropdown">
          <button className="dropbtn">Problem Sets
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Top 25 Core CS Easy</a>
          </div>
        </div>
      </div>
    )
}

export default Menu;