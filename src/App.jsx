import { useState } from 'react'
import Main from './comps/Main'
import './App.css'
import { Col, Form, Row } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './comps/Profile'
import Feed from './comps/Feed'
import Groups from './comps/Groups'
import Dynamic from './Library/Dynamic'

function App() {

  const [appInfo, setAppInfo] = useState({ loggedIn: false, count: 0 })

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/Profile/:id" element={<Profile />} />
        <Route exact path="/Feed/:id" element={<Feed />} />
        <Route exact path="/Groups/:id" element={<Groups />} />
        <Route exact path="/Search/:id" element={<Dynamic />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
