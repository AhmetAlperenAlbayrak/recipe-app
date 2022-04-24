import React from 'react'
import Home from './Home'
import {Route, Routes} from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'

function Pages() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* :type allows us to pass in the cuisine type as a parameter */}
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>

    </div>
  )
}


export default Pages