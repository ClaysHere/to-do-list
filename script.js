tambah = document.getElementById("add-todo")

// MENAMBAHKAN DAFTAR TO DO LIST
tambah.addEventListener("click", function () {
    const todoText = document.getElementById("todo-text").value;
  
    if (todoText.trim() === "") {
      return;
    }
  
    const todoElement = document.createElement("div");
    todoElement.className = "elemen-todo flex justify-between pb-4";
  
    const todoParagraph = document.createElement("p");
    todoParagraph.className = "word";
    todoParagraph.textContent = todoText;
  
    const updateButton = document.createElement("button");
    updateButton.className =
      "edit-todo bg-sky-600 rounded px-2 mr-2 text-white hover:scale-110";
    updateButton.textContent = "Update";
  
    const deleteButton = document.createElement("button");
    deleteButton.className =
      "hapus-todo bg-yellow-600 rounded px-2 text-white hover:scale-110";
    deleteButton.textContent = "Delete";
  
    const todoContainer = document.createElement("div");
    todoContainer.appendChild(updateButton);
    todoContainer.appendChild(deleteButton);
  
    todoElement.appendChild(todoParagraph);
    todoElement.appendChild(todoContainer);
  
    const container = document.getElementById("container");
    container.appendChild(todoElement);
  
    document.getElementById("todo-text").value = "";
    
    // MENGUPDATE NILAI DARI DAFTAR TODO LIST
    updateButton.addEventListener("click", function () {
      const todoTextInput = document.createElement("input");
      todoTextInput.className = "shadow-xl border border-slate-500 rounded";
      todoTextInput.type = "text";
      todoTextInput.value = "";
  
      updateButton.style.display = "none";
      deleteButton.style.display = "none";
      todoElement.appendChild(todoTextInput);
  
      const saveButton = document.createElement("button");
      saveButton.className =
        "edit-todo bg-green-600 rounded px-2 text-white hover:scale-110";
      saveButton.textContent = "Save";
      saveButton.addEventListener("click", function () {
        if (todoTextInput.value.trim() === "") {
          return;
        }
  
        todoParagraph.textContent = todoTextInput.value;
        todoElement.removeChild(todoTextInput);
        todoElement.removeChild(saveButton);
        updateButton.style.display = "inline-block";
        deleteButton.style.display = "inline-block";
      });
  
      todoElement.appendChild(saveButton);
    });
    
    // MENGHAPUS DAFTAR DARI TODO LIST
    deleteButton.addEventListener("click", function () {
      container.removeChild(todoElement);
    });
  });
  