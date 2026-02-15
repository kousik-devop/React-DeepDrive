import React, { useState } from 'react'

function AdvancedConcept() {
    const [user, setUser] = useState([
        {name: "John", age: 30, class: 8}
    ]);
    const changeUser = () => {
        const newUser = [...user, {name: "Aman", age: 25, class : 9}];
        setUser(newUser);
    }
  return (
    <div>
        {user.map((user) => (
            <div>
                <h1>{user.name}</h1>
                <p>{user.age}</p>
                <p>{user.class}</p>
            </div>
        ))}
        <button onClick = {changeUser}>Change Name</button>
    </div>
  )
}

export default AdvancedConcept