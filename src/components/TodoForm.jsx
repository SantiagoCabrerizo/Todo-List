import React, { useState } from 'react'

const TodoForm = ({ add }) => {

    const [value, setValue] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        value === '' ? (null) : (add(value))
        
        setValue("")
    }

    return (
        <div className='my-3'>
            <form onSubmit={handleChange}>
                <div className='input-group mb-3'>
                    <input type="text" value={value}
                        onChange={(e) => { setValue(e.target.value) }}
                        className='form-control' />
                    <button className='btn' type='submit'>Add Task</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm
