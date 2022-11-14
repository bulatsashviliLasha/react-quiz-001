import React, {Component} from "react";
import ActiveQuiz from "../../components/active-quiz/ActiveQuiz";
import FinishedQuiz from "../../components/finished-quiz/FinishedQuiz";
import "./quiz.scss";

class Quiz extends Component {
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                id: 1,
                answers: [
                    {text: 'Facebook', id: 1},
                    {text: 'Google', id: 2},
                    {text: 'Microsoft', id: 3},
                    {text: 'None', id: 4},
                ],
                question: 'What was Meta Platforms Inc formerly known as?',
                rightAnswerId: 1,
            },
            {
                id: 2,
                answers: [
                    {text: 'Pig', id: 1},
                    {text: 'Horse', id: 2},
                    {text: 'Cow', id: 3},
                    {text: 'Lion', id: 4},
                ],
                question: 'The logo for luxury car maker Porsche features which animal?',
                rightAnswerId: 2,
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]){
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true,
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null,
                    })
                }

                window.clearTimeout(timeout)
            }, 1000)

        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }
    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    render() {
        return (
            <div className="quiz">
                <div className="quiz-wrapper">
                    <h1>Answer all questions</h1>

                    {
                        this.state.isFinished ?
                            <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            /> :
                            <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;
