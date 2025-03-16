import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Layout from '../pages/Layout'
import Library from '../pages/Library'
import Institutional from '../pages/Institutional'

const Paths = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/acervo' element={<Library />} />
              <Route path='/institucional' element={<Institutional />} />
            </Route>           
        </Routes>
    </Router>
  )
}

export default Paths