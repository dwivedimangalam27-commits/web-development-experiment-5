function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    var li = document.createElement("li");
    var text = document.createElement("span");

    text.textContent = task;

    text.onclick = function() {
        text.classList.toggle("completed");
    };

    var del = document.createElement("button");
    del.textContent = "Delete";

    del.onclick = function() {
        li.remove();
    };

    li.appendChild(text);
    li.appendChild(del);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
