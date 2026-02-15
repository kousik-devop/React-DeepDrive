import React, { useState } from 'react'

function CreateTask({tasks, setTasks}) {

    const [taskName, settaskName] = useState("")
    const [taskDescription, settaskDescription] = useState("")


    const submitHandler = (e) => {
        e.preventDefault();
        setTasks([...tasks, {name: taskName, description: taskDescription}])
        settaskName("")
        settaskDescription("")
    }

  return (
    <div className="p-4 w-full lg:w-1/2 h-1/2">
        <form onSubmit = {(e) => submitHandler(e)} action="">
            <h1 className="text-2xl font-bold mb-4">Add Task</h1>
            <input type="text" placeholder="Enter task name" className="w-full p-2 mb-2 border border-gray-300 rounded" value={taskName} onChange={(e) => settaskName(e.target.value)} />
            <textarea name="taskDescription" id="taskDescription" placeholder="Enter task description" className="w-full p-2 mb-2 border border-gray-300 rounded" value={taskDescription} onChange={(e) => settaskDescription(e.target.value)}></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Task</button>
        </form>
    </div>
  )
}

export default CreateTask