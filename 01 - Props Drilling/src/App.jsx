import React from 'react'
import './App.css'
import Card from './components/Card.jsx'
import jobs from './Dummy Data/jobs.js'



function App() {
  return (
    <div className="parent">
      {jobs.map((job) => (
        <Card key={job.id} {...job} />
      ))
      }
    </div>
  )
}

export default App