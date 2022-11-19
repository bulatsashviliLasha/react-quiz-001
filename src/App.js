import React, { Component } from "react";
import Layout from "./hoc/layout/Layout";
import { Route, Routes} from "react-router-dom";

import Quiz from "./containers/quiz/Quiz";
import QuizList from "./containers/quiz-list/QuizList";
import QuizCreator from "./containers/quiz-creator/QuizCreator";
import Auth from "./containers/auth/Auth";


class App extends Component {
  render() {
    return (
        <Layout>
            <Routes>
                <Route path="/auth" element={<Auth/>}  />
                <Route path="/quiz-creator" element={<QuizCreator/>}  />
                <Route path="/quiz/:id" element={<Quiz/>}  />
                <Route path="/" element={<QuizList/>}  />
            </Routes>
        </Layout>
    )
  }
}

export default App;
