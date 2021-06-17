import React, { useState, useEffect, useContext } from "react";
import "./Menu.css";
import MainContext from "../MainContext";
import APIService from "../api_services";
import { useDispatch } from "react-redux";
import { renameProblemSet } from "../features/renameProblemSetSlice";

const gear = require("../Img/gear_icon.png");

function Menu() {
  const dispatch = useDispatch();

  const context = useContext(MainContext);
  const [newSetName, setNewSetName] = useState("");
  const [allSetNames, setAllSetNames] = useState([]);

  useEffect(() => {
    APIService.getProblemSets().then((res) => {
      setAllSetNames(res);
      if (res[0]) {
        dispatch(renameProblemSet(res[0].set_name));
      }
    });
  }, []);

  function handleProblemSetNameChanged(e) {
    let newProblemSet = e.target.value;
    setNewSetName(newProblemSet);
  }

  function handleAddProblemSet() {
    window.alert(
      "Thanks for trying Lightning Algo. This is just a demo of what I'm working on so you don't have access to this feature quite yet ;-)"
    );

    // APIService.addProblemSet({"set_name": newSetName})
    // .then((response) => {
    //   setAllSetNames([...allSetNames, {set_name: response[0].set_name}])
    //     dispatch(renameProblemSet(response[0].set_name))
    // })
    // setNewSetName("")
  }

  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn">
          Algorithm Set
          <i className="fa fa-caret-down"></i>
        </button>

        <div className="dropdown-content">
          {allSetNames.map((item, i) => {
            return (
              <p
                className="menu-item"
                key={i}
                onClick={() => dispatch(renameProblemSet(item.set_name))}
              >
                {item.set_name}
              </p>
            );
          })}
          <input
            className="problem-set-input"
            type="text"
            placeholder="New Algorithm Set"
            onChange={handleProblemSetNameChanged}
          />{" "}
          <button className="add-set-button" onClick={handleAddProblemSet}>
            Add
          </button>
        </div>
      </div>
      <img
        src={gear}
        onClick={() => context.setToggleAddModal(!context.toggleAddModal)}
        className="admin-gear"
        alt=""
      />
    </div>
  );
}

export default Menu;
