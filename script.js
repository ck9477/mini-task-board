function updateCounter() {
    const count = document.querySelectorAll("li").length;
    document.getElementById("design").innerText = "Tasks: " + count;
}