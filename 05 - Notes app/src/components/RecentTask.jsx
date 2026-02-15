import React from 'react'

function RecentTask({tasks, setTasks}) {
  return (
    <div className="p-4 w-full lg:w-1/2">
        <h1 className="text-2xl font-bold mb-4">Recent Task</h1>
        <div className="flex flex-wrap gap-5">
            {tasks.map((task, index) => (
            <div key={index} className="border flex flex-col flex-wrap items-center justify-between h-52 w-40 bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mSNf08T0LXwuFDcQb8V391cI1sOI7OyqQQ&s')] border-gray-300 rounded p-4">
                <div className="text-center text-black">
                    <h2 className="text-xl font-bold">{task.name.toUpperCase()}</h2>
                    <p className="text-sm text-gray-800">{task.description}</p>
                </div>
                <button onClick={() => setTasks(tasks.filter((_, i) => i !== index))} className="mt-2 w-full bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
            </div>
        ))}
        </div>
    </div>
  )
}

export default RecentTask