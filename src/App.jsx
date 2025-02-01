import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Quiz from './components/Quiz'
import Result from './components/Result'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/results' element={<Result/>}/>
      </Routes>
     
    </div>
  )
}

export default App