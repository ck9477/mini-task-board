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

        li.appendChild(deleteBtn);
        document.getElementById("taskList").appendChild(li);

        input.value = ""; // ניקוי השדה
        updateCounter();
    }
}