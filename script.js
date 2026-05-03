import React, { useState } from 'react';

function TodoApp() {
  // מצב לרשימת המשימות
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // פונקציה להוספת משימה
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask(''); // ניקוי השדה אחרי הוספה
    }
  };

  return (
    <div>
      <h1>רשימת משימות</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)} // עדכון של state
        placeholder="הוסף משימה"
      />
      <button onClick={addTask}>הוסף</button>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li> // הצגת כל משימה ברשימה
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;