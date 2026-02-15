import React, { useState } from 'react'
import CreateTask from './components/CreateTask.jsx'
import RecentTask from './components/RecentTask.jsx'

function App() {

  const [tasks, setTasks] = useState([]);

  return (
    <div className="bg-gray-900 text-white min-h-screen lg:flex">
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <RecentTask tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App