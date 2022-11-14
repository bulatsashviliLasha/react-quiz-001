import React from "react";
import AnswerItem from "./answer-item/AnswerItem";
import "./answers-list.scss";

const AnswersList = props => (
    <ul className="answers-list">
        { props.answers.map((answer, index) => {
            return (
              <AnswerItem
                  state={props.state ? props.state[answer.id] : null}
                  answer={answer}
                  key={index}
                  onAnswerClick={props.onAnswerClick}
              />
            )
        })}
    </ul>
)

export default AnswersList;
