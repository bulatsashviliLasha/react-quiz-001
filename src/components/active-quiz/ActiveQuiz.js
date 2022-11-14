import React from "react";
import AnswersList from "./answers-list/AnswersList";
import "./active-quiz.scss";

const ActiveQuiz = ({question, state, answers, onAnswerClick, quizLength, answerNumber}) => (
    <div className="active-quiz">
        <p className="question">
            <span>
                <strong>{answerNumber}.</strong>&nbsp;
                {question}
            </span>
            <small>{answerNumber} from {quizLength }</small>
        </p>

        <AnswersList
            answers={answers}
            onAnswerClick={onAnswerClick}
            state={state}
        />
    </div>
)

export default ActiveQuiz;
