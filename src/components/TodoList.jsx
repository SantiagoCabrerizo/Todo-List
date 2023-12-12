import React, { useState } from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import TodoEdit from './TodoEdit';
uuidv4()

const TodoList = () => {

    const [todos, setTodos] = useState([])

    const add = (todo) => {
        setTodos([...todos, {
            id: uuidv4(),
            task: todo,
            completed: false,
            isEditing: false
        }])
        console.log(todos)
    }

    const checkTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

    return (
        <div className='p-5 m-4' id='todoList'>
            <h1 className='text-white display-3 text-center py-4 font-semibold'>Todo List</h1>
            <TodoForm add={add} />
            {
                todos.map((todo, index) => (
                    todo.isEditing ? (
                        <TodoEdit editTask={editTask} task={todo} />
                    ) : (
                        <TodoItem key={index} task={todo} checkTodo={checkTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
                    )
                ))
            }
        </div>
    )
}

export default TodoList
