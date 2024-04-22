import { useState } from 'react'
import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import CourseView from './pages/CourseView/CourseView'
function App() {

  return (

      <div>
        <header>
          <Header />
        </header>
        <Router>
        <div className='main'>
          <Routes>
          <Route path="/cursos/:courseId/subcurso/:subCourseId" element={<CourseView />} />
          <Route path="/cursos/:courseId" element={<CourseView />} />

            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
      </div>
  )
}

export default App
