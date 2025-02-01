import React, { useState } from 'react'
import Login from './Login';
import { useNavigate } from 'react-router-dom';
import Quiz from './Quiz';

const Home = () => {

    const [showForm, setShowForm] = useState(false);
    const [showQuizPage, setQuiz] = useState(false);
    const navigate = useNavigate();

    const handleLoginForm = () => {
        setShowForm(true)
    }
    const showQuiz = () => {
        setQuiz(true)
    }
    const showlogin = () => {
        console.log("navigate")
        navigate(`/quiz`);
    }
  return (
      <div>
          <h1>Welcome to the Quiz App!</h1><br />
          <p>Test your knowledge and challange yourself with our quiz. Please
              <button style={{color:"royalblue"}} onClick={handleLoginForm}>Login</button>
              to get Started.
          </p>
          {showForm ? <Login onLogin={showlogin} /> : ""}
          <button onClick={showQuiz}>Quiz</button>
          {showQuizPage?<Quiz/>:""}
    </div>
  )
}

export default Home