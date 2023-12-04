import React from 'react'
import { useEffect } from 'react'
// e47508c1
const API_URL='http://www.omdbapi.com?apikey=e47508c1'
const App = () => {
  const searchMovies=async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`)
    const data=await response.json()
    console.log(data.Search)

  }
  useEffect(()=>{
  searchMovies('Ironman')
  })
  return (
    <div>App</div>
  )
}

export default App