'use client'

import React, { useState } from 'react'


interface Todo {
    id: number,
    text: string,
    isChecked: boolean
}

const Activity5 = () => {
    const[todos, setTodos] = useState<Todo[]>([])
    const [todo, setTodo] = useState('')
    const [todoId, setTodoId] = useState(0)

    const handleAddTodo = () => {
        if (todo.trim()) {
            setTodoId(todoId + 1)
            const newTodo: Todo = {
                id: todoId,
                text: todo,
                isChecked: false

            }
            setTodos([...todos, newTodo])
            setTodo("")
        }
    }

    const checkTodo = (id: number) => {
        setTodos(
            todos.map((todo) => todo.id === id ? {...todo, isChecked: !todo.isChecked} : todo)
        )
    }

    const handleRemoveTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-lg">
    <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>

    {/* Add new todo */}
    <div className="flex space-x-2 mb-4">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="p-2 border rounded-md w-full"
        placeholder="Add new todo"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Add
      </button>
    </div>

    {/* List of todos */}
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex items-center space-x-2 ${todo.isChecked ? 'line-through text-gray-500' : ''}`}
        >
          <input
            type="checkbox"
            checked={todo.isChecked}
            onChange={() => checkTodo(todo.id)}
            className="h-4 w-4"
          />
          <span className="flex-1">{todo.text}</span>
          <button
            onClick={() => handleRemoveTodo(todo.id)}
            className="text-red-500"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  </div>
);
}

export default Activity5