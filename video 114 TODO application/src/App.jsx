import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Todo aur todos ke state ko initialize karte hain
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  // Load todos from local storage when the component mounts
  const saveTodo = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  useEffect(() => {
    let todoString = localStorage.getItem('todos')
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem('todos'))
      setTodos(todos)
    }
  }, [])

  // Input field mein value change hone par ye function call hoga
  const handleInputChange = (e) => {
    // Input field ka value set karte hain
    setTodo(e.target.value);
  };

  // Delete button click hone par ye function call hoga
  const handleDelete = (key) => {
    // todos mein se us todo ko filter karke hata dete hain jiska key match karti hai
    setTodos(todos.filter(todo => todo.key !== key));
  };

  // Edit button click hone par ye function call hoga
  const handleEdit = (key) => {
    // Edit karna hai kis todo ko, usko find karte hain
    const todoToEdit = todos.find(todo => todo.key === key);
    if (todoToEdit) {
      // Todo ka text input field mein set karte hain
      setTodo(todoToEdit.task);
      // Todo ko delete karte hain
      handleDelete(key);
    }
  };

  // Checkbox change hone par ye function call hoga
  const handleCheckboxChange = (key) => {
    // todos array mein se us todo ka isCompleted status toggle karte hain
    setTodos(
      todos.map(todo => 
        todo.key === key ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  // Add button click hone par ye function call hoga
  const handleClick = () => {
    // Agar input field empty hai to alert dikhao
    if (todo.trim() === '') {
      alert('Please enter a task');
      return;
    }
    // Naya todo object create karo
    const newTodo = {
      key: Date.now(), // Unique key generate karo
      task: todo, // Input field ka value task mein store karo
      isCompleted: false // Shuru mein isCompleted false rakho
    };
    // Naya todo ko todos array mein add karo
    setTodos([...todos, newTodo]);
    // Input field ko clear karo
    setTodo('');
  };

  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='font-bold text-2xl'>TODO App</h1>

        <div className='input mt-4'>
          <input
            placeholder='Enter Todo'
            onChange={handleInputChange}
            className='bg-white mx-3 p-2 rounded-2xl'
            type="text"
            value={todo}
          />
          <button
            onClick={handleClick}
            className='bg-blue-700 p-2 rounded-2xl cursor-pointer'
            type="button"
          >
            Add
          </button>
        </div>

        <div className='bg-gray-600 p-2 rounded-2xl w-1/2 mt-5 h-100'>
          <div className='flex flex-col bg-gray-400 rounded-2xl px-2'>
            {todos.map((t) => (
              <div className='flex justify-between items-center' key={t.key}>
                <input
                  type="checkbox"
                  checked={t.isCompleted}
                  onChange={() => handleCheckboxChange(t.key)}
                />
                <div
                  className={`displayTodo bg-gray-600 px-2 w-[70%] text-white rounded-2xl m-2 ${
                    t.isCompleted ? 'line-through' : ''
                  }`}
                >
                  {t.task}
                </div>
                <button 
                  onClick={() => handleEdit(t.key)}
                  className='bg-gray-600 px-2 m-2 rounded-2xl cursor-pointer'
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(t.key)}
                  className='bg-gray-600 px-2 m-2 rounded-2xl cursor-pointer'
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

/*
State Initialization:
todo state: Input field ka current value store karta hai.
todos state: Sabhi todos ka array store karta hai.

handleInputChange:
Input field mein value change hone par call hota hai.
setTodo se input field ka current value state mein update hota hai.

handleDelete:
Delete button click hone par call hota hai.
todos.filter se us todo ko hata dete hain jiska key match karti hai.

handleEdit:
Edit button click hone par call hota hai.
todos.find se edit karna hai kis todo ko find karte hain.
Us todo ka task input field mein set karte hain aur fir us todo ko delete karte hain.

handleCheckboxChange:
Checkbox change hone par call hota hai.
todos.map se us todo ka isCompleted status toggle karte hain.

handleClick:
Add button click hone par call hota hai.
Input field empty check karte hain, agar empty hai to alert dikhate hain.
Naya todo object create karte hain aur todos array mein add karte hain.
Input field ko clear karte hain.

Rendering Todos:
todos.map se sabhi todos ko render karte hain.
Checkbox ka checked attribute isCompleted status par depend karta hai.
className mein conditional class line-through lagate hain agar isCompleted true hai.
*/