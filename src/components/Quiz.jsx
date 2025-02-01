import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Quiz = () => {
    const [questions, setQuizs] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hide, setHide] = useState(false);
    const [feedback,setFeedback]=useState({})

    useEffect(() => {
        fetchQuiz();
    }, []);

    const fetchQuiz = async() => {
        try {
            const response = await axios.get(`https://nasal-cerulean-velvet.glitch.me/questions`);
            console.log(response.data.questions)
            setQuizs(response.data.questions);
            setLoading(false);
        }
        catch (err) {
            setLoading(false);
            console.log(err)
        }
    }
    const hideAnswer = (id) => {
        setHide(false)
    }

    const handleOpt = (id,opt) => {
        const find = questions.find((ele) => ele.id == id);
        if (find) {
            setFeedback({
                [id]:opt==find.answer?`Correct! answer is ${find.answer}`:`Incorrect! answer is ${find.answer}`
            })
        }
    }

    const handleSubmitQuiz = () => {
        const response = questions.reduce((acc, curr) => {
            return ans
        })
        Navigate('/result')
    }
   
  return (
      <div>
          <h2>Take A Quiz</h2>
          {
              questions.length > 0 ?
                  (
                      questions.map((ele) => {
                          <div key={ele.id}>
                              <h3>Q.no: {ele.id} {ele.question}</h3>
                              {ele.options.map((opt) => {
                                  <input type='radio'
                                  name=''
                                  value={opt}
                                      checked={() => handleOpt(ele.id, opt)} />
                                  {opt}
                              })}
                              <button onClick={hideAnswer(ele.id)}>Hide Answer</button>
                              {feedback[ele.id] && <p>{feedback[ele.id]}</p>}
                          </div>
                      })
                  ):("")
          }
          <button onClick={handleSubmitQuiz}>Submit Quiz</button>
    </div>
  )
}

export default Quiz;