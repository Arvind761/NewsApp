import React, {  useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
export default function App(){
  const [language,setLanguage]=useState("hi")
  const [search,setSearch]=useState("")
 
 const  changeLanguage= (data)=>{
    setLanguage(data)
  }
  const changeSearch= (data)=>{
    setSearch(data)
  }
 
    return (
      <BrowserRouter>
        <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch}/>
        <Routes>
          <Route path='' element={<Home search={search} language={language} q="All"/>} />
          <Route path='/All' element={<Home search={search} language={language} q="All" />} />
          <Route path='/Politics' element={<Home search={search} language={language} q="Politics" />} />
          <Route path='/Education' element={<Home search={search} language={language} q="Education" />} />
          <Route path='/Crime' element={<Home search={search} language={language} q="Crime" />} />
          <Route path='/Science' element={<Home search={search} language={language} q="Science" />} />
          <Route path='/Technology' element={<Home search={search} language={language} q="Technology" />} />
          <Route path='/Entertainment' element={<Home search={search} language={language} q="Entertainment" />} />
          <Route path='/Sports' element={<Home search={search} language={language} q="Sports" />} />
          <Route path='/Cricket' element={<Home search={search} language={language} q="Cricket" />} />
          <Route path='/Covid-19' element={<Home search={search} language={language} q="Covid-19" />} />
          <Route path='/Jokes' element={<Home search={search} language={language} q="Jokes" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }

