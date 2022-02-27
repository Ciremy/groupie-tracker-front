import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";

import Home from './pages/Home'
import GroupDetail from './pages/GroupDetail'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="details/:id" element={<GroupDetail />}>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router