import React, { useState, useEffect, useContext } from 'react';
import './Menu.css';
import MainContext from '../MainContext'
import context from '../MainContext'

const gear = require('../Img/gear_icon.png')

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
        <img src={gear} onClick={() => context.setToggleAddModal(!context.toggleAddModal)} className="admin-gear" alt=""/>
      </div>
    )
}

export default Menu;