import React, { useState, useEffect, useContext } from 'react';
import './Menu.css';
import MainContext from '../MainContext'

function Menu() {
    const context = useContext(MainContext)

    return (
        <div class="navbar">
        <div class="dropdown">
          <button class="dropbtn">Problem Sets
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Top 25 Core CS Easy</a>
          </div>
        </div>
      </div>
    )
}

export default Menu;