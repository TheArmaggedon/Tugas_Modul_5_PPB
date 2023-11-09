import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { HiBookOpen, HiDesktopComputer, HiHome } from 'react-icons/hi'
import { MdGroup } from 'react-icons/md'
import './App.css'
import Movie from './pages/Movie'
import Profile from './pages/Profile'
import Book from './pages/Book'
import Games from './pages/Games'
import Detail from './pages/Detail'


function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 38</p>
      </header>
      <Routes>
        <Route path="/movie" element={<Movie />} />
        <Route path="/" element={<Movie />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/book" element={<Book />} />
        <Route path="/games" element={<Games />} />
        <Route path="/book/detail/:id" element= {<Detail />} />
        <Route path="/game/detail/:id" element= {<Detail />} />
        <Route path="/movie/detail/:id" element= {<Detail />} />


      </Routes>
      <footer>
        <NavLink to="/movie" className="iconWrapper">
          <HiHome className="icon" />
          Movie
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" />
          Profile
        </NavLink>
        <NavLink to="/book" className="iconWrapper">
          <HiBookOpen className='icon' />
          Book
        </NavLink>
        <NavLink to="/games" className="iconWrapper">
          <HiDesktopComputer className='icon'/>
          Games
        </NavLink>
        
      </footer>
    </BrowserRouter>
  )
}
export default App
