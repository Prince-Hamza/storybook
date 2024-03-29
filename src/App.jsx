import { useState, useEffect } from 'react'
import Main from './comps/Main'
import './App.css'
import { Col, Form, Row } from 'react-bootstrap'
import { BrowserRouter, Route, Routes,Link, useNavigate } from 'react-router-dom'
import Profile from './comps/Profile'
import Feed from './comps/Feed'
import Groups from './comps/Groups'
import Dynamic from './Library/Dynamic'

export default function App(props) {

  const [appInfo, setAppInfo] = useState({ loggedIn: false, count: 0 })

  return (
    <div>
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/Profile/:id" element={<Profile />} />
      <Route exact path="/Feed/:id" element={<Feed />} />
      <Route exact path="/Groups/:id" element={<Groups />} />
      <Route exact path="/Search/:id" element={<Dynamic />} />
    </Routes>






    </div>





  )
}



export function AppWithRouter () {
  const navigate = useNavigate()
  return <App navigate={navigate} />
}
