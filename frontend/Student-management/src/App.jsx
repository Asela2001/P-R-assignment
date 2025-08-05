import React from 'react'
import Home from './assets/pages/Home'
import { Route, Routes } from 'react-router-dom'
import Student from './assets/pages/Student'
import Create from './assets/pages/create'

const App = () => {
  return (<div>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create' element={<Create />}/>
        <Route path='/student/:id' element={<Student/>}/>
    </Routes>
    </div>
  )
}

export default App