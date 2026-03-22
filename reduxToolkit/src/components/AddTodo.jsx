import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (!input.trim()) return

        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form
            onSubmit={addTodoHandler}
            className="flex items-center gap-3 mt-6"
        >
            {/* INPUT */}
            <input
                type="text"
                placeholder="What needs to be done?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-zinc-800 text-white px-4 py-2 rounded-xl outline-none 
                focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition"
            />

            {/* BUTTON */}
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl 
                font-medium transition disabled:opacity-50"
                disabled={!input.trim()}
            >
                Add
            </button>
        </form>
    )
}

export default AddTodo