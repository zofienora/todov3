import React, { useState } from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday/Sunday"];

function Main() {

    const [todos, setTodos] = useState({
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        "Saturday/Sunday": [],
      });
    
      const [inputs, setInputs] = useState({
        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",
        Friday: "",
        "Saturday/Sunday": "",
      });
    
      const handleInputChange = (day, value) => {
        setInputs(prev => ({ ...prev, [day]: value }));
      };
    
      const handleAddTodo = (day) => {
        const newTodo = inputs[day].trim();
        if (newTodo === "") return;
    
        setTodos(prev => ({
          ...prev,
          [day]: [...prev[day], newTodo],
        }));
    
        setInputs(prev => ({ ...prev, [day]: "" }));
      };
    
      const handleDelete = (day, index) => {
        setTodos(prev => ({
          ...prev,
          [day]: prev[day].filter((_, i) => i !== index),
        }));
      };

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
                      <div className="delete" onClick={() => handleDelete(day, index)}><span>X</span></div>
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