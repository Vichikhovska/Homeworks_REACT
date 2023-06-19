import React, { useState } from "react";

//styles
import "../../styles/containers/todolist.scss";


function ToDoList() {
  const [toDos, setToDos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setToDos([...toDos, {text: newTodo, completed: false}]);
      setNewTodo("");
    }
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...toDos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setToDos(updatedTodos);
  };

  const getCompleted = () => toDos.filter((toDo) => toDo.completed).length;

  return (
    <div className="container">
      <div className="content">
      <input 
      className="content_input"
      type="text" 
      value={newTodo}
      onChange={handleInputChange}
      placeholder="Create new task"
      />
      <button className="content_button" onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="content_list">
        {toDos.map((toDo, index) => (
          <li 
          className="content_list_item"
          key={index}
          style={{textDecoration: toDo.completed ? "line-through" : "none"}}>
            <input 
            className="content_list_item_checkbox"
            type="checkbox"
            checked={toDo.completed}
            onChange={() => handleToggleTodo(index)}
            />
            <span className="content_list_item_text">{toDo.text}</span>
          </li>
        ))}
      </ul>
      <p className="content_counting">Completed tasks: {getCompleted()}</p>
    </div>
  )
}

export default ToDoList;
