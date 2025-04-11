import React, { useState, useEffect } from "react";


const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday/Sunday"];

function Main() {

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      "Saturday/Sunday": [],
    };
  }); // Initialize state with localStorage data

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // Save to localStorage whenever todos change

  useEffect(() => {
    const isEmpty = Object.values(todos).every(list => list.length === 0);
    if (isEmpty) {
      localStorage.removeItem("todos");
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]); // Remove localStorage if all lists are empty
    
      const [inputs, setInputs] = useState({
        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",
        Friday: "",
        "Saturday/Sunday": "",
      }); // Initialize inputs state
    
      const handleInputChange = (day, value) => {
        setInputs(prev => ({ ...prev, [day]: value }));
      }; // Update input value
    
      const handleAddTodo = (day) => {
        const newTodo = inputs[day].trim();
        if (newTodo === "") return; // Prevent adding empty todos
    
        setTodos(prev => ({
          ...prev,
          [day]: [...prev[day], newTodo],
        })); // Add new todo to the list
    
        setInputs(prev => ({ ...prev, [day]: "" }));
      }; // Clear input after adding todo
    
      const handleDelete = (day, index) => {
        setTodos(prev => ({
          ...prev,
          [day]: prev[day].filter((_, i) => i !== index),
        }));
      }; // Delete todo from the list


      return (
        <main>
          <div className="container weekdays">
            {days.map((day) => (
              <div key={day} className={day.toLowerCase().replace("/", "")}>
                <p>{day}</p> 
    
                <div className="input-container">
                  <input
                    className="input"
                    type="text"
                    value={inputs[day]}
                    onChange={(e) => handleInputChange(day, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleAddTodo(day);
                      }
                    }}
                    placeholder="Task..."
                  />
                  <button className="addButton" onClick={() => handleAddTodo(day)}><span>+</span></button>
                </div>
    
                <ul className="todo-list">
                  {todos[day].map((todo, index) => (
                    <li key={index}>
                      <div className="listvalue">
                        <p>{todo}</p>
                      </div>
                      <div className="delete" onClick={() => handleDelete(day, index)}><span className="deletex" >X</span></div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>
      );
}

export default Main;