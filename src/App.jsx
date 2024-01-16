import { useEffect, useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className='vh d-flex justify-content-center pt-5 font-monospace'>
      <TodoList />
    </div>
  )
}

export default App
