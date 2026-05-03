
function updateCounter() {
    const count = document.querySelectorAll("#taskList li").length;
    document.getElementById("design").innerText = "Tasks: " + count;
}

function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
    if(task) {
        const li = document.createElement("li");
        li.textContent = task;

        // כפתור מחיקה
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";
        deleteBtn.onclick = (e) => {
            e.stopPropagation(); // למניעת אירועים אחרים
            li.remove();
            updateCounter();
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
      <button onClick={addTask} disabled={!newTask.trim()}>הוסף</button>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li> // הצגת כל משימה ברשימה
        ))}
      </ul>
    </div>
  );
}
        li.appendChild(deleteBtn);
        document.getElementById("taskList").appendChild(li);

        input.value = ""; // ניקוי השדה
        updateCounter();
    }
}
function f(){}