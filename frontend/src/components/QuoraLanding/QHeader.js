import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
// import logo from "./img/QAS logo.png";
import "react-responsive-modal/styles.css";
import CloseIcon from "@material-ui/icons/Close";

import "./QHeader.css";
import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
// import db, { auth } from "../firebase";


import { logout } from "../../Action/User";

import { AddQuestion } from "./AddQuestionModel";

function QHeader() {
  // const user = useSelector(selectUser);
  const dispatch = useDispatch();




  // console.log(userLogin?.userInfo?.userId);

  const Close = (
    <CloseIcon
      style={{
        color: "red",
        border: " 2px solid lightgray",
        borderRadius: "3px",
      }}
    />
  );

  const handleLogout = () => {

    dispatch(logout());
    //alert("Logged out successfully");
  };

  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img
            src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
            alt="logo"
          />
        </div>
        <div className="qHeader__icons">
          <div onClick={() => window.location.href = '/'} className="active qHeader__icon">
            <HomeIcon />
          </div>
          <div onClick={() => window.location.href = '/allSpaces'} className="qHeader__icon">
            <FeaturedPlayListOutlinedIcon />
          </div>
          <div onClick={() => window.location.href = '/myQuestions'} className="qHeader__icon">
            <AssignmentTurnedInOutlinedIcon />
          </div>
          <div onClick={() => window.location.href = '/allUsers'} className="qHeader__icon">
            <PeopleAltOutlinedIcon />
          </div>
          <div onClick={() => window.location.href = '/notifications'} className="qHeader__icon">
            <NotificationsOutlinedIcon />
          </div>
        </div>
        <div className="qHeader__input">
          <SearchIcon />
          <input type="text" placeholder="Search Quora" />
        </div>
        <div className="qHeader__Rem">
          <div
            style={{
              border: "1px solid lightgray",
              borderRadius: "50%",
            }}
            className="qHeader__avatar"
          >
            <Avatar
              onClick={handleLogout}
              className="Avatar"
              src={
                "http://tinygraphs.com/labs/isogrids/hexa16/tinygraphs?theme=heatwave&numcolors=4&size=220&fmt=svg"
              }
            />
          </div>
          {/* adding AddQuestion model file here */}
          <AddQuestion title='addQuestion' />
          {/* <Button onClick={() => setIsModalOpen(true)}>Add Question</Button> */}
        </div>
      </div>
    </div>
  );
}

export default QHeader;
