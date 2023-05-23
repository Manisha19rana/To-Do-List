function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value === "") {
      alert("Please enter a task!");
      return;
    }
  
    var task = document.createElement("li");
    var taskText = document.createTextNode(taskInput.value);
  
    task.appendChild(taskText);
    taskList.appendChild(task);
  
    taskInput.value = "";
  
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("delete-button");
    task.appendChild(deleteButton);
  
    deleteButton.addEventListener("click", function() {
      task.remove();
    });
  
    task.addEventListener("click", function() {
      task.classList.toggle("completed");
    });
  }
  
  window.addEventListener("resize", function() {
    var taskInput = document.getElementById("taskInput");
    var button = document.querySelector("button");
  
    if (window.innerWidth <= 600) {
      taskInput.style.marginLeft = "0";
      taskInput.style.width = "100%";
      button.style.marginLeft = "0";
      button.style.width = "100%";
    } else {
      taskInput.style.marginLeft = "22px";
      taskInput.style.width = "70%";
      button.style.marginLeft = "";
      button.style.width = "";
    }
  });
  