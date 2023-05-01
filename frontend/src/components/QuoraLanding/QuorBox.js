import "./QuoraBox.css";
import "react-responsive-modal/styles.css";
import "./QHeader.css";
import { Avatar } from "@material-ui/core";
import QHeader from "./QHeader";
import { AddQuestion } from "./AddQuestionModel";

const addQuestion = () => {
  return (
    <QHeader />
  )
}

function QuorBox() {
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar
          src={
            "http://tinygraphs.com/labs/isogrids/hexa16/tinygraphs?theme=heatwave&numcolors=4&size=220&fmt=svg"
          }
          className="quoraBox__infoAvatar"
        />
        {/* <h5>{user?.displayName ? user?.displayName : user?.email}</h5> */}
      </div>
      <div className="quoraBox__quora">
        {/* <p>What is your question or link?</p> */}
        <AddQuestion title='What is your question or link?' />
        {/* <button onClick={addQuestion}>What is your question or link?</button> */}
      </div>
    </div>
  );
}

export default QuorBox

