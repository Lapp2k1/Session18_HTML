const todoList = [
    {id: 1, todo: "Have breakfast", completed: false},
    {id: 2, todo: "Have breakfast", completed: true},
    {id: 3, todo: "Have breakfast", completed: false},
  ];
  function addTodo(todo) {
    let newId = 0;
    for ( let i = 0; i < todoList.length; i++) {
      newId - todoList.length +1;
    }
    let newTodo = {
      id: newId,
      todo: todo,
      completed: false,
    };
    todoList.push(newTodo);  
  }
  
  addTodo("Đi tắm");
  console.log(todoList);
  function addTodo(todo) {
    let newId = 0;
    for ( let i = 0; i < todoList.length; i++) {
      newId - todoList.length +1;
    }
    let newTodo = {
      id: newId,
      todo: todo,
      completed: false,
    };
    todoList.push(newTodo);  
  }
  
  addTodo("Đi tắm");
  console.log(todoList);
  function removeTodo(id) {
  let check = -1;
  for(let i = 0; i < todoList.length; i++) {
    if (id == todoList[i].id) {
      check = i;
    }
  }
  todoList.splice(check, 1);
}

removeTpodo(2);
console.log(todoList);