import React from "react";
import "./finished-quiz.scss";

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total,key) => {
        if (props.results[key] === 'success'){
            total++
        }

        return total
    }, 0)

    return (
        <div className="finished-quiz">
            <ul>
                { props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        props.results[quizItem.id]
                    ]

                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>. &nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}
            </ul>

            <p>Correct {successCount} from {props.quiz.length}</p>

            <div>
                <button onClick={props.onRetry}>Try again</button>
            </div>
        </div>
    )
}

export default FinishedQuiz
